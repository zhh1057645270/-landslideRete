/*
 * @Author: ce
 * @Date: 2022-05-09 14:01:20
 * @LastEditors: ce
 * @LastEditTime: 2022-08-17 13:58:47
 * @FilePath: /dqszlspt-max/src/utils/chartUtils.ts
 */
/**
 * 格式化浮点数
 */
/**
 * @author: ce
 * @description: RGB颜色转换为16进制
 * @method:
 * @param {string} rgbStr
 * @return {*}
 */

export function colorHex(rgbStr: string) {
	//十六进制颜色值的正则表达式
	const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	if (/^(rgb|RGB)/.test(rgbStr)) {
		const aColor = rgbStr.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
		let strHex = '#';
		for (let i = 0; i < aColor.length; i++) {
			let hex = Number(aColor[i]).toString(16);
			if (hex === '0') {
				hex += hex;
			}
			strHex += hex;
		}
		if (strHex.length !== 7) {
			strHex = rgbStr;
		}
		return strHex;
	} else if (reg.test(rgbStr)) {
		const aNum = rgbStr.replace(/#/, '').split('');
		if (aNum.length === 6) {
			return rgbStr;
		} else if (aNum.length === 3) {
			let numHex = '#';
			for (let i = 0; i < aNum.length; i += 1) {
				numHex += aNum[i] + aNum[i];
			}
			return numHex;
		}
	} else {
		return rgbStr;
	}
}

/**
 * @author: ce
 * @description: 16进制颜色值转变为RGB
 * @method:
 * @param {*} colorStr
 * @return {*}
 */
export function colorRgb(colorStr: string) {
	//十六进制颜色值的正则表达式
	const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	if (!colorStr) return '';
	let sColor = colorStr.toLowerCase();
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			let sColorNew = '#';
			for (let i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		//处理六位的颜色值f
		const sColorChange = [];
		for (let i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
		}
		return 'rgb(' + sColorChange.join(',') + ')';
	} else {
		return sColor;
	}
}

export function colorRgba(colorStr, opacity) {
	let rgbaStr = '';
	const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	if (colorStr && /^(rgba|RGBA)/.test(colorStr)) {
		rgbaStr = colorStr;
	}
	if (colorStr && /^(rgb|RGB)/.test(colorStr)) {
		const colorArr = colorStr.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
		rgbaStr = `rgba(${colorArr.join(',')}, ${opacity})`;
	} else if (colorStr && reg.test(colorStr)) {
		let sColor = colorStr.toLowerCase();
		if (sColor.length === 4) {
			let sColorNew = '#';
			for (let i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		//处理六位的颜色值f
		const colorArr = [];
		for (let i = 1; i < 7; i += 2) {
			colorArr.push(parseInt('0x' + sColor.slice(i, i + 2)));
		}
		rgbaStr = `rgba(${colorArr.join(',')}, ${opacity})`;
	} else {
		rgbaStr = `rgba(255, 255, 255, ${opacity})`;
	}
	return rgbaStr;
}
