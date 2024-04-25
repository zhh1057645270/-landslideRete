/*
 * @Author: ce
 * @Date: 2022-04-11 11:06:32
 * @LastEditors: ce
 * @LastEditTime: 2022-08-05 16:35:54
 * @FilePath: /dqszlspt-max/src/utils/index.ts
 */

/**
 * 时间日期转换
 * @param date 当前时间，new Date() 格式
 * @param format 需要转换的时间格式字符串
 * @description format 字符串随意，如 `YYYY-mm、YYYY-mm-dd`
 * @description format 季度："YYYY-mm-dd HH:MM:SS QQQQ"
 * @description format 星期："YYYY-mm-dd HH:MM:SS WWW"
 * @description format 几周："YYYY-mm-dd HH:MM:SS ZZZ"
 * @description format 季度 + 星期 + 几周："YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ"
 * @returns 返回拼接后的时间字符串
 */
export function formatDate(date: Date, format: string): string {
	const we = date.getDay(); // 星期
	const z = getWeek(date); // 周
	const qut = Math.floor((date.getMonth() + 3) / 3).toString(); // 季度
	const opt: { [key: string]: string } = {
		'Y+': date.getFullYear().toString(), // 年
		'm+': (date.getMonth() + 1).toString(), // 月(月份从0开始，要+1)
		'd+': date.getDate().toString(), // 日
		'H+': date.getHours().toString(), // 时
		'M+': date.getMinutes().toString(), // 分
		'S+': date.getSeconds().toString(), // 秒
		'q+': qut, // 季度
	};
	// 中文数字 (星期)
	const week: { [key: string]: string } = {
		'0': '日',
		'1': '一',
		'2': '二',
		'3': '三',
		'4': '四',
		'5': '五',
		'6': '六',
	};
	// 中文数字（季度）
	const quarter: { [key: string]: string } = {
		'1': '一',
		'2': '二',
		'3': '三',
		'4': '四',
	};
	if (/(W+)/.test(format))
		format = format.replace(RegExp.$1, RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '星期' + week[we] : '周' + week[we]) : week[we]);
	if (/(Q+)/.test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 4 ? '第' + quarter[qut] + '季度' : quarter[qut]);
	if (/(Z+)/.test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 3 ? '第' + z + '周' : z + '');
	for (const k in opt) {
		const r = new RegExp('(' + k + ')').exec(format);
		// 若输入的长度不为1，则前面补零
		if (r) format = format.replace(r[1], RegExp.$1.length == 1 ? opt[k] : opt[k].padStart(RegExp.$1.length, '0'));
	}
	return format;
}
/**
 * 获取当前日期是第几周
 * @param dateTime 当前传入的日期值
 * @returns 返回第几周数字值
 */
export function getWeek(dateTime: Date): number {
	const temptTime = new Date(dateTime.getTime());
	// 周几
	const weekday = temptTime.getDay() || 7;
	// 周1+5天=周六
	temptTime.setDate(temptTime.getDate() - weekday + 1 + 5);
	let firstDay = new Date(temptTime.getFullYear(), 0, 1);
	const dayOfWeek = firstDay.getDay();
	let spendDay = 1;
	if (dayOfWeek != 0) spendDay = 7 - dayOfWeek + 1;
	firstDay = new Date(temptTime.getFullYear(), 0, 1 + spendDay);
	const d = Math.ceil((temptTime.valueOf() - firstDay.valueOf()) / 86400000);
	const result = Math.ceil(d / 7);
	return result;
}
export const deepClone = (obj: any) => {
	let result: any;
	if (typeof obj !== 'object' || typeof obj == null) {
		return obj;
	}
	if (obj instanceof Array) {
		result = [];
	} else {
		result = {};
	}
	let key;
	for (key in obj) {
		// 判断key 不是原型的属性
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			// 递归赋值
			result[key] = deepClone(obj[key]);
		}
	}
	return result;
};

