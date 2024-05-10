import { List } from 'echarts';
import Response from '../interface';
import { get, post } from '../utils/index';

export namespace LSEApi {
	export const getfolderapi = (data: { folder_path: string }) => {
		return post<Response.CommonResponse<any>>('/download-folder', data, {
			responseType: 'blob',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const funGNN = (data: { in_shp: List; in_csv: string; map_url: string; gpu: Number; gnn_lyr: Number; dimension: Number }) => {
		return post<Response.CommonResponse<any>>('/LSE/GNN', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const funANN = (data: { in_shp: List; in_csv: string; map_url: string; gpu: Number; dimension: Number }) => {
		return post<Response.CommonResponse<any>>('/LSE/ANN', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const funSVM = (data: { in_shp: List; in_csv: string; map_url: string; gpu: Number; types: String }) => {
		return post<Response.CommonResponse<any>>('/LSE/SVM', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	export const funRF = (data: { in_shp: List; in_csv: string; map_url: string; gpu: Number; tree_num: Number }) => {
		return post<Response.CommonResponse<any>>('/LSE/RF', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
}
