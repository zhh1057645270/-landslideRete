// import * as Cesium from "cesium";
const initMap = (container: string) => {
	return new Promise<Cesium.Viewer>((resolve, reject) => {
		createCesiumScript();
		if (Window['CESIUM_LOADED']) {
			const viewInstance = createMapInstance(container);
			resolve(viewInstance);
		} else {
			const target = document.getElementById('cesiumScript');
			const containerTarget = document.getElementById(container);
			const aniTarget = `<div class='map-loading'></div>`;
			containerTarget?.classList.add('loading-mask', 'flex', 'flex-a-c');
			containerTarget!.innerHTML = aniTarget;
			const loadListener = () => {
				containerTarget!.innerHTML = '';
				containerTarget?.classList.remove('loading-mask', 'flex', 'flex-all-center');
				const viewInstance = createMapInstance(container);
				target?.removeEventListener('load', loadListener);
				resolve(viewInstance);
			};
			target?.addEventListener('load', loadListener);
		}
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

const createCesiumScript = function () {
	let target = document.getElementById('cesiumScript');
	if (target) return;
	Window['CESIUM_LOADED'] = false;
	target = document.createElement('script');
	target.setAttribute('id', 'cesiumScript');
	target.setAttribute('src', '/Cesium/Cesium.js');
	const head = document.getElementsByTagName('head')[0];
	head.appendChild(target);
	target.onload = function (env) {
		Window['CESIUM_LOADED'] = true;
	};
};

export { createCesiumScript, createMapInstance, initMap };
