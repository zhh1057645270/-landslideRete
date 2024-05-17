import loadTileMap from '@/utils/imagery.js';
import { storeToRefs } from 'pinia';
import { MapcontentStoreWithOut } from '@/stores/modules/Mapcontent';
let DTViewer: Cesium.Viewer;
let layerControl: Cesium.DTLayerControl;
let m_DTEvent: any;
const mapstore = MapcontentStoreWithOut();

const mapClickEvent = (viewer: Cesium.Viewer) => {
	viewer.screenSpaceEventHandler.setInputAction((evt) => {
		const pickfeature = viewer.scene.pick(evt.position.clone());
		const po = viewer.scene.pickPosition(evt.position.clone());
		if (po) {
			const cart = Cesium.Cartographic.fromCartesian(po);
			const lon = Cesium.Math.toDegrees(cart.longitude);
			const lat = Cesium.Math.toDegrees(cart.latitude);
			const he = cart.height;
			// debugger
		}

		// POI
		if (pickfeature?.id?.clickEvent) {
			pickfeature.id.clickEvent.apply(this, [pickfeature.id]);
		}
	}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};

const initMap = (container: string) => {
	return new Promise<Cesium.Viewer>((resolve, reject) => {
		const target = document.getElementById('cesiumScript');
		const containerTarget = document.getElementById(container);
		const aniTarget = `<div class='map-loading'></div>`;
		containerTarget?.classList.add('loading-mask', 'flex', 'flex-a-c');
		containerTarget!.innerHTML = aniTarget;
		const loadListener = () => {
			containerTarget!.innerHTML = '';
			containerTarget?.classList.remove('loading-mask', 'flex', 'flex-all-center');

			const viewInstance = createMapInstance(container);
			DTViewer = viewInstance;
			m_DTEvent = new Cesium.DTEvents(DTViewer);
			mapClickEvent(viewInstance);
			// let dtScene=viewInstance.DTScene
			const dtLayerControl = createMapTree(viewInstance); //添加地图树
			layerControl = dtLayerControl;
			dtLayerControl.switchVisilibity(true);
			createDEM(viewInstance);
			// const a=mapstore.shadedDemImagery

			// dtScene.createImagerLayer('Shaded DEM', mapstore.shadedDemImagery);

			target?.removeEventListener('load', loadListener);
			resolve(viewInstance);
		};
		target?.addEventListener('load', loadListener);
	});
};

const createMapInstance = (container: string) => {
	return Cesium.DTGlobeViewer.createViewer(Cesium, container, false, {
		geocoder: false,
		contextOptions: {
			webgl: {
				alpha: true,
				depth: false,
				stencil: true,
				antialias: true,
				premultipliedAlpha: true,
				preserveDrawingBuffer: true,
				failIfMajorPerformanceCaveat: true,
			},
			allowTextureFilterAnisotropic: true,
		},
	});
};

const createMapTree = (viewer: Cesium.Viewer) => {
	return new Cesium.DTLayerControl({
		viewer,
		width: 200,
		height: 400,
		top: 60,
		left: 10,
	});
};

// const createCesiumScript = function () {
// 	let target = document.getElementById('cesiumScript');
// 	if (target) return;
// 	Window['CESIUM_LOADED'] = false;
// 	target = document.createElement('script');
// 	target.setAttribute('id', 'cesiumScript');
// 	target.setAttribute('src', '/Cesium/Cesium.js');
// 	const head = document.getElementsByTagName('head')[0];
// 	head.appendChild(target);
// 	target.onload = function (env) {
// 		Window['CESIUM_LOADED'] = true;
// 	};
// };

const createDEM = (viewer: Cesium.DTGlobeViewer) => {
	// alert(4)
	let params: {};
	const xhr = new XMLHttpRequest();
	// 配置请求，指定请求方法和 URL
	xhr.open('GET', 'src/assets/data/input_Feature_Extraction_jl_road/tilemapresource.xml', true);
	xhr.onreadystatechange = function () {
		// 当请求完成且响应状态码为 200（表示成功）时
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			// 获取响应数据
			const xmlData = xhr.responseText;
			// 使用 DOMParser 解析 XML
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
			// 通过 DOM 方法获取数据
			const boundingBoxElement = xmlDoc.getElementsByTagName('BoundingBox')[0];
			const minx = boundingBoxElement.getAttribute('minx');
			const miny = boundingBoxElement.getAttribute('miny');
			const maxx = boundingBoxElement.getAttribute('maxx');
			const maxy = boundingBoxElement.getAttribute('maxy');
			params = {
				url: 'src/assets/data/input_Feature_Extraction_jl_road',
				extent: [minx, miny, maxx, maxy],
				Name: 'DEM数据',
				uid: 'dem1',
				label: 'tms切片数据',
			};

			loadTileMap(viewer, params);
			// createMapTree(options)
		}
	};
	xhr.send();
	// dtScene.createImagerLayer
};

export { createMapInstance, initMap, createDEM };
