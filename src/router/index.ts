import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router"
export const setupRouter = [
    // {
    //     path: '/index/setup/home',
    //     component: () => import("../views/echarts/echarts.vue")
    // }
]
export const IndexRouter = [
    {
        path: '/', redirect: '/user/info'
    },
    {
        path: '/user/notice',
        component: () => import("../views/info/Notice.vue"),//路由懒加载
    },
    {
        path: '/user/mainview',
        component: () => import("../views/view/mainview.vue"),//路由懒加载
    },
    {
        path: '/user/miniview',
        component: () => import("../views/view/miniview.vue"),//路由懒加载
    },
    {
        path: '/user/quickview',
        component: () => import("../views/view/quickview.vue"),//路由懒加载
    },
]
const routes: Array<RouteRecordRaw> = [
    //一级路由重定向
    {
        path: '/:catchAll(.*)', redirect: '/login'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import("../pages/index/index.vue"),//路由懒加载

    },
    {
        path: '/login',
        component: () => import("../pages/login/login.vue"),//路由懒加载

    },
    {
        path: '/monitoring',
        component: () => import("../pages/index/monitoring.vue"),//路由懒加载
    }
    ,
    {
        path: '/explmg',
        component: () => import("../pages/index/explmg.vue"),//路由懒加载
    },
    {
        path: '/name',
        component: () => import("../pages/index/name.vue"),
    },
    {
        path: '/information',
        component: () => import("../pages/index/information.vue"),
    },
    {
        path: '/localName',
        component: () => import("../pages/index/localName.vue"),
    },
    {
        path: '/weather',
        component: () => import("../pages/index/weather.vue"),
    },
    {
        path: '/scale',
        component: () => import("../pages/index/scale.vue"),
    },
    // 后台所有界面
    {
        path: '/user',
        component: () => import("../pages/user/user.vue"),//路由懒加载
        children: [
            ...IndexRouter
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),//设置路由模式
    // history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router