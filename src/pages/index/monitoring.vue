<template>
  <div class="Index">
      <!-- <vHead></vHead> -->
      <!-- 二级路由出口 -->
      <div class="box">
          <div id="main" :style="{width:'100%',height:'100%'}"></div>
      </div>
         <div class="box">
          <div id="main1" :style="{width:'100%',height:'100%'}"></div>
         </div>
         <div class="box">
          <div id="main2" :style="{width:'100%',height:'100%'}"></div>
         </div>   
         <div class="box">
          <div id="main3" :style="{width:'100%',height:'100%'}"></div>
         </div>  
  </div>
</template>
<script src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"></script>
<script setup>
import * as echarts from 'echarts/core';
import {
TitleComponent,
ToolboxComponent,
TooltipComponent,
GridComponent,
LegendComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import {onMounted,onUnmounted} from 'vue'
echarts.use([
TitleComponent,
ToolboxComponent,
TooltipComponent,
GridComponent,
LegendComponent,
LineChart,
CanvasRenderer,
UniversalTransition,
]);
onMounted(async ()=>{
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
tooltip: {
  trigger: 'axis',
  axisPointer: {
    type: 'cross',
    label: {
      backgroundColor: '#6a7985'
    }
  }
},
toolbox: {
  feature: {
    saveAsImage: {}
  }
},
grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
xAxis: [
  {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
],
yAxis: [
  {
    type: 'value'
  }
],
series: [
  {
    name: 'Line 1',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
      width: 0
    },
    showSymbol: false,
    areaStyle: {
      opacity: 0.8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'rgb(128, 255, 165)'
        },
        {
          offset: 1,
          color: 'rgb(1, 191, 236)'
        }
      ])
    },
    emphasis: {
      focus: 'series'
    },
    data: [140, 232, 101, 264, 90, 340, 250]
  },
  {
    name: 'Line 2',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
      width: 0
    },
    showSymbol: false,
    areaStyle: {
      opacity: 0.8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'rgb(0, 221, 255)'
        },
        {
          offset: 1,
          color: 'rgb(77, 119, 255)'
        }
      ])
    },
    emphasis: {
      focus: 'series'
    },
    data: [120, 282, 111, 234, 220, 340, 310]
  },
  {
    name: 'Line 3',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
      width: 0
    },
    showSymbol: false,
    areaStyle: {
      opacity: 0.8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'rgb(55, 162, 255)'
        },
        {
          offset: 1,
          color: 'rgb(116, 21, 219)'
        }
      ])
    },
    emphasis: {
      focus: 'series'
    },
    data: [320, 132, 201, 334, 190, 130, 220]
  },
  {
    name: 'Line 4',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
      width: 0
    },
    showSymbol: false,
    areaStyle: {
      opacity: 0.8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'rgb(255, 0, 135)'
        },
        {
          offset: 1,
          color: 'rgb(135, 0, 157)'
        }
      ])
    },
    emphasis: {
      focus: 'series'
    },
    data: [220, 402, 231, 134, 190, 230, 120]
  },
  {
    name: 'Line 5',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
      width: 0
    },
    showSymbol: false,
    label: {
      show: true,
      position: 'top'
    },
    areaStyle: {
      opacity: 0.8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'rgb(255, 191, 0)'
        },
        {
          offset: 1,
          color: 'rgb(224, 62, 76)'
        }
      ])
    },
    emphasis: {
      focus: 'series'
    },
    data: [220, 302, 181, 234, 210, 290, 150]
  }
]
};

var chartDom1 = document.getElementById('main1');
var myChart1 = echarts.init(chartDom1);

var option1;

option1 = {
tooltip: {
  trigger: 'item'
},
legend: {
  top: '5%',
  left: 'center'
},
series: [
  {
    name: 'Access From',
    type: 'pie',
    radius: ['40%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: {
      borderRadius: 10,
      borderColor: '#fff',
      borderWidth: 2
    },
    label: {
      show: false,
      position: 'center'
    },
    emphasis: {
      label: {
        show: true,
        fontSize: 40,
        fontWeight: 'bold'
      }
    },
    labelLine: {
      show: false
    },
    data: [
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ]
  }
]
};

var chartDom2 = document.getElementById('main2');
var myChart2 = echarts.init(chartDom2);
var option2;

// prettier-ignore
let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
dataShadow.push(yMax);
}
option2 = {
xAxis: {
  data: dataAxis,
  axisLabel: {
    inside: true,
    color: '#fff'
  },
  axisTick: {
    show: false
  },
  axisLine: {
    show: false
  },
  z: 10
},
yAxis: {
  axisLine: {
    show: false
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    color: '#999'
  }
},
dataZoom: [
  {
    type: 'inside'
  }
],
series: [
  {
    type: 'bar',
    showBackground: true,
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#83bff6' },
        { offset: 0.5, color: '#188df0' },
        { offset: 1, color: '#188df0' }
      ])
    },
    emphasis: {
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#2378f7' },
          { offset: 0.7, color: '#2378f7' },
          { offset: 1, color: '#83bff6' }
        ])
      }
    },
    data: data
  }
]
};

const zoomSize = 6;
myChart.on('click', function (params) {
console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
myChart.dispatchAction({
  type: 'dataZoom',
  startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
  endValue:
    dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
});
});


var chartDom3 = document.getElementById('main3');
var myChart3 = echarts.init(chartDom3);
var option3;

option3 = {
dataset: {
  source: [
    ['score', 'amount', 'product'],
    [57.1, 754, 'Milk Tea'],
    [74.4, 432, 'Cheese Cocoa'],
    [50.1, 155, 'Cheese Brownie'],
    [89.7, 245, 'Matcha Cocoa'],
    [68.1, 746, 'Tea'],
    [10.6, 852, 'Lemon Juice'],
    [32.7, 212, 'Walnut Brownie']
  ]
},
grid: { containLabel: true },
xAxis: { name: 'amount' },
yAxis: { type: 'category' },
visualMap: {
  orient: 'horizontal',
  left: 'center',
  min: 10,
  max: 100,
  // Map the score column to color
  dimension: 0,
  inRange: {
    color: ['#65B581', '#FFCE34', '#FD665F']
  }
},
series: [
  {
    type: 'bar',
    encode: {
      // Map the "amount" column to X axis.
      x: 'amount',
      // Map the "product" column to Y axis
      y: 'product'
    }
  }
]
};

option && myChart.setOption(option);

option1 && myChart1.setOption(option1);


option2 && myChart2.setOption(option2);
option3 && myChart3.setOption(option3);

})
</script>
<style scoped>
.box{
  width: 300px;
  height: 200px;
}

</style>