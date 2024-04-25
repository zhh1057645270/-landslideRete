<template>
    <div class="layout-left-box">
        <span class="title">不确定性分析模块</span>
        <el-select class="chart-select" placeholder="请选择图表" v-model="chartNumber">
            <el-option v-for="item in chartoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <v-chart :option="option1" class="chart" id="mychart1" v-if="chartNumber == '1'"></v-chart>
        <v-chart :option="option2" class="chart" id="mychart2" v-if="chartNumber == '2'"></v-chart>
        <v-chart :option="option3" class="chart" id="mychart3" v-if="chartNumber == '3'"></v-chart>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import VChart from 'vue-echarts';
import { watchEffect, ref, VueElement, watch, reactive, onUpdated, onMounted } from 'vue';

var area = ref(['分区1', '分区2', '分区3', '分区4', '分区5']);
var area_number = ref([5, 20, 35, 10, 10]);
var chartNumber = ref('1')
var chartoptions = ref([
    {
        value: '1',
        label: 'ROC曲线'
    }, {
        value: '2',
        label: '易发性指数分布统计图'
    }, {
        value: '3',
        label: '易发性分区统计直方图'
    }
])
const option1 = ref({
    title: {
        text: 'ROC曲线',
        left: 130,
        textStyle: {//设置主标题的文字风格
            color: "white",//字体颜色
            fontSize: 18 //文字大小
        },

    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '9%',
        align: 'auto',
        itemHeight: 5,
        textStyle: {
            lineHeight: 18,
            fontSize: 12,
            color: '#fff',
            fontWeight: 'lighter',
        },
    },
    xAxis: {
    type: 'category',
    name: '1-特异性',
    nameLocation: 'middle',
    axisLabel: {
            margin: 4 // 调整横坐标标题与轴线之间的距离
        },
    data: ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0']
  },
  yAxis: {
    type: 'value',
    name: '敏感度',
  },
  series: [
    {
      data: [0.15, 0.23, 0.27, 0.38, 0.49, 0.67, 0.88],
      type: 'line',
      smooth: true
    }
  ]
});
const option2 = ref({
    title: {
        text: '易发性指数分布统计图',
        left: 80,
        textStyle: {//设置主标题的文字风格
            color: "white",//字体颜色
            fontSize: 18 //文字大小
        },

    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '9%',
        align: 'auto',
        itemHeight: 5,
        textStyle: {
            lineHeight: 18,
            fontSize: 12,
            color: '#fff',
            fontWeight: 'lighter',
        },
    },
    xAxis: {
        type: 'category',
        data: area.value,
        axisLabel: {
            textStyle: {
                fontSize: 9,
                color: '#fff',
                fontWeight: 'lighter',
            },
            interval: 0,
        },
    },
    yAxis: {
        type: 'value',
        data: [0, 10, 20, 30, 40],
    },
    series: [
        {
            name: '区域数量',
            type: 'bar',
            stack: 'total',
            label: {
                show: false,
            },
            emphasis: {
                focus: 'series',
            },
            data: area_number.value,
            color: ' rgba(0, 255, 240, 1)',
            barWidth: 20,
        }

    ],
});
const option3 = ref({
    title: {
        text: '易发性分区统计直方图',
        left: 80,
        textStyle: {//设置主标题的文字风格
            color: "white",//字体颜色
            fontSize: 18 //文字大小
        },

    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '9%',
        align: 'auto',
        itemHeight: 5,
        textStyle: {
            lineHeight: 18,
            fontSize: 12,
            color: '#fff',
            fontWeight: 'lighter',
        },
    },
    xAxis: {
        type: 'category',
        data: area.value,
        axisLabel: {
            textStyle: {
                fontSize: 9,
                color: '#fff',
                fontWeight: 'lighter',
            },
            interval: 0,
        },
    },
    yAxis: {
        type: 'value',
        data: [0, 10, 20, 30, 40],
    },
    series: [
        {
            name: '区域数量',
            type: 'bar',
            stack: 'total',
            label: {
                show: false,
            },
            emphasis: {
                focus: 'series',
            },
            data: area_number.value,
            color: ' rgba(0, 255, 240, 1)',
            barWidth: 20,
        }

    ],
});


</script>

<style lang="scss" scoped>
.layout-left-box {
    position: absolute;
    height: 63%;
    width: 30%;
    top: 39%;
    left: 70%;
    background: #081b29;
    padding: 5px;
    box-sizing: border-box;

    .title {
        color: #fff;
        font-size: 32px;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        padding-left: 8px;


    }

    .chart {
        position: absolute;
        height: 60%;
        width: 80%;
        left: 15%;
        top: 25%;
        z-index: 999;
        // background-color: #fff;
    }

}
.chart-select{
    position: absolute;
    width: 62%;
    height: 10%;
    top:10%;
    left:23%
}
</style>
