<template>
    <div id="CesiumContainer"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, getCurrentInstance } from "vue"
// const currentInstance = getCurrentInstance()
// const { $Cesium } = currentInstance?.appContext.config.globalProperties
const { proxy } = getCurrentInstance();
// console.log(proxy);
// console.log(proxy.$Cesium);
//球
let viewer = ref();

// 初始化Cesium
const initCesium = function () {
    // 设置Token
    proxy.$Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODE4MDA3Ni1lM2ZlLTRkOGEtOWZlZC1iOTAyOTkyZTZkYTciLCJpZCI6MTY4NTQ3LCJpYXQiOjE2OTU2OTUyNDF9.vYd4fP-BYmqQ1B547hfPkDSYIJZ2RBiEJHgXvWZWk7s";
    viewer.value = new proxy.$Cesium.Viewer("CesiumContainer", {
        animation: false, // 动画小组件
        baseLayerPicker: false, // 底图组件，选择三维数字地球的底图（imagery and terrain）。
        fullscreenButton: false, // 全屏组件
        vrButton: false, // VR模式
        geocoder: false, // 地理编码（搜索）组件
        homeButton: false, // 首页，点击之后将视图跳转到默认视角
        infoBox: false, // 信息框
        sceneModePicker: true, // 场景模式，切换2D、3D 和 Columbus View (CV) 模式。
        selectionIndicator: false, // 是否显示选取指示器组件
        timeline: false, // 时间轴
        navigationHelpButton: false, // 帮助提示，如何操作数字地球。
        // 如果最初应该看到导航说明，则为true；如果直到用户明确单击该按钮，则该提示不显示，否则为false。
        navigationInstructionsInitiallyVisible: false
    });
    // 初始飞行
    viewer.value.scene.camera.flyTo({
        destination: proxy.$Cesium.Cartesian3.fromDegrees(
            116.4371077214,
            39.9053759642,
            1200
        ), //定位坐标点，建议使用谷歌地球坐标位置无偏差
        orientation: {
            heading: proxy.$Cesium.Math.toRadians(0.1),
            pitch: proxy.$Cesium.Math.toRadians(-86.0),
            //roll: 0.0
        },
        duration: 3, //定位的时间间隔
    });
}


onMounted(() => {
    initCesium()

})
</script>

<style scoped>
#CesiumContainer {
    width: 100%;
    height: 100%;
}
</style>