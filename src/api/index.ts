/*
 * @Author: ce
 * @Date: 2022-03-01 14:09:43
 * @LastEditors: ce
 * @LastEditTime: 2022-03-18 17:07:31
 * @FilePath: /vue-next-admin/src/api/index.ts
 */

import { ZonalStatApi } from './modules/ZonalStatAPI';
import { GrassToolApi } from './modules/GrassToolAPI';
import { Common } from './modules';
import { ReclassificationApi } from './modules/ReclassificationAPI';
import { FeaExtractionApi } from './modules/FeaExtractionAPI';
import { LSEApi } from './modules/LSEAPI';
import { ShowResultAPI } from './modules/ShowResultAPI';

export const Api = {
	Common,
	ZonalStatApi,
	GrassToolApi,
	ReclassificationApi,
	FeaExtractionApi,
	LSEApi,
	ShowResultAPI,
};
