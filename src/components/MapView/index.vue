<template>
	<div id="dt-container"></div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick, onBeforeUnmount } from 'vue';
import { initMap } from '@/utils/DTMap';
let mapInstance: Cesium.Viewer;
onMounted(() => {
	nextTick(() => {
		initMap('dt-container').then((instance) => {
			mapInstance = instance;
		});
	});
});
onBeforeUnmount(() => {
	mapInstance && mapInstance.destroy();
});
</script>

<style lang="scss" scoped>
#dt-container {
	height: 100%;
	width: 100%;
	overflow: hidden;
}
</style>
