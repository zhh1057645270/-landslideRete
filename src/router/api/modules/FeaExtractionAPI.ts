import { List } from "echarts/core";
import Response from "../interface";
import { get, post } from '../utils/index';


export namespace FeaExtractionApi {
    export const FeaExtraction = (data: {
        in_points: string;
        in_vector: string;
        in_rasters: List;
        types: string;
        out_csv: string;
    }) => {
        return post<Response.CommonResponse<any>>('/feature_extraction', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
}
