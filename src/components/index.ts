import vProgressbar from "./Progress bar/Progress bar.vue";//进度条
import vUppage from "./upPage/upPage.vue";//检查更新
import vCesium from "../components/cesium/cesium.vue";//CESIUM
// Echarts
// import vHistogram from "./echarts/Histogram.vue";
// import vLinechart from "./echarts/Line chart.vue";
// import vPiepicture from "./echarts/Pie picture.vue"
// import vScatterplot from "./echarts/Scatter plot.vue"
// export default function install(app: any) {
//     app.component('vMap', vHead)
// }
export const componentPligin = {
    install(app: any) {
        // app.component('组件名字',组件配置对象)
        app.component('vProgressbar', vProgressbar)
        app.component('vUppage', vUppage)
        app.component('vCesium', vCesium)
        // app.component('vLinechart', vLinechart)
        // app.component('vPiepicture', vPiepicture)
        // app.component('vScatterplot', vScatterplot)

    }
}
