/*
 * @Author: cl
 * @Date: 2022-02-22 17:25:13
 * @LastEditors: cl
 * @LastEditTime: 2022-02-23 10:41:21
 */
import { defineStore } from 'pinia';
import { store } from '@/stores';

// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
export const useLayoutStore = defineStore({
	// 每个 store 的 id 必须唯一
	id: 'layout',
	// state 表示数据源
	state: () => ({
		sidebarVisible: true,
	}),
	// actions 用来修改 state
	actions: {
		setSidebarVisible(visible: boolean) {
			this.sidebarVisible = visible;
		},
	},
});
// 在setup之外用
export const useLayoutStoreWithOut = () => {
	return useLayoutStore(store);
};
