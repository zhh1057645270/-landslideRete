<script lang="ts" setup>
import { ref } from 'vue';
import NavItem from './NavItem.vue';
const routers = ref([
	{
		name: 'mapView/home',
		path: '/mapView/home',
		title: '平台首页',
		icon: 'nav-1',
	},
	{
		name: 'commonView/informationStatistics',
		path: '/commonView/informationStatistics',
		title: '信息统计',
		icon: 'nav-2',
	},
	{
		name: 'commonView/realTimeAlerts',
		path: '/commonView/realTimeAlerts',
		title: '实时警报',
		icon: 'nav-3',
	},
	{
		name: 'commonView/historyAlerts',
		path: '/commonView/historyAlerts',
		title: '历史警报',
		icon: 'nav-4',
	},
	{
		name: 'commonView/informationRelease',
		path: '/commonView/informationRelease',
		title: '信息发布',
		icon: 'nav-5',
	},
	{
		name: 'commonView/systemManagement',
		path: '/commonView/systemManagement',
		title: '系统管理',
		icon: 'nav-6',
	},
]);
</script>

<template>
	<div class="layout-nav flex flex-v-c">
		<NavItem v-for="item in routers" :key="item.name" :nav="item" />
	</div>
</template>

<style lang="scss" scoped>
.layout-nav {
	position: relative;
	top: 14px;
}
</style>
