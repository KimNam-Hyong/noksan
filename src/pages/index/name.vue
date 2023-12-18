<template>
    <div>
        <!-- 导航栏 -->
        <div class="header">
            <div class="name">
                <el-icon>
                    <Help />
                </el-icon>

                <router-link to="/name">User Name</router-link>
            </div>
            <div>
                <el-icon>
                    <Share />
                </el-icon>
                <router-link to="/name">GIS Information</router-link>
            </div>
            <div>
                <el-icon>
                    <MapLocation />
                </el-icon>
                <router-link to="/name">Local Name</router-link>
            </div>
            <div>
                <el-icon>
                    <SemiSelect />
                </el-icon>
                <router-link to="/name">Scale</router-link>
            </div>
            <div>
                <el-icon>
                    <MostlyCloudy />
                </el-icon>
                <router-link to="/name">Weather Information</router-link>
            </div>
            <div class="explmg">
                <el-icon>
                    <Calendar />
                </el-icon>
                <router-link to="/explmg">Data/Time</router-link>
            </div>


        </div>

        <div class="box">
            <div class="left">
                <div class="one">
                    <div class="top">
                        <div style="margin-top: 0.1rem; margin-left: 0.1rem;">Notificcation</div>
                        <div
                            style="width: 0.3rem; height: 0.3rem;border: 1px solid #b5b7b9; margin-right: 0.1rem; margin-top: 0.1rem;">
                            <el-icon>
                                <TopRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="bottom">
                        <div style="margin: 0.1rem; height: 100%; margin-bottom: 0.5rem;">
                            <el-scrollbar height="100%">
                                <p v-for="item in list" :key="item" class="scrollbar-demo-item">{{ item.name }}</p>
                            </el-scrollbar>
                        </div>
                    </div>
                </div>
                <div class="one">
                    <div class="top">
                        <div style="margin-top: 0.1rem; margin-left: 0.1rem;">Event Log</div>
                        <div
                            style="width: 0.3rem; height: 0.3rem;border: 1px solid #b5b7b9; margin-right: 0.1rem; margin-top: 0.1rem;">
                            <el-icon>
                                <TopRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="bottom">
                        <div style="margin: 0.1rem; height: 100%; margin-bottom: 0.5rem;">
                            <el-scrollbar height="100%">
                                <p v-for="item in list" :key="item" class="scrollbar-demo-item">{{ item.name }}</p>
                            </el-scrollbar>
                        </div>
                    </div>
                </div>
                <div class="one">
                    <div class="top">
                        <div style="margin-top: 0.1rem; margin-left: 0.1rem;">Event Log</div>
                        <div
                            style="width: 0.3rem; height: 0.3rem;border: 1px solid #b5b7b9; margin-right: 0.1rem; margin-top: 0.1rem;">
                            <el-icon>
                                <TopRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="bottom">
                        <div style="margin: 0.1rem; height: 100%; margin-bottom: 0.5rem;">
                            <div ref="chartContainer1" id="chartContainer1"></div>
                        </div>
                    </div>
                </div>
                <div class="one">
                    <div class="top">
                        <div style="margin-top: 0.1rem; margin-left: 0.1rem;">Event Log</div>
                        <div
                            style="width: 0.3rem; height: 0.3rem;border: 1px solid #b5b7b9; margin-right: 0.1rem; margin-top: 0.1rem;">
                            <el-icon>
                                <TopRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="bottom">
                        <div style="margin: 0.1rem; height: 100%; margin-bottom: 0.5rem;">
                            <div ref="chartContainer" id="chartContainer1"></div>
                        </div>
                    </div>
                </div>
                <div class="one">
                    <div class="top">
                        <div style="margin-top: 0.1rem; margin-left: 0.1rem;">Event Log</div>
                        <div
                            style="width: 0.3rem; height: 0.3rem;border: 1px solid #b5b7b9; margin-right: 0.1rem; margin-top: 0.1rem;">
                            <el-icon>
                                <TopRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="bottom">
                        <div style="margin: 0.5rem; height: 0.5rem; margin-bottom: 0.5rem;" class="footer">

                        </div>
                    </div>
                </div>
            </div>
            <div class="modeis">
                <!-- 地图 -->
                <!-- <div style="width: 100%; height: 98.4%;" v-if="cesium" >
                    <vCesium></vCesium>
                </div> -->


                <!-- 底部 -->
                <div v-if="footer" class="music">
                    <div style="margin-top: 0.5rem; margin-left: 0.5rem;" @click="videos">
                        <el-icon>
                            <VideoCameraFilled />
                        </el-icon>
                        <span style="margin-left: 4rem;">Real Time Message Emergency Massage</span>
                    </div>
                </div>
                <!-- 点击时间 -->
                <div v-show="time" class="middeldev">
                    <div class="box1">
                        <div class="number">1</div>
                        <div @click="comfrom"><el-icon>
                                <CircleClose />
                            </el-icon></div>
                    </div>
                    <div class="system">System Status Report</div>
                    <div class="digit">
                        <div class="number">1</div>
                        <div class="number">2</div>
                        <div class="number">3</div>
                    </div>
                    <div class="camera">
                        <div class="location">
                            <div style="margin: 0.3rem 0 0 0.3rem;">
                                <el-icon>
                                    <Orange />
                                </el-icon>
                                <span class="size">Security Camera</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.2rem; padding: 0.3rem;">
                                <div>ID</div>
                                <div>Location</div>
                                <div>Activate</div>
                            </div>
                            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                            </ul>
                        </div>
                        <div class="location">
                            <div style="margin: 0.3rem 0 0 0.3rem;">
                                <el-icon>
                                    <Orange />
                                </el-icon>
                                <span class="size">Security Camera</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.2rem; padding: 0.3rem;">
                                <div>ID</div>
                                <div>Location</div>
                                <div>Activate</div>
                            </div>
                            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                            </ul>
                        </div>
                        <div class="location">
                            <div style="margin: 0.3rem 0 0 0.3rem;">
                                <el-icon>
                                    <Orange />
                                </el-icon>
                                <span class="size">Security Camera</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.2rem; padding: 0.3rem;">
                                <div>ID</div>
                                <div>Location</div>
                                <div>Activate</div>
                            </div>
                            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                                <li class="infinite-list-item">
                                    <span>SC-001</span>
                                    <span style="margin: 0 0.3rem;">Area A–Part A</span>
                                    <span>working</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <!-- 点击Event Camera View -->
                <div v-show="gilet" class="road">
                    <div style="position: relative;">
                        <div class="type">
                            <div>
                                <el-icon>
                                    <WarningFilled />
                                </el-icon>
                                <span>Event Type</span>
                            </div>
                            <div>
                                <span>
                                    <el-icon>
                                        <LocationInformation />
                                    </el-icon>
                                    <span>Local Name</span>
                                </span>
                                <span style="margin: 0 0.3rem;">
                                    <el-icon>
                                        <Share />
                                    </el-icon>
                                    <span>GIS Information</span>
                                </span>
                                <span>
                                    <el-icon>
                                        <Memo />
                                    </el-icon>
                                    <span>Date/Time</span>
                                </span>
                            </div>
                        </div>
                        <div style="" class="poesr" @click="comfrom1">
                            <el-icon>
                                <CircleClose />
                            </el-icon>
                        </div>
                    </div>

                    <div class="nav" style="display: flex; justify-content: space-between;">
                        <div class="navimage">
                            <img class="image" src="../../assets/image/road/WPS图片(1).jpeg" alt="">
                        </div>
                        <div class="btnimage">
                            <div class="top">
                                <img class="image" src="../../assets/image/road/WPS图片(2).jpeg" alt="">
                            </div>
                            <div class="bottom">
                                <div class="bottomimage">
                                    <img class="image" src="../../assets/image/road/WPS图片(3).jpeg" alt="">
                                </div>
                                <div class="bottomimage" style="margin-left: 0.2rem;">
                                    <img class="image" src="../../assets/image/road/WPS图片(1).jpeg" alt="">
                                </div>
                                <div class="bottomimage" style="margin-top: 0.1rem;">
                                    <img class="image" src="../../assets/image/road/WPS图片(1).jpeg" alt="">
                                </div>
                                <div class="bottomimage" style="margin-left: 0.2rem; margin-top: 0.1rem">
                                    <img class="image" src="../../assets/image/road/WPS图片(1).jpeg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="summary">
                        <div class="sun">
                            <div class="events">Event Summary</div>
                            <div class="events1"> Here is text view about this Event </div>
                            <div class="events1"> Type of the event </div>
                            <div class="events1"> Description of the event</div>

                        </div>
                        <div class="sun">
                            <div class="events">Event Summary</div>
                            <div class="events1"> Here is text view about this Event </div>
                            <div class="events1"> Type of the event </div>
                            <div class="events1"> Description of the event</div>

                        </div>
                    </div>
                </div>

                <!-- 点击播放按钮 -->
                <div v-show="video" class="video">
                    <div style="display: flex; justify-content: space-between;">
                        <div></div>
                        <div>
                            <el-icon>
                                <CircleClose />
                            </el-icon>
                        </div>
                    </div>
                    <div class="header1">
                        <el-icon>
                            <VideoCameraFilled />
                        </el-icon>
                        <span>Request CBS</span>
                    </div>
                    <div class="autormplate">
                        <ul class="from">
                            <li>From</li>
                            <li>Autormplate</li>
                        </ul>
                    </div>
                    <div class="autormplate">
                        <ul class="from">
                            <li>From</li>
                            <li>Autormplate</li>
                        </ul>
                    </div>
                    <div class="autormplate">
                        <ul class="from">
                            <li>From</li>
                            <li>Autormplate</li>
                        </ul>
                    </div>
                    <div class="autormplate">
                        <ul class="from">
                            <li>From</li>
                            <li>Autormplate</li>
                        </ul>
                    </div>
                    <div class="autormplate">
                        <ul class="from">
                            <li>From</li>
                            <li>Autormplate</li>
                        </ul>
                    </div>
                    <div class="send">
                        <div>Send</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="one" @click="activefdfds">
                    <div class="naver">
                        <div style="margin: 0.2rem 0;">
                            <el-icon>
                                <Orange />
                            </el-icon>
                        </div>
                        <div style="margin: 0.2rem 0;">56/56</div>
                        <div style="margin: 0.2rem 0;">100</div>
                        <div style="margin: 0.2rem 0;">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </div>
                    </div>
                    <div class="naver">
                        <div style="margin: 0.2rem 0;">
                            <el-icon>
                                <Orange />
                            </el-icon>
                        </div>
                        <div style="margin: 0.2rem 0;">56/56</div>
                        <div style="margin: 0.2rem 0;">100</div>
                        <div style="margin: 0.2rem 0;">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </div>
                    </div>
                    <div class="naver">
                        <div style="margin: 0.2rem 0;">
                            <el-icon>
                                <Orange />
                            </el-icon>
                        </div>
                        <div style="margin: 0.2rem 0;">56/56</div>
                        <div style="margin: 0.2rem 0;">100</div>
                        <div style="margin: 0.2rem 0;">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </div>
                    </div>
                </div>
                <div class="one" @click="camera">
                    <video style="width: 100%; height: 100%;" src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4"
                        controls></video>
                </div>
                <div class="one">
                    <ul class="two">
                        <li>
                            <video style="width: 100%; height: 100%;"
                                src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                        </li>
                        <li>
                            <video style="width: 100%; height: 100%;"
                                src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                        </li>
                        <li>
                            <video style="width: 100%; height: 100%;"
                                src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                        </li>
                        <li>
                            <video style="width: 100%; height: 100%;"
                                src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                        </li>
                    </ul>
                </div>
                <div class="one">
                    <ul class="two">
                        <ul class="two">
                            <li>
                                <video style="width: 100%; height: 100%;"
                                    src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                            </li>
                            <li>
                                <video style="width: 100%; height: 100%;"
                                    src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                            </li>
                            <li>
                                <video style="width: 100%; height: 100%;"
                                    src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                            </li>
                            <li>
                                <video style="width: 100%; height: 100%;"
                                    src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div class="one"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref, onMounted } from "vue"
