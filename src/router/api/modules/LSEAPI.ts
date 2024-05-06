import Response from "../interface";
import { get, post } from '../utils/index';


export namespace LSEApi {
    export const funGNN = (data: {
        out_path: string;
        in_shp: string;
        in_csv: string;
        gpu: Number;
        gnn_lyr: Number;
        dimension: Number;
    }) => {
        return post<Response.CommonResponse<any>>('/LSE/GNN', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    export const funANN = (data: {
        out_path: string;
        in_shp: string;
        in_csv: string;
        gpu: Number;
        dimension: Number;
    }) => {
        return post<Response.CommonResponse<any>>('/LSE/ANN', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    export const funSVM = (data: {
        out_path: string;
        in_shp: string;
        in_csv: string;
        gpu: Number;
        types: String;
    }) => {
        return post<Response.CommonResponse<any>>('/LSE/SVM', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    export const funRF = (data: {
        out_path: string;
        in_shp: string;
        in_csv: string;
        gpu: Number;
        tree_num: Number;
    }) => {
        return post<Response.CommonResponse<any>>('/LSE/RF', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };


}