// 判断参数是否是纯对象
export const isPlainObject = (obj) => {
	if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
		return false;
	}
	const proto = Object.getPrototypeOf(obj);
	if (!proto) return true;
	const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	return typeof Ctor === 'function' && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
};

// 对象浅合并
export const shallowMerge = (obj1, obj2) => {
	const isPlain1 = isPlainObject(obj1);
	const isPlain2 = isPlainObject(obj2);
	//只要obj1不是对象，那么不管obj2是不是对象，都用obj2直接替换obj1
	if (!isPlain1) return obj2;
	//走到这一步时，说明obj1肯定是对象，那如果obj2不是对象，则还是以obj1为主
	if (!isPlain2) return obj1;
	//如果上面两个条件都不成立，那说明obj1和obj2肯定都是对象， 则遍历obj2 进行合并
	const keys = [...Object.keys(obj2), ...Object.getOwnPropertySymbols(obj2)];
	keys.forEach(function (key) {
		obj1[key] = obj2[key];
	});

	return obj1;
};
// 对象深度合并
export const deepMerge = (obj1, obj2, cache) => {
	//防止死循环，这里需要把循环过的对象添加到数组中
	cache = !Array.isArray(cache) ? [] : cache;
	//因为后面只对obj2进行遍历，所以这里只要判断obj2就可以了，如果obj2已经比较合并过了则直接返回obj2，否则在继续合并
	if (cache.indexOf(obj2) > -1) return obj2;
	cache.push(obj2);
	const isPlain1 = isPlainObject(obj1);
	const isPlain2 = isPlainObject(obj2);
	//obj1或obj2中只要其中一个不是对象，则按照浅合并的规则进行合并
	if (!isPlain1 || !isPlain2) return shallowMerge(obj1, obj2);
	//如果都是对象，则进行每一层级的递归合并
	const keys = [...Object.keys(obj2), ...Object.getOwnPropertySymbols(obj2)];
	keys.forEach(function (key) {
		obj1[key] = deepMerge(obj1[key], obj2[key], cache); //这里递归调用
	});

	return obj1;
};

//RETE

import { BaseSchemes, GetSchemes, NodeEditor } from "rete";
import { AreaPlugin } from "rete-area-plugin";
import { Size } from "rete-area-plugin/_types/types";
import { Position } from "./types";
import { checkElementIntersectPath } from "./utils";

type Schemes = GetSchemes<
	BaseSchemes["Node"] & Size,
	BaseSchemes["Connection"]
>;

export function checkIntersection(
	position: Position,
	size: { width: number; height: number },
	connections: (readonly [string, HTMLElement])[]
): false | string {
	const paths = connections.map(([id, element]) => {
		const path = element.querySelector("path");

		if (!path) throw new Error("path not found");

		return [id, element, path] as const;
	});

	for (const [id, , path] of paths) {
		if (checkElementIntersectPath({ ...position, ...size }, path)) {
			return id;
		}
	}

	return false;
}

type Props<S extends Schemes> = {
	createConnections: (
		node: S["Node"],
		connection: S["Connection"]
	) => Promise<void>;
};

export function insertableNodes<S extends Schemes>(
	area: AreaPlugin<S, any>,
	props: Props<S>
) {
	area.addPipe(async (context) => {
		if (context.type === "nodedragged") {
			const editor = area.parentScope<NodeEditor<S>>(NodeEditor);
			const node = editor.getNode(context.data.id);
			const view = area.nodeViews.get(context.data.id);
			const cons = Array.from(area.connectionViews.entries()).map(
				([id, view]) => [id, view.element] as const
			);

			if (view) {
				const id = checkIntersection(view.position, node, cons);

				if (id) {
					const exist = editor.getConnection(id);

					if (exist.source !== node.id && exist.target !== node.id) {
						await editor.removeConnection(id);
						await props.createConnections(node, exist);
					}
				}
			}
		}
		return context;
	});
}
