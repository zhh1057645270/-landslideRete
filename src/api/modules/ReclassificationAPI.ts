import { List } from 'echarts/core';
import Response from '../interface';
import { get, post } from '../utils/index';

export namespace ReclassificationApi {
	export const getfileapi = (data: { filename: string }) => {
		return post<Response.CommonResponse<any>>('/download', data, {
			responseType: 'blob',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const get_range = (data: { input_raster: string }) => {
		return post<Response.CommonResponse<any>>('/DiscreteReclass/get_range', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const reclass_discrete = (data: { data_ori: List; data_new: List; output_raster: String }) => {
		return post<Response.CommonResponse<any>>('/DiscreteReclass/reclass_discrete', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const get_breaks = (data: { input_raster: string; select_method: string; reclass_n: Number }) => {
		return post<Response.CommonResponse<any>>('/ContinuousReclass/get_breaks', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const reclass_continuous = (data: { value_ori: List; value_new: List; output_raster: String }) => {
		return post<Response.CommonResponse<any>>('/ContinuousReclass/reclass_continuous', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
}
