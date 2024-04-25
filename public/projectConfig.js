/*
 * @Author: cl
 * @Date: 2022-02-25 16:31:38
 * @LastEditors: QiaoJiangwei 2454640998@qq.com
 * @LastEditTime: 2022-09-05 08:49:42
 */
var projectConfig = {
	baseUrl: '',
	dtServerUrl: '',
	dtServer: '',
	title: '滑坡易发性评估分析系统',
	showBaseMap: false, //是否显示底图
	showTDTMap: ['影像底图', '影像注记'], //顺序为影像加载顺序 "矢量底图"/"矢量注记"/"影像底图"/"影像国界"/"影像注记"/"地形底图"/"地形国界"/"地形注记"
	tdtToken: '70dc47b131dstsftkstef27616d9f788',
	debuger: {
		fps: false,
		layerControl: false,
	},
	homeView: {
		orientation: {
			heading: 0.05810696927254533,
			pitch: -0.5838683820374202,
			roll: 0.00000901193017366353,
		},
	},
};
