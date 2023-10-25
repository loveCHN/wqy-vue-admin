<template>
  <el-card>
    <div class="head">
      <div class="title">最近30天经营情况</div>
      <router-link to="/" class="check-details">查看详情</router-link>
    </div>
    <div class="echarts-container" ref="echartContainer"></div>
  </el-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import useEcharts from "./hooks/useEcharts";
const echartContainer = ref<HTMLElement>();
const echarts = useEcharts(echartContainer);
// 注册必须的组件
onMounted(() => {
  const chart = echarts.init(echartContainer.value as HTMLElement);
  let option = {
    title: {
      text: "采购总金额",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  chart.setOption(option);
  setTimeout(() => {
    option.series.pop();
    chart.setOption(option);
  }, 5000);
});
</script>
<style lang="scss" scoped>
.check-details {
  border: 1px solid #1890ff;
  border-radius: 4px;
  color: #1890ff;
  font-size: 14px;
  padding: 10px;

  &:hover {
    opacity: 0.6;
  }
}
.echarts-container {
  width: 100%;
  height: 380px;
}
</style>
