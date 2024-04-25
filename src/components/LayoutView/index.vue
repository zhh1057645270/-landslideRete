<script lang="ts" setup>
import { RouterView } from 'vue-router';
// import MapView from '@/components/MapView/index.vue';
import TimeDate from './timeDate.vue';
import Simulation from './simulation.vue';
import Analyse from './analyse.vue';
import LayoutBox from './layoutBox.vue';
import SysTitle from './sysTitle.vue';
import User from './user.vue';
import Weather from './weather.vue';
import leftSidebar from './leftSidebar.vue';
import buttombar from './buttombar.vue';
</script>

<template>
	<LayoutBox>
		<LayoutHeader />
		<Simulation />
		<Analyse />
		<LayoutInnerBox>
			<RouterView />
		</LayoutInnerBox>
	</LayoutBox>
	<leftSidebar>
	</leftSidebar>
	<buttombar>
	</buttombar>
	<!-- <MapView /> -->
	<!-- <div class="map-above-view">
		<SysTitle class="st-p" />
		<TimeDate class="t-p" />
		<div class="sl-r flex flex-v-c hoverable">
			<Weather />
			<div class="h-s-l"></div>
			<User />
		</div>
		<RouterView />
	</div> -->
</template>

<style lang="scss" scoped>
.t-p {
	position: absolute;
	top: 30px;
	left: 20px;
}
.st-p {
	display: inline-block;
	position: absolute;
	left: 50%;
	top: 9px;
	transform: translateX(-50%);
}
.sl-r {
	position: absolute;
	right: 20px;
	top: 32px;
}
.map-above-view {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
}
</style>
