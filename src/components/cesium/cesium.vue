<template>
  <div id="CesiumContainer"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
// const currentInstance = getCurrentInstance()
// const { $Cesium } = currentInstance?.appContext.config.globalProperties
// const { proxy } = getCurrentInstance();
// let Cesium = proxy.Cesium;
// import * as Cesium from "cesium";
// console.log(proxy);
// console.log(Cesium);
//球
let viewer = ref();
let palaceTileset: any;
var tileset = null;
// 初始化Cesium
const initCesium = function () {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODE4MDA3Ni1lM2ZlLTRkOGEtOWZlZC1iOTAyOTkyZTZkYTciLCJpZCI6MTY4NTQ3LCJpYXQiOjE2OTU2OTUyNDF9.vYd4fP-BYmqQ1B547hfPkDSYIJZ2RBiEJHgXvWZWk7s";
  viewer.value = new Cesium.Viewer("CesiumContainer", {
    animation: false, // animation widget
    baseLayerPicker: false, // Select the 3D Digital Earth Component（imagery and terrain）。
    fullscreenButton: false, // full-screen components
    vrButton: false, // VR mode
    geocoder: false, // geocoding (search) component
    homeButton: false, // Home, Click to jump to the default view
    infoBox: false, // infobox
    sceneModePicker: false, // Scene mode，Toggle between 2D、3D and Columbus View (CV) mode。
    selectionIndicator: false, // Whether to display the selection indicator component
    timeline: false, // Timeline
    navigationHelpButton: false, // help tinps on how to manipulate the digital globe。
    // true；if you should see the navigation instructions initially. If the prompt does not appear until the user explicitly clcks the button, otherwise it is false。
    navigationInstructionsInitiallyVisible: false,
  });
  //Optimize items--Close related effects
    viewer.value.scene.debugShowFramesPerSecond = false; //display fps
  // viewer.value.scene.moon.show = false;/
  // viewer.value.scene.fog.enabled = false;//the fog
  // viewer.value.scene.sun.show = false;/
  // viewer.value.scene.skyBox.show = false;//skybox
  // viewer.value.resolutionScale = 1.0;//screen fineness, default is 1.0
  //remove copyright information
  viewer.value._cesiumWidget._creditContainer.style.display = "none";
  //turn on terrain depth detection
  viewer.value.scene.globe.depthTestAgainstTerrain = false;
  //Prohibition of double-click events
  viewer.value.cesiumWidget.screenSpaceEventHandler.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  );

  //right-click rotation
  viewer.value.scene.screenSpaceCameraController.zoomEventTypes = [
    Cesium.CameraEventType.WHEEL,
    Cesium.CameraEventType.PINCH,
  ];

  viewer.value.scene.screenSpaceCameraController.tiltEventTypes = [
    Cesium.CameraEventType.PINCH,
    Cesium.CameraEventType.RIGHT_DRAG,
  ];
  var utc = Cesium.JulianDate.fromDate(new Date("2022/06/29 6:00:00"));
  //Time=UTC+8=GMT+8
  viewer.value.clockViewModel.currentTime = Cesium.JulianDate.addHours(
    utc,
    8,
    new Cesium.JulianDate()
  );
  viewer.value.scene.screenSpaceCameraController.minimumZoomDistance = 10; //minimum zoom distance
  viewer.value.scene.screenSpaceCameraController.maximumZoomDistance = 30000000; //maximum zoom distance
  viewer.value.scene.screenSpaceCameraController._minimumZoomRate = 300; // set the rate at which the camera shrinks
  viewer.value.scene.screenSpaceCameraController._maximumZoomRate = 5906376272000; // when setting camera zoom
  // initial flight
  viewer.value.scene.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      128.8743852974,
      35.0856224658,
      1200
    ), //It is recommended to use Google Earth, coordinate position without devication.
    orientation: {
      heading: Cesium.Math.toRadians(0.1),
      pitch: Cesium.Math.toRadians(-86.0),
      //roll: 0.0
    },
    duration: 3, //time interval of positioning
  });
  // viewer.value.scene.camera.flyTo({ //to the center of the range
	// 			destination: {
	// 				x: -3278175.137507781,
	// 				y: 4069543.0112798885,
	// 				z: 3645750.5212336658
	// 			},
	// 			orientation: {
	// 				heading: 0.009204772562974917, //left and right
	// 				pitch: -0.6963930450976425, //up and down
	// 				roll: 0.0
	// 			},
	// 			//duration: 3 //positioning time interval 
	// 		})


  // return
  tileset = viewer.value.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: "http://172.30.1.95:8095/model/terra_b3dms/tileset.json",
      maximumScreenSpaceError: 2,
      maximumNumberOfLoadedTiles: 20000000,
    })
  );
  tileset.readyPromise
    .then(function () { })
    .then(function () {
      if (tileset._root.transform === undefined) {
        console.log("Tile not converted");
      }
      // tileset._root.transform = update3dtilesMaxtrix(params2);
      //viewer.zoomTo(tileset);
    });
};

onMounted(() => {
  initCesium();
});
</script>

<style scoped>
#CesiumContainer {
  width: 100%;
  height: 100%;
}
</style>