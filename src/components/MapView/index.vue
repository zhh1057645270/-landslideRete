<template>
	<div id="dt-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { initMap, createDEM, createMapInstance } from '@/utils/DTMap';
import { storeToRefs } from 'pinia';
import loadTileMap from '@/utils/imagery.js';
import { MapcontentStoreWithOut } from '@/stores/modules/Mapcontent';
let mapInstance: Cesium.Viewer;
//  v-if="selectedFeature"
// 当前选中的地理要素
const selectedFeature = ref(null);
const mapstore = MapcontentStoreWithOut();
onMounted(() => {
	nextTick(() => {
		initMap('dt-container').then((instance) => {
			mapInstance = instance;
			let dtScene = mapInstance.DTScene;
			//  dtScene.createImagerLayer('Shaded DEM', store.shadedDemImagery);

			dtScene
				.importDTCzmlFromURL(
					'http://118.114.239.186:8390/demo/dtserver-0.0.1/DTServer/Scene/BrowsingPublicScene/?id=85REDV1BFTP02/ZHL&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJaSEwiLCJleHAiOjQwNzA4ODAwMDAsImlhdCI6MTY5NjY0NjUzNX0.kZr-HKZi5Koerp8TTGvkJ9HTYuSiNXYKUjVsTt1UYj8'
				)
				.then(() => {});
			// initSceneData();
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
