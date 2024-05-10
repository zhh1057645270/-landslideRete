import Response from '../interface';
import { get, post } from '../utils/index';

export namespace GrassToolApi {
	export const getfileapi = (data: { filename: string }) => {
		return post<Response.CommonResponse<any>>('/download', data, {
			responseType: 'blob',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const GrassTool = (data: {
		input_raster: string;
		divide_size: Number;
		merge_size: Number;
		output_slopeunit: string;
		output_cvar: string;
		output_area: string;
	}) => {
		return post<Response.CommonResponse<any>>('/grasstool', data, {
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
