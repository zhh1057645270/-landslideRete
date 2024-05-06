/*
 * @Author: ce
 * @Date: 2022-07-29 14:37:26
 * @LastEditors: ce
 * @LastEditTime: 2022-07-29 14:40:11
 * @FilePath: /dqszlspt-max/src/api/module/common.ts
 */
import axios from 'axios';
export namespace Common {
	export namespace Weather {
		export const getWeather = (location: string) =>
			axios.get(`https://devapi.qweather.com/v7/weather/now?key=79380c06c35943cdbc3fe4f72b3ebf53&location=${location}`);

		export const getGeoName = (name: string) =>
			axios.get(`https://geoapi.qweather.com/v2/city/lookup?key=79380c06c35943cdbc3fe4f72b3ebf53&location=${name}`);

		export const getAQI = (location: string) =>
			axios.get(`https://devapi.qweather.com/v7/air/now?key=79380c06c35943cdbc3fe4f72b3ebf53&location=${location}`);
		export const getGeoLocation = () => axios.get('https://restapi.amap.com/v3/ip?key=7493d9c10b57b8099253d1d8d444031e');
	}
}
