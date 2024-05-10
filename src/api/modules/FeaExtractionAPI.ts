import { List } from 'echarts/core';
import Response from '../interface';
import { get, post } from '../utils/index';

export namespace FeaExtractionApi {
	export const FeaExtraction = (data: { in_points: List; in_vector: List; in_rasters: List; types: string; out_csv: string }) => {
		return post<Response.CommonResponse<any>>('/feature_extraction', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const getfileapi = (data: { filename: string }) => {
		return post<Response.CommonResponse<any>>('/download', data, {
			responseType: 'blob',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
}
