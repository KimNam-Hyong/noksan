import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router"
export const setupRouter = [
    // {
    //     path: '/index/setup/home',
    //     component: () => import("../views/echarts/echarts.vue")
    // }
]
export const IndexRouter = [
    // {
    //     path: '/', redirect: '/index/cesium'
    // },
    // {
    //     path: '/index/cesium',
    //     component: () => import("../components/cesium/cesium.vue"),//路由懒加载
    // },
    // {
    //     path: '/index/echarts',
    //     component: () => import("../views/echarts/echarts.vue"),//路由懒加载
    // },
    // {
    //     path: '/index/setup',
    //     component: () => import("../views/setup/setup.vue"),//路由懒加载
    //     children: [
    //         {
    //             path: '/index/setup', redirect: '/index/setup/home'
    //         },
    //         ...setupRouter

    //     ]
    // },
]

const routes: Array<RouteRecordRaw> = [
    //一级路由重定向
    {
        path: '/:catchAll(.*)', redirect: '/login'
    },
    {
        path: '/index',
        component: () => import("../pages/index/index.vue"),//路由懒加载
        children: [
            ...IndexRouter
        
        ]
    },
    {
        path: '/login',
        component: () => import("../pages/login/login.vue"),//路由懒加载
       
    },
]

const router = createRouter({
    history: createWebHistory(),//设置路由模式
    // history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router