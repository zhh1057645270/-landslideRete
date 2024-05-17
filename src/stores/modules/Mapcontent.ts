// import { defineStore } from 'pinia';
// import { store } from '@/stores';
// export const MapcontentStore = defineStore({
//     id: 'map',
//     state: () => ({
//         shadedDemImagery: null,
//     }),
//     actions: {
//         setShadedDemImagery(imagery: any) {
//             this.shadedDemImagery = imagery;
//         },
//     },
// });
import { defineStore } from 'pinia';
import { store } from '@/stores';

// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
export const MapcontentStore = defineStore({
	// 每个 store 的 id 必须唯一
	id: 'map',
	// state 表示数据源
	state: () => ({
		shadedDemImagery: null,
	}),
	// actions 用来修改 state
	actions: {
		setShadedDemImagery(imagery: any) {
			this.shadedDemImagery = imagery;
		},
	},
});
// 在setup之外用
export const MapcontentStoreWithOut = () => {
	return MapcontentStore(store);
};
