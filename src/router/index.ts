import { createRouter, createWebHashHistory } from 'vue-router';
import LayoutView from '@/components/LayoutView/index.vue';
import { getRoutesFiles, getFileStatisticRoutes, getMapRoutesFiles, getCommonRoutesFiles } from './utils';
import MapLayout from '@/components/LayoutView/MapLayout.vue';
import CommonView from '@/components/MapView/CommonView.vue';
const { components } = getRoutesFiles();
const routes = getFileStatisticRoutes(components);
const mapRoutes = getFileStatisticRoutes(getMapRoutesFiles().components);
const commonRoute = getFileStatisticRoutes(getCommonRoutesFiles().components);

console.log('commonRoute', commonRoute);
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'screenLayout',
			component: LayoutView,
			redirect: '/mapView/home',
			children: [
				{
					path: '/mapView',
					name: 'mapView',
					component: MapLayout,
					children: mapRoutes,
				},
				{
					path: '/commonView',
					name: 'screenLayout',
					component: CommonView,
					children: commonRoute,
				},
			],
		},
	],
});

export default router;
