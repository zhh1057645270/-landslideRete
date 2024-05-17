import { List } from 'echarts';
import Response from '../interface';
import { get, post } from '../utils/index';

export namespace ZonalStatApi {
	export const getfileapi = (data: { filename: string }) => {
		return post<Response.CommonResponse<any>>('/download', data, {
			responseType: 'blob',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const ZonalStat = (data: { stat_method: string; input_shp: List; input_tif: string; output_tif: string }) => {
		return post<Response.CommonResponse<any>>('/processraster', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const testapi = (data: {}) => {
		return get<Response.CommonResponse<any>>('/scene', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
}
