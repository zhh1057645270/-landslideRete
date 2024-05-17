// import * as Cesium from "cesium";
import { MapcontentStoreWithOut } from '@/stores/modules/Mapcontent'; // 导入 store
// let dtScene = Cesium.Viewer.DTScene
// var dtscene = new Cesium.DTScene({"viewer":viewer});
export default function loadTileMap(viewer, params) {
	var dtscene = new Cesium.DTScene({ viewer: viewer });
	const shadedDemImagery = dtscene.createImagerLayer({
		Name: params.Name,
		uid: params.uid,
		label: params.label,
		url: params.url, //temp shaded
		// serviceType:'DTIMAGELAYERSERVICETYPE.TMS',
		format: 'png',
		maximumLevel: '12',
		// minimumLevel: '9',
		// layer: '9,10,11,12',
		// extent: [params.extent],
		// extent:[103.62468997695441, 32.89944770951416, 104.07250597160873, 33.41294368031573],
		tilingScheme: 1,
		rectangle: new Cesium.Rectangle(
			Cesium.Math.toRadians(params.extent[0]),
			Cesium.Math.toRadians(params.extent[1]),
			Cesium.Math.toRadians(params.extent[2]),
			Cesium.Math.toRadians(params.extent[3])
		),
	});
	viewer.camera.setView({
		destination: new Cesium.Rectangle(
			Cesium.Math.toRadians(params.extent[0]),
			Cesium.Math.toRadians(params.extent[1]),
			Cesium.Math.toRadians(params.extent[2]),
			Cesium.Math.toRadians(params.extent[3])
		),
	});
	// const shadedDemImagery = new Cesium.TileMapServiceImageryProvider({
	//     Name: 'DEM数据',
	//     label: 'wms切片数据',
	//     url: params.url,//temp shaded
	//     fileExtension: 'png',
	//     minimumLevel: 9,
	//     maximumLevel: 12,
	//     rectangle: new Cesium.Rectangle(
	//         Cesium.Math.toRadians(params.extent[0]),
	//         Cesium.Math.toRadians(params.extent[1]),
	//         Cesium.Math.toRadians(params.extent[2]),
	//         Cesium.Math.toRadians(params.extent[3]))
	// })

	// // store.setShadedDemImagery(shadedDemImagery);

	// viewer.camera.setView({
	//     destination: new Cesium.Rectangle(
	//         Cesium.Math.toRadians(params.extent[0]),
	//         Cesium.Math.toRadians(params.extent[1]),
	//         Cesium.Math.toRadians(params.extent[2]),
	//         Cesium.Math.toRadians(params.extent[3]))
	// });
	return viewer.imageryLayers.addImageryProvider(shadedDemImagery);
}
