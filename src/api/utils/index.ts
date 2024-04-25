/*
 * @Author: ce
 * @Date: 2022-03-18 13:44:14
 * @LastEditors: ce
 * @LastEditTime: 2022-03-18 14:14:17
 * @FilePath: /vue-next-admin/src/api/utils.ts
 */
import request from '@/utils/request';
import { AxiosRequestConfig } from 'axios';

/**
 * @author: ce
 * @description: get方法
 * @method:
 * @param {string} url
 * @param {any} params
 * @param {AxiosRequestConfig} config
 * @return {*}
 */
export function get<T>(url: string, params?: any, config?: AxiosRequestConfig) {
	return request.get<string, T>(url, {
		params,
		...config,
	});
}

/**
 * @author: ce
 * @description: post方法
 * @method:
 * @param { string } url
 * @param { any } data
 * @param { AxiosRequestConfig } config
 * @return {*}
 */
export function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
	return request.post<string, T>(url, data, config);
}
