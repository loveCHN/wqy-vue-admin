<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb />
    </div>
    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>
<script setup lang="ts">
import Setting from "./Setting/Setting.vue";
import Breadcrumb from "./Breadcrumb/Breadcrumb.vue";
</script>
<style lang="scss" scoped>
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  padding: 0 20px;
  border-bottom: 1px solid #e4e7ed;

  // background-image: linear-gradient(to right, rgb(233, 233, 233), black, white);

  .tabbar-left {
    display: flex;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
</style>
