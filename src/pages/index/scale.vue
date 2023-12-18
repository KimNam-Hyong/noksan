<!-- <template>
    <div>
        sacle
    </div>
</template> -->

<template>
    <div class="box1">

        <div class="nav1">
            <div class="left">

                <div class="box">
                    <div class="header">
                        <div style="line-height: 40px;">Live Monitoring Video</div>
                        <div>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                        </div>

                    </div>
                </div>
                <el-table :data="tableData" :border="parentBorder" row-key="id" :expand-row-keys="['1', '2', '3']"
                    style=" width: 5rem; ">
                    <el-table-column type="expand">
                        <template #default="props">
                            <div m="1">
                                <p m="t-0 b-2" class="nav">
                                    <video style="width: 100%; height: 100%;"
                                        src="../../assets//video/2e8283fa6b5becffd2dd9c2f95bfb487.mp4" controls></video>
                                </p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="" prop="date">
                    </el-table-column>
                </el-table>


            </div>
            <div class="right">
                <div class="one">
                    <div class="header">
                        <div style="line-height: 40px;">Live Monitoring Video</div>
                        <div>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                        </div>
                    </div>
                    <div class="footer">
                        <div ref="chartContainer" id="chartContainer"></div>
                    </div>
                </div>
                <div class="two">
                    <div class="header">
                        <div style="line-height: 40px;">Event processing information</div>
                        <div>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                        </div>
                    </div>
                    <div class="footer">
                        <el-table :data="tableData1" style="width: 100%; height: 100%;">
                            <el-table-column prop="date" label="Date" width="100%" height="0.01rem" />
                            <el-table-column prop="name" label="Name" width="100%" height="0.01rem" />
                            <!-- <el-table-column prop="name" label="Name" width="100%" height="0.01rem" /> -->
                            <el-table-column prop="address" label="Address" height="0.01rem" />

                        </el-table>
                    </div>
                </div>
                <div class="three">
                    <div class="header">
                        <div style="line-height: 40px;">Oilfeld personnel Distribution</div>
                        <div>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                            <span class="span"></span>
                        </div>
                    </div>
                    <div class="footer">
                        <div ref="chartContainer1" id="chartContainer1"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'

const parentBorder = ref(false)
// const childBorder = ref(false)



// 基于准备好的dom，初始化echarts实例

const chartContainer = ref(null)
const chartContainer1 = ref(null)

const tableData = [
    {
        date: 'ECP1 Main Gate',
        id: 1,

    },
    {
        date: 'EOC Main Gate',
        id: 2,

    },
    {
        date: 'Warehiuse Main Gate',
        id: 3,

    },
    {
        date: 'FCC Main Entrance & Exit',
        id: 4,

    },
    {
        date: 'Yabani Bridge Check Point',
        id: 5,

    },
]
onMounted(() => {
    getEcharts1()
    gteright()
})
const getEcharts1 = () => {
    const chart = echarts.init(chartContainer.value)

    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2018', '2019', '2022', '2021', '2022'],
            axisLabel: {

                textStyle: {
                    color: "#fff"
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function (value) {
                    return value / '20'
                },
                textStyle: {
                    color: "#fff"
                }
            }
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [0, 0, 0, 0, 0]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [20, 30, 50, 20, 90]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190]
            }
        ]
    }
    window.addEventListener("resize", function () {
        chart.resize()
    })
    chart.setOption(option)
}
const gteright = () => {
    const chart = echarts.init(chartContainer1.value)

    var option = {
        legend: {
            orient: 'vertical',
            left: 'right',
            top: 'center'
        },
        series: [
            {
                // name: 'Radius Mode',
                type: 'pie',
                radius: [10, 40],
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
                    { value: 40, name: 'BOC:540' },
                    { value: 33, name: 'AntonOil:732' },
                    { value: 28, name: 'KBR;1068' },
                    { value: 22, name: 'Contractor:2142' },
                ]
            },
        ]
    }
    window.addEventListener("resize", function () {
        chart.resize()
    })
    chart.setOption(option)
}


// 右
const tableData1 = [
    {
        date: '1',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '3',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '4',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },


]


</script>
<style scoped lang="less">
#chartContainer {
    height: 100%;
    width: 100%;
}

#chartContainer1 {
    height: 100%;
    width: 100%;
}

