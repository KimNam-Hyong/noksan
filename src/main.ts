import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//icon
import { componentPligin } from './components/index'//全局组件
import * as Cesium from "cesium";
import * as Echarts from 'echarts'
// 重置样式
import "./assets/css/reset.css"
// rem
import "./assets/js/rem.js"
const app = createApp(App)
// ElementPlus 的icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$Cesium = Cesium;
app.config.globalProperties.$Echarts = Echarts;
app.use(router).use(ElementPlus).use(componentPligin).mount('#app')
