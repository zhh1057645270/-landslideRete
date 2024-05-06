/*
 * @Author: ce
 * @Date: 2022-03-18 13:44:14
 * @LastEditors: ce
 * @LastEditTime: 2022-03-18 14:14:17
 * @FilePath: /vue-next-admin/src/api/utils.ts
 */

import { instanceSHZT, instance } from '@/utils/request';
// import qs from 'qs';
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
	return instance.get<string, T>(url, {
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
	return instance.post<string, T>(url, data, config);
}

const baseGet = ( callBack: Function, url:string,data?: Object ) =>{

	return callBack({
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		url:url,
		method:'GET',
		params:data,
		paramsSerializer: (params: any) => {
			return qs.stringify(params, { indices:  false })
		}
	})
}


const basePost = ( callBack: Function, url:string,data: Object, isFormData :boolean ) =>{

	const myConfig : any = {
		url: url,
		method: 'POST',
		data: data
	};

	if( isFormData ){

		const fn = (data: { [x: string]: string }, headers: any) =>{

			const formData = new FormData();

			for (const key of Object.keys(data)) {
				formData.append(key,data[key]);
			}

			return formData;
		}

		myConfig.transformRequest = [fn]
	}

	return callBack(myConfig)
}
const basePut = ( callBack: Function, url:string,data: Object, isFormData: boolean) =>{

	const myConfig : any = {
		url: url,
		method: 'PUT',
		data: data
	};

	if( isFormData ){

		const fn = (data: { [x: string]: string }, headers: any) =>{

			const formData = new FormData();

			for (const key of Object.keys(data)) {
				formData.append(key,data[key]);
			}

			return formData;
		}
		myConfig.transformRequest = [fn]
	}

	return callBack(myConfig)
}
const baseDelete = ( callBack: Function, url:string,data: Object) =>{

	return callBack({
		url:url,
		method:'DELETE',
		params:data,
		paramsSerializer: (params: any) => {
			return qs.stringify(params, { indices:  false })
		}
	})
}

export const fetchDataPut = <T>(url: string, isFormData = false) => (data: object) : Promise<InnerResponse<T>> => basePut(instanceSHZT,url,data, isFormData);
export const fetchDataPost = <T>(url: string, isFormData = false) => (data: object) : Promise<InnerResponse<T>> => basePost(instanceSHZT,url,data, isFormData);
export const fetchDataDelete = <T>(url: string) => (data: object) : Promise<InnerResponse<T>> => baseDelete(instanceSHZT,url,data);
export const fetchDataApi = <T>(url: string) => (data?: object): Promise<InnerResponse<T>> => baseGet(instanceSHZT, url, data)

type JSONResponse = {
	code: number
	msg: string
}

interface InnerResponse<T> extends JSONResponse {
	data: T
	results: T
}