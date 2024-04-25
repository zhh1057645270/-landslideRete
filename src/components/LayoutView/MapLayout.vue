<script setup lang="ts">
import MapView from '@/components/MapView/index.vue';
import TestPopup from '@/views/mapView/home/compoents/TestPopup.vue';

import { ref } from 'vue';

const visible = ref(true);

</script>

<template>
	<div class="map-layout">
		<!-- <div class="left-bar"></div> -->
		<div class="map-view">
			<MapView />
			<RouterView />
			
			<!-- <TestPopup v-model="visible" /> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
.map-layout {
	display: flex;
	height: 100%;
	.left-bar {
		width: 200px;
		margin-right: 5px;
		border: 1px solid rgba(16, 77, 128, 0.6);
		background: #0e2e45;
	}
	.map-view {
		position: relative;
		flex: 1;
		height: 100%;
		overflow: hidden;
		&::after {
			display: block;
			content: '';
			position: absolute;
			left: -2.5px;
			top: -2.5px;
			right: -2.5px;
			bottom: -2.5px;
			background-image: url('@/assets/imgs/map-l-t.png'), url('@/assets/imgs/map-r-t.png'), url('@/assets/imgs/map-l-b.png'),
				url('@/assets/imgs/map-r-b.png');
			background-size: 328px 327px, 322px 324px, 328px 207px, 328px 207px;
			background-repeat: no-repeat;
			background-position: left top, right top, right bottom, left bottom;
			pointer-events: none;
		}
	}
}
</style>
