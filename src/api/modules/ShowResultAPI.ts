import Response from '../interface';
import { get, post } from '../utils/index';

export namespace ShowResultAPI {
	export const ShowResult = (data: {
		// stat_method: string;
		// input_shp: string;
		input_tif: string;
		// output_tif: string;
	}) => {
		return post<Response.CommonResponse<any>>('/generate_tiles', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
}
