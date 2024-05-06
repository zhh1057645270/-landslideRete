import Response from "../interface";
import { get, post } from '../utils/index';


export namespace ZonalStatApi {
    export const ZonalStat = (data:{
        stat_method: string;
		input_shp: string;
		input_tif: string;
		output_tif: string;
    }) => {
        return post<Response.CommonResponse<any>>('/processraster',data,{
            headers:{
                'Content-Type': 'application/json',
            },
        });
    };
    export const testapi = (data:{}) => {
        return get<Response.CommonResponse<any>>('/scene',data,{
            headers:{
                'Content-Type': 'application/json',
            },
        });
    };

    
}
