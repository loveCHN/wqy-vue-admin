<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs
        v-model="tabsMenuValue"
        type="card"
        closable
        class="demo-tabs"
        @tab-click="tabClick"
        @tab-remove="tabRemove"
      >
        <el-tab-pane
          v-for="item in tabsMenuList"
          :key="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.close"
        >
          <template #label>
            <el-icon v-show="item.icon" class="tabs-icon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTabsStore } from "@/store/modules/tab";
import { TabsPaneContext, TabPaneName } from "element-plus";
const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();
const tabsMenuValue = ref(route.fullPath);
const tabsMenuList = computed(() => tabStore.tabsMenuList);

//监听路由的变化
watch(
  () => route.fullPath,
  () => {
    tabsMenuValue.value = route.fullPath;
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string,
      close: true,
    };
    tabStore.addTab(tabsParams);
  },
  { immediate: true }
);
//点击选项卡时
const tabClick = (tabItem: TabsPaneContext) => {
  const fullPath = tabItem.props.name as string;
  router.push(fullPath);
};
//关闭选项卡时
const tabRemove = (fullPath: TabPaneName) => {
  tabStore.removeTabs(fullPath as string, fullPath == route.fullPath);
  console.log(tabStore.tabsMenuList);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
.tabs-container {
  width: 100%;
  height: 50px;
  background-color: red;
}
</style>
