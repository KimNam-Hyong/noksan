<template>
    <div class="user">
        <!-- 用户管理系统 -->

        <div class="common-layout">
            <el-container>
                <!-- <el-header>
                    <div class="left">
                        HALFAYA OIL FIELD
                    </div>
            
                    <div class="right">
                        <el-dropdown trigger="click" @command="change" @visible-change="jiantou">
                            <span class="el-dropdown-link">
                                <el-icon style="vertical-align: -2px;">
                                    <Avatar />
                                </el-icon>
                                欢迎 {{ username }}
                                <el-icon class="el-icon--right" v-if="!Tag">
                                    <arrow-down />
                                </el-icon>
                                <el-icon class="el-icon--right" v-else>
                                    <arrow-up />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item command="退出登录">退出登录</el-dropdown-item>
                                    <el-dropdown-item command="测试">测试</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                    </div>


                </el-header> -->
                <el-container>
                    <!-- 侧边栏 -->
                    <el-aside width="200px">
                        <el-menu :default-active="defaultactive" router class="el-menu-vertical-demo">
                            <el-menu-item index="/index/setup/home">
                                <el-icon>
                                    <HomeFilled />
                                </el-icon>
                                <!-- <span>重点地区可视化智能指挥平台</span> -->
                                <span>首页</span>
                            </el-menu-item>
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <UserFilled />
                                    </el-icon>
                                    <span>数据录入</span>
                                </template>
                                <el-menu-item index="/username">用户管理</el-menu-item>
                                <el-menu-item index="/logmanagement">日志管理</el-menu-item>
                                <el-menu-item index="/addpoint">点位管理</el-menu-item>
                                <el-menu-item index="/information">信息管理</el-menu-item>
                            </el-sub-menu>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon>
                                        <Ticket />
                                    </el-icon>
                                    <span>硬件接入</span>
                                </template>
                                <el-menu-item index="/playcontror">视频监控</el-menu-item>

                            </el-sub-menu>
                        </el-menu>

                    </el-aside>
                    <!-- 右侧主体 -->
                    <el-main>
                        <RouterView></RouterView>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>ss
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
let route = useRoute()
let router = useRouter()
let defaultactive = route.path
let Tag = ref(false)
// let username = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).user : '';
let username = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user') || '').user : ''
const change = (command: string | number | object) => {
    if (command == '退出登录') {
        ElMessageBox.confirm(
            '确定退出登录?',
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }
        )
            .then(() => {
                // alert(command)
                sessionStorage.removeItem('user')
                router.push({
                    path: '/login'
                })

            })
            .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '已取消',
                })
            })

    } else if (command == '测试') {
        alert(command)
    }
}
const jiantou = (e: any) => {
    Tag.value = e

}
</script>
<style scoped>
.user {
    width: 100vw;
    height: 100vh;
    /* background-color: red; */
}

.user .el-aside {
    min-width: 2.5rem;
    /* height: 800px; */
}

.el-header {
    /* width: 1500px; */
    background-color: rgb(8, 8, 8);
    display: flex;
    justify-content: space-between;
}

.left {
    color: #fff;
    font-size: .375rem;
    line-height: .75rem;
    /*PT Serif: 一种沉稳儒雅、大气的字体*/
    /* font-family: 'PT Serif', serif; */
    /*Montserrat: 清晰明快、简单大方的字体*/
    /* font-family: 'Montserrat', sans-serif; */
    /*Roboto: 一种流畅简洁、具有现代感的字体*/
    /* font-family: 'Roboto', sans-serif; */
    /*Merriweather: 一种优美流畅、充满文艺气息的字体*/
    /* font-family: 'Merriweather', serif; */
    /*Open Sans: 一种结构清晰、通透明亮的字体*/
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
}

.right {
    margin-top: 20px;
}

.el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    color: #fff;
    /* display: flex; */
    /* align-items: center; */

}
</style>