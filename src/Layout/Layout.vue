<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider" :class="{ fold: useSetting.fold }">
      <div class="logo" v-show="!useSetting.fold">
        <h1>商业公司</h1>
      </div>
      <el-scrollbar class="scroll-bar">
        <el-menu
          style="user-select: none"
          :collapse="useSetting.fold"
          :default-active="$route.path"
          active-text-color="#009688"
          background-color="#fff"
          class="el-menu-vertical-demo"
          text-color="#000"
          unique-opened
        >
          <Menu :MenuList="MenuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout-right" :class="{ fold: useSetting.fold ? true : false }">
      <!-- 顶部导航 -->
      <div class="layout-tabbar">
        <TabBar />
        <Tabs />
      </div>
      <!-- 内容显示区域 -->
      <div class="layout-main">
        <Main />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import useAuthStore from "@/store/modules/auth";
import useLayoutSetting from "@/store/modules/setting";
import Menu from "./Menu/Menu.vue";
import Tabs from "./Tabs/Tabs.vue";
import Main from "./Main/Main.vue";
import TabBar from "./TabBar/TabBar.vue";
//获取useUserStore中信息
let authStore = useAuthStore();
let MenuList = authStore.showMenuListGet;
let $route = useRoute();
let useSetting = useLayoutSetting();
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  min-width: 1500px;
  height: 100vh;
  display: flex;

  .layout-slider {
    width: 210px;
    height: 100vh;
    background-color: #fff;
    border-right: 1px solid #e4e7ed;
    transition: all 0.2s;
    &.fold {
      width: 50px;
    }
    .logo {
      display: flex;
      align-items: center;
      padding: 25px 30px;
      width: 100%;
      overflow: hidden;
      .logoImg {
        width: 50px;
        height: 50px;
        margin-right: 20px;
      }

      h1 {
        color: #435ebe;
        font-size: 24px;
        font-weight: bold;
      }
    }

    .scroll-bar {
      width: 100%;
      height: calc(100vh - 100px);

      .el-menu {
        border: none;
      }
    }
  }

  .layout-right {
    width: calc(100% - $base-menu-width);
    height: 100vh;

    .layout-tabbar {
      width: 100%;
      height: 90px;
      background-color: #fff;
      border-bottom: 1px solid #e4e7ed;
      color: #000;
    }

    .layout-main {
      width: 100%;
      height: calc(100vh - 90px);
      background-color: #f8f9fc;
      padding: 20px;
      overflow: auto;
      padding: 10px 12px;
    }
    &.fold {
      width: calc(100vw - 50px);
    }
  }
}
</style>