.nav1 {
    display: flex;
    justify-content: space-between;

    .left {
        /* width: 200px;
        height: 200px;
        background-color: pink; */
        margin: 0.5rem 0 0 0.3rem;
        margin-bottom: 20px;


        .header {
            // width: 400px;
            display: flex;
            justify-content: space-between;
            height: 40px;
            background-color: #12c5d0;
            background: linear-gradient(to right, #12c5d0, transparent);
            font-size: 0.2rem;

            line-height: 40px;
            padding-left: 0.4rem;
            border-radius: 50px 10px 0 0;
            border-top: 2px solid #12c5d0;
            border-right: 2px solid #12c5d0;

            .span {
                display: inline-block;
                width: 0.06rem;
                height: 0.3rem;
                background-color: #12c5d0;
                transform: skew(20deg, 0);
                margin: 0.1rem 0.06rem;
            }
        }

    }

    .right {
        width: 4rem;
        // height: 200px;
        // background-color: pink;
        margin: 0.5rem 0 0 1rem;
        margin-bottom: 20px;
        margin-right: 1.5rem;



        // opacity: 0.5;
        .footer {
            border: 2px solid #12c5d0;
            // background-color: blueviolet;
            border-top: none;
            height: 85%;
            padding-right: 0.1rem;

            .el-table__row {
                background-color: pink !important;
            }

            /deep/ .el-table__header-wrapper {
                background-color: #70cccf !important;
            }

            /deep/ .el-table__body .el-table__row:hover {
                background-color: pink !important;
                font-size: 15px !important;
            }

            /deep/ .el-table tr:nth-child(1) {
                background: #ada3a9 !important;
                color: #000;
                opacity: 0.5;
                // border-radius: 5px;
                height: 40px;
            }

            /deep/ .el-table tr:nth-child(2) {
                background: #70cccf !important;
                color: #000;
                opacity: 0.5;
                // border-radius: 5px;
                height: 40px;
            }

            /deep/ .el-table tr:nth-child(3) {
                background: #ada3a9 !important;
                color: #000;
                opacity: 0.5;
                // border-radius: 5px;
                height: 40px;
            }

            /deep/ .el-table tr:nth-child(4) {
                background: #70cccf !important;
                color: #000;
                opacity: 0.5;
                // border-radius: 5px;
                height: 40px;
            }
        }

        /*  */
        .header {
            display: flex;
            justify-content: space-between;
            // width: 100%;
            height: 0.5rem;
            background-color: #12c5d0;
            background: linear-gradient(to right, #12c5d0, transparent);
            font-size: 0.2rem;
            line-height: 40px;
            padding-left: 0.4rem;
            border-radius: 50px 10px 0 0;
            border-top: 2px solid #12c5d0;
            border-right: 2px solid #12c5d0;

            .span {
                display: inline-block;
                width: 0.06rem;
                height: 0.3rem;
                background-color: #12c5d0;
                transform: skew(20deg, 0);
                margin: 0.1rem 0.06rem;
            }
        }

        .one {
            width: 5rem;
            height: 3.5rem;


        }

        .two {
            width: 5rem;
            height: 3.5rem;
            margin: 0.2rem 0;

        }

        .three {
            width: 5rem;
            height: 3.5rem;

        }
    }
}

.nav {
    width: 5rem;
    height: 2.6rem;
    background-color: #afadab;
    padding-top: 0;
}

.box {

    z-index: 9999;
    width: 5rem;
    height: 40px;
    // border-top: 2px solid #12c5d0;
    // box-shadow: 5px 5px 5px #12c5d0;
    // background-color: pink;
    // text-align: center;
    // line-height: 40px;
}

.left {
    /deep/ .el-table tr {
        background: #12c5d0 !important;
        // border-radius: 5px;
        height: 40px;
    }

    .el-table__row {
        background-color: pink !important;
    }

    /deep/ .el-table__header-wrapper {
        height: 2px;
    }

    /deep/ .el-table__body .el-table__row:hover {
        background-color: pink !important;
        font-size: 15px !important;
    }


}


/deep/ .el-table {
    --el-table-row-hover-bg-color: none;
}

/deep/ .el-table .el-table__cell {
    padding: 0;
}


.box1 {
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/image/road/WPS.jpeg);
    background-size: cover;
    background-position: center;
    /* background-color: pink; */
}
</style>