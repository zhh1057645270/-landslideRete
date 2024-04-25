/*
 * @Author: cl
 * @Date: 2021-04-23 09:31:14
 * @LastEditors: ce
 * @LastEditTime: 2022-08-12 11:32:18
 */
import type { Canceler } from 'axios';
import axios from 'axios';
import { Session } from './storage';
import { ElNotification } from 'element-plus';
export let axiosCancel: { cancel: Canceler }[] = []; // 全局定义一个存放取消请求的标识
//取消所有请求，会触发请求的catch(cb)
export function cancelAllAxios() {
	axiosCancel.forEach((ele, index) => {
		console.log(ele);
	});
	axiosCancel = [];
}
const instance = axios.create({
	baseURL: projectConfig.baseUrl + '/api', //接口统一域名
	timeout: 5000, //设置超时
});
const instances = [instance];

instances.forEach((r) => {
	const def = r.defaults as any;
	def['retry'] = 2;
	def['retryDelay'] = 1000;
	//请求拦截器
	r.interceptors.request.use(
		function (config: any) {
			//在发送请求之前做些什么 token
			if (Session.get('token')) {
				config.headers.common['Authorization'] = `${Session.get('token')}`;
			}
			return config;
		},
		function (error: any) {
			// 对请求错误做些什么
			return Promise.reject(error);
		}
	);
	//响应拦截器
	r.interceptors.response.use(
		function (response: { data: any; config: any }) {
			const data = response.data.code ? response.data : response;
			// console.log('请求成功', response.config.url)

			switch (data.code) {
				case undefined:
					break;
				case 1000:
					break;
				case 2000:
					ElNotification({
						type: 'error',
						title: '非法请求',
						message: data.msg,
					});
					break;
				case 3000:
					if (data.msg && data.msg.includes('已存在')) {
						ElNotification({ type: 'error', title: data.msg, message: '' });
					} else {
						ElNotification({
							type: 'error',
							title: '重复操作',
							message: data.msg,
						});
					}
					break;
				case 4000:
					ElNotification({
						type: 'error',
						title: '非同一用户',
						message: data.msg,
					});
					break;
				case 5000:
					//退出登录
					ElNotification({
						type: 'error',
						title: '登陆失效',
						message: data.msg,
					});
					break;
				case 6000:
					ElNotification({
						type: 'error',
						title: '校验失败',
						message: data.msg,
					});
					break;
				case 7000:
					//退出登录
					if (!Session.get('flag')) return; //登录已经失效则不需要再执行
					ElNotification({
						type: 'error',
						title: '登陆失效',
						message: data.msg,
					});
					break;
				case 8000:
					break;
				default:
					// ElNotification({ type: 'error', title: '未知错误', message: data.msg });
					break;
			}
			return data;
		},
		function (err: any) {
			// 对响应错误做点什么
			// console.log('请求失败', err.config)
			const config = err.config;
			// 如果config不存在或没有设置重试选项，则拒绝
			if (!config || !config.retry) return Promise.reject(err);
			// 超过重试次数报错
			if (config?.__retryCount >= config.retry) {
				// Reject with the error
				return Promise.reject(err);
			}

			//设置用于跟踪重新链接计数的变量
			config.__retryCount = config?.__retryCount || 0;

			// 超过重试次数报错
			if (config?.__retryCount >= config.retry) {
				// Reject with the error
				return Promise.reject(err);
			}
			config.__retryCount++;
			const backoff = new Promise(function (resolve) {
				setTimeout(function () {
					resolve(1);
				}, config.retryDelay || 1);
			});
			// 重新请求
			return backoff.then(function () {
				return r(config);
			});
		}
	);
});

export { instance };
