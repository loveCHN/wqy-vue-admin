<template>
  <div class="home-container card-margin">
    <div class="left-box">
      <Order />
      <Operation />
      <Charts />
    </div>
    <div class="right-box">
      <BusinessInfo />
      <Trends />
      <CommodityManagement />
    </div>
  </div>
</template>
<script setup lang="ts">
import Order from "./components/Order/Order.vue";
import Operation from "./components/Operation/Operation.vue";
import BusinessInfo from "./components/BusinessInfo/BusinessInfo.vue";
import CommodityManagement from "./components/CommodityManagement/CommodityManagement.vue";
import Charts from "./components/Charts/Charts.vue";
import Trends from "./components/Trends/Trends.vue";
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  display: flex;
  :deep(.head) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
      font-size: 20px;
    }
    .welcome-info {
      font-size: 14px;
    }
  }
  .left-box {
    flex: 1;
    margin: 0 10px;
  }
  .right-box {
    width: 500px;
    margin: 0 10px;
  }
}
</style>
