/*
 * @Author: ce
 * @Date: 2022-03-01 11:00:47
 * @LastEditors: ce
 * @LastEditTime: 2022-03-18 13:35:00
 * @FilePath: /vue-next-admin/src/api/interface/index.ts
 */

namespace Response {
	export interface CommonResponse<T> {
		code: number;
		data: T;
		msg: string;
	}
	export interface PagerResponse<T> {
		data: {
			pageNum: number;
			pageSize: number;
			count: number;
			pageCount: number;
		};
		code: number;
		msg: string;
		results: T[];
	}
}

export default Response;