// 基于准备好的dom，初始化echarts实例
// 左边
const chartContainer = ref(null)
const chartContainer1 = ref(null)
// 第一个数组
const list = [
    {
        name: 'Some nessage 01'
    },
    {
        name: 'Some nessage 02'
    },
    {
        name: 'Some nessage 03'
    },
    {
        name: 'Some nessage 04'
    },
    {
        name: 'Some nessage 04'
    },
    {
        name: 'Some nessage 04'
    },
    {
        name: 'Some nessage 04'
    },
    {
        name: 'Some nessage 04'
    },
    {
        name: 'Some nessage 04'
    },
    {
        name: 'Some nessage 04'
    },
]

onMounted(() => {
    getlist()
    getechtat()

})
// 图表
const getlist = () => {
    const chart = echarts.init(chartContainer.value)

    var option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                data: [300, 100, 500, 200, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    window.addEventListener("resize", function () {
        chart.resize()
    })
    chart.setOption(option)

}

const getechtat = () => {
    const chart = echarts.init(chartContainer1.value)
    var option = {
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {
            type: 'category',
            show: false

        },
        yAxis: {
            show: false
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    window.addEventListener("resize", function () {
        chart.resize()
    })

    chart.setOption(option)

}
// 地图
const cesium = ref(true)
// 底部
const footer = ref(false)

// 点击时间按钮
const time = ref(false)
const activefdfds = () => {
    // 点击时间按钮
    time.value = true
    // 点击右边第一个视频
    gilet.value = false
    cesium.value = false
    footer.value = true
    video.value=false

}
const comfrom = () => {
    // 点击时间按钮
    time.value = false
    cesium.value = true
    footer.value = false

}


// 点击右边第一个视频
const gilet = ref(false)
const camera = () => {
    gilet.value = true
    time.value = false
    cesium.value = false
    footer.value = true
    video.value=false
}
const comfrom1 = () => {
    gilet.value = false
    cesium.value = true
    footer.value = false

}

// 点击播放按钮
const video = ref(false)
const videos =()=>{
    video.value=true
    time.value=false
    gilet.value=false
}
</script>
<style scoped lang="less">
#chartContainer1 {
    height: 100%;
    width: 100%;
}

.box {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .one {
        width: 100%;
        height: 18%;
        background-color: #e2eaf1;
        margin-bottom: 0.25rem;
        /* padding: 0.2rem; */

    }

    .left {
        width: 5rem;
        height: 12.2rem;
        margin-top: 100px;

        .footer {
            width: 0.7rem !important;
            height: 10rem;
            background-color: #fff !important;
            border: 2px solid #b0b0b1;
            margin: 0 1.3rem !important;
        }

        .scrollbar-demo-item {
            /* display: flex;
            align-items: center;
            justify-content: center; */
            height: 100%;
            margin-bottom: 0.2rem;
            /* text-align: center; */
            border-radius: 4px;



        }

        .bottom {
            width: 100%;
            height: 1.4rem;
            /* background-color: pink; */
        }

        .top {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 0.4rem;

        }
    }

    .right {
        width: 5rem;
        height: 12.15rem;

        margin-top: 100px;

        .two {
            display: flex;
            flex-wrap: wrap;
        }

        .two li {
            width: 48% !important;
            height: 0.91rem !important;
            background-color: #fff !important;
            margin-bottom: 0 !important;
            border: 1px solid #b0b0b1;
            text-align: center;
            line-height: 1rem;
        }

        .naver {
            display: flex;
            justify-content: space-between;


        }


    }

    .modeis {
        /* flex: 1; */
        position: relative;
        width: 100%;
        height: 12.15rem;
        /* background-color: aqua; */
        margin-top: 100px;
        margin: 100px 10px 0;


        /* margin-left: 10px; */
        .music {
            position: absolute;
            left: 0;
            bottom: 0.2rem;
            width: 100%;
            height: 1rem;
            background-color: #e2eaf1;


        }

        .middeldev {
            .infinite-list {
                height: 3rem;
                padding: 0;
                margin: 0;
                list-style: none;
            }

            .infinite-list .infinite-list-item {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 0.5rem;
                /* background: var(--el-color-primary-light-9); */
                margin: 10px;
                /* color: var(--el-color-primary); */
            }

            .infinite-list .infinite-list-item+.list-item {
                margin-top: 10px;
            }

            width: 13rem;
            height: 8rem;
            background-color: #e2eaf1;
            /* margin-top: 2rem; */
            font-size: 0.5rem;
            padding: 0.2rem 0.5rem;
            margin-left: 1.2rem;

            .camera {
                display: flex;
                justify-content: space-between;
                margin-top: 0.2rem;

                .location {
                    width: 4rem;
                    height: 5rem;
                    background-color: #f2f2f2;
                    border: 1px solid #b0b0b1;
                    font-size: 0.2rem;

                    .size {
                        font-size: 0.3rem;
                    }
                }
            }

            .digit {
                display: flex;
                justify-content: space-between;
                margin-top: 0.5rem;
            }

            .system {
                width: 100%;
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;
            }

            .number {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: #edda95;
                font-size: 0.4rem;
                text-align: center;
                line-height: 0.5rem;
            }

            .box1 {
                display: flex;
                justify-content: space-between;


            }
        }

        .road {
            width: 13rem;
            height: 8rem;
            background-color: #e2eaf1;
            // margin-top: 2rem;
            font-size: 0.5rem;
            padding: 0.2rem 0.5rem;
            margin-left: 1.1rem;

            .image {
                width: 100%;
                height: 100%;
            }

            .poesr {
                position: absolute;
                top: 0;
                right: -0.7rem;
            }

            .summary {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 2.3rem;
                background-color: #f2f2f2;
                margin-top: 0.3rem;

                .sun {
                    width: 49%;
                    height: 100%;
                    /* background-color: aqua; */
                    border: 1px solid #b0b0b1;

                    .events1 {
                        width: 100%;
                        /* height: 0.5rem; */
                        font-size: 0.3rem;
                        text-align: center;
                        line-height: 0.4rem;

                    }

                    .events {
                        width: 100%;
                        height: 1rem;
                        text-align: center;
                        line-height: 1rem;
                        font-size: 0.3rem;

                    }
                }
            }

            .type {
                display: flex;
                justify-content: space-between;
                height: 0.8rem;
                width: 12.6rem;
                background-color: #f2f2f2;
                margin-top: 0.1rem;
                font-size: 0.3rem;
                padding: 0.4rem 0.2rem 0;
                margin-right: 0.5rem;
            }

            .nav {
                /* width: 100%; */
                height: 4rem;
                /* background-color: aqua; */

                .navimage {
                    width: 7.5rem;
                    height: 100%;
                    /* background-color: pink; */

                }

                .btnimage {
                    width: 5.3rem;
                    height: 100%;
                    /* background-color: blue; */

                    .top {
                        width: 100%;
                        height: 2rem;
                        /* background-color: bisque; */
                    }

                    .bottom {
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;
                        height: 1.8rem;
                        /* background-color: blueviolet; */
                        margin-top: 0.2rem;

                        .bottomimage {
                            width: 48%;
                            height: 48%;
                            /* background-color: brown; */
                        }
                    }
                }
            }
        }

        .video {
            width: 13rem;
            height: 8rem;
            background-color: #e2eaf1;
            font-size: 0.5rem;
            // padding: 0 0.5rem;
            margin-left: 1.1rem;

            // .btncom {
            //     width: 4rem;
            //     height: 0.5rem;
            //     // margin: 0 5rem;
            //     background-color: #d9d9d9;
            //     color: #fff;
            //     text-align: center;
            //     line-height: 0.5rem;
            //     border-radius: 0.5rem;

            // }

            .send {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.5rem;

                div {
                    width: 4rem;
                    height: 0.5rem;
                    // margin: 0 5rem;
                    background-color: #d9d9d9;
                    color: #fff;
                    text-align: center;
                    line-height: 0.5rem;
                    border-radius: 0.5rem;
                    font-size: 0.3rem;

                }
            }

            .autormplate {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.3rem;
                margin-top: 0.2rem;
            }

            .from {
                display: flex;
                justify-content: space-between;
            }

            .from li:nth-child(1) {
                width: 3rem;
                height: 0.5rem;
                background-color: #f2f2f2;
                line-height: 0.5rem;
                text-align: center;
            }

            .from li:nth-child(2) {
                width: 6rem;
                height: 0.5rem;
                background-color: #f2f2f2;
                margin-left: 0.2rem;
                line-height: 0.5rem;
                text-align: center;
            }

            .header1 {
                text-align: center;
                margin-bottom: 1rem;
            }
        }
    }

}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: #e2eaf1;
    border: 1px solid #eee;
    padding: 0.4rem;
    font-size: 0.4rem;
    display: flex;

    justify-content: space-around;

    .name {
        margin-left: 1rem;

        .explmg {
            margin-right: 2rem;
        }
    }
}

.el-icon {
    margin-right: 0.2rem;
    vertical-align: middle;
    color: #b9bbbd;
}
</style>