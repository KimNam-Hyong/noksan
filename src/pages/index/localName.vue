<template>
    <div class="nav">
        <div class="header">
            <div class="left">
                <ul>
                    <li>
                        <div>10:12:12</div>
                        <div style="margin-top: 0.1rem;">星期三，12月13日，2023</div>
                    </li>
                    <li>
                        <img style="width: 100%; height: 100%;" src="../../assets/localname-image/终端标题.png" alt="">
                    </li>
                    <li>
                        <div class="practlic">
                            <img style="width: 100%; height: 100%;"
                                src="../../assets/localname-image/8237ad3a63f886c9b6fd8e165d3266b.jpg" alt="">

                        </div>
                    </li>
                </ul>
            </div>
            <div class="middel"></div>
            <div class="right"></div>
        </div>
        <div class="box">
            <div class="left" style="margin-top: 0.5rem;">
                <div class="one" style="margin-top: 0.5rem;">
                    <!-- <div class="ruther"></div> -->
                    <div class="personal">
                        <img style="width: 100%; height: 100%;"
                            src="../../assets/localname-image/3e61dc1dda87701ce1cf03059c98e95.png" alt="">
                        <!-- <span style="margin-right: 0.2rem;">人员信息</span>
                        <span style="font-size: 0.2rem;">[2023 12/12]</span> -->
                    </div>
                    <div style="padding: 0 0.1rem;" class="two">
                        <ul>
                            <li>国籍</li>
                            <li>证件号码</li>
                            <li>姓名</li>
                            <li>性别</li>
                            <li>手机号码</li>
                        </ul>
                        <ul v-for="item in tableData" :key="item">
                            <li>{{ item.date }}</li>
                            <li class="itemname">{{ item.name }}</li>
                            <li>{{ item.address }}</li>
                            <li>{{ item.gender }}</li>
                            <li>{{ item.middeo }}</li>
                        </ul>
                    </div>
                </div>
                <div class="one">
                    <!-- <div class="ruther"></div> -->
                    <div class="personal">
                        <img style="width: 100%; height: 100%;"
                            src="../../assets/localname-image/3e61dc1dda87701ce1cf03059c98e95.png" alt="">
                        <!-- <span style="margin-right: 0.2rem;">人员信息</span>
                        <span style="font-size: 0.2rem;">[2023 12/12]</span> -->
                    </div>
                    <div style="padding: 0 0.1rem;" class="two">
                        <ul>
                            <li>国籍</li>
                            <li>证件号码</li>
                            <li>姓名</li>
                            <li>性别</li>
                            <li>手机号码</li>
                        </ul>
                        <ul v-for="item in tableData" :key="item">
                            <li>{{ item.date }}</li>
                            <li class="itemname">{{ item.name }}</li>
                            <li>{{ item.address }}</li>
                            <li>{{ item.gender }}</li>
                            <li>{{ item.middeo }}</li>
                        </ul>
                    </div>
                </div>
                <div class="one" style="margin-bottom: 0;">
                    <!-- <div class="ruther"></div> -->
                    <div class="personal">
                        <img style="width: 100%; height: 100%;"
                            src="../../assets/localname-image/3e61dc1dda87701ce1cf03059c98e95.png" alt="">
                        <!-- <span style="margin-right: 0.2rem;">人员信息</span>
                        <span style="font-size: 0.2rem;">[2023 12/12]</span> -->
                    </div>
                    <div style="padding: 0 0.1rem;" class="two">
                        <div ref="chartContainer" id="chartContainer"></div>
                    </div>
                </div>
            </div>
            <div class="middeo" style="margin-top: 0.5rem;">
                <vCesium></vCesium>
            </div>
            <div class="right" style="margin-top: 0.5rem;">
                <div class="one" style="margin-top: 0.5rem;">
                  <!-- <div class="ruther"></div> -->
                  <div class="personal">
                        <img style="width: 100%; height: 100%;"
                            src="../../assets/localname-image/3e61dc1dda87701ce1cf03059c98e95.png" alt="">
                        <!-- <span style="margin-right: 0.2rem;">人员信息</span>
                        <span style="font-size: 0.2rem;">[2023 12/12]</span> -->
                    </div>
                    <div style="padding: 0 0.1rem;" class="two">
                        <ul>
                            <li>国籍</li>
                            <li>证件号码</li>
                            <li>姓名</li>
                            <li>性别</li>
                            <li>手机号码</li>
                        </ul>
                        <ul v-for="item in tableData" :key="item">
                            <li>{{ item.date }}</li>
                            <li class="itemname">{{ item.name }}</li>
                            <li>{{ item.address }}</li>
                            <li>{{ item.gender }}</li>
                            <li>{{ item.middeo }}</li>
                        </ul>
                    </div>
                </div>
                <div class="one">
                     <!-- <div class="ruther"></div> -->
                     <div class="personal">
                        <img style="width: 100%; height: 100%;"
                            src="../../assets/localname-image/3e61dc1dda87701ce1cf03059c98e95.png" alt="">
                        <!-- <span style="margin-right: 0.2rem;">人员信息</span>
                        <span style="font-size: 0.2rem;">[2023 12/12]</span> -->
                    </div>
                    <div style="padding: 0 0.1rem;" class="two">
                        <ul>
                            <li>国籍</li>
                            <li>证件号码</li>
                            <li>姓名</li>
                            <li>性别</li>
                            <li>手机号码</li>
                        </ul>
                        <ul v-for="item in tableData" :key="item">
                            <li>{{ item.date }}</li>
                            <li class="itemname">{{ item.name }}</li>
                            <li>{{ item.address }}</li>
                            <li>{{ item.gender }}</li>
                            <li>{{ item.middeo }}</li>
                        </ul>
                    </div>
                </div>
                <div class="one" >
                    <!-- <div class="ruther"></div> -->
                    <div class="personal">
                        <img style="width: 100%; height: 100%;"
                            src="../../assets/localname-image/3e61dc1dda87701ce1cf03059c98e95.png" alt="">
                        <!-- <span style="margin-right: 0.2rem;">人员信息</span>
                        <span style="font-size: 0.2rem;">[2023 12/12]</span> -->
                    </div>
                    <div style="padding: 0 0.1rem;" class="two">
                       <img style="width: 100%; height: 100%;" src="../../assets/localname-image/监控摄像头.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref, onMounted } from "vue"
// 基于准备好的dom，初始化echarts实例

const chartContainer = ref(null)
// 左边
const tableData = [
    {
        date: '中国',
        name: '130683200116112339',
        address: '陈尚军',
        gender: '男',
        middeo: '13909091122'
    },
    {
        date: '中国',
        name: '130683200116112339',
        address: '陈尚军',
        gender: '男',
        middeo: '13909091122'
    },

    {
        date: '中国',
        name: '130683200116112339',
        address: '陈尚军',
        gender: '男',
        middeo: '13909091122'
    },

    {
        date: '中国',
        name: '130683200116112339',
        address: '陈尚军',
        gender: '男',
        middeo: '13909091122'
    },




]
onMounted(() => {
    getlist()

})
// 图表
const getlist = () => {
    const chart = echarts.init(chartContainer.value)

    console.log(chart)
    var option = {
        
        // legend: {
        //     top: '5%',
        //     left: 'center',
        //     // top: "center",
        // },
      
        series: [
            {
                name: 'Radius Mode',
                type: 'pie',
                radius: [20, 50],
                center: ['25%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 33, name: 'rose 2' },
                    { value: 28, name: 'rose 3' },

                ]
            },

        ]
    };
    window.addEventListener("resize", function () {
        chart.resize()
    })
    chart.setOption(option)

}
</script>
<style scoped lang="less">
.box {
    width: 100vw;
    height: calc(100% - 1.4rem);

    display: flex;
    justify-content: space-between;

    .ruther {
        width: 0.15rem;
        height: 0.15rem;
        border-radius: 50%;
        border: 2px solid #11306a;
        position: absolute;
        top: -0.1rem;
        left: -0.1rem;
    }

    .itemname {
        width: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
    }

    .two ul {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.1rem;
        padding: 0.1rem;


    }

    .two ul:nth-child(even) {
        background-color: #151c32;
        opacity: 0.8;
        color: #fff;
    }

    .one {
        position: relative;
        width: 100%;
        height: 30%;
        // background-color: pink;
        margin-bottom: 0.1rem;

        .personal {
            width: 100%;
            height: 0.5rem;
            // font-weight: 700;
            // font-size: 0.3rem;
            line-height: 0.5rem;
            // padding-left: 0.2rem;
            // border: 1px solid #11306a;
            // border-radius: 0.3rem 0 0 0;
            margin-bottom: 0.2rem;

        }

    }

    .left {
        width: 5rem;
        height: 100%;
        // background-color: aqua;
        margin-left: 0.3rem;

        #chartContainer {
            height: 2rem;
        }
    }

    .right {
        width: 5rem;
        height: 100%;
        // background-color: aqua;
        margin-right: 0.3rem;
    }

    .middeo {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: -999;
        width: 100vw;
        height: 100%;
        // background-color: #11306a;
    }

}

.header {
    width: 100vw;
    height: 0.8rem;
    // background: linear-gradient(to left, rgba(43, 117, 255, 0), rgba(43, 117, 255, 0.15));
    background-color: #000;

    z-index: 999;
    .left {
        ul {
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0.3rem;

            li {
                width: 33%;
                height: 0.8rem;
            }

            .practlic {
                width: 2rem;
                // height: 0.6rem;
                background-color: pink;
                border: 1px solid #11306a;
                margin-left: 5.5rem;


            }
        }
    }
}

.nav {
    width: 100vw;
    height: 100vh;
    // background-color: #000;
    // background-image: url(../../assets/localname-image/bg1.png);
    background-size: cover;
    color: #fff;
}
</style>