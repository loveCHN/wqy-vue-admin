<template>
  <el-icon class="icon" @click="useSetting.changeIcon">
    <component :is="useSetting.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <!-- 动态展示路由名字和标题 -->
    <el-breadcrumb-item
      v-for="item in $route.matched"
      :key="item.path"
      :to="{ path: item.path }"
      v-show="item.meta.title"
    >
      <el-icon style="margin: 0 2px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import useLayoutSetting from "@/store/modules/setting";
import { useRoute } from "vue-router";
let $route = useRoute();
let useSetting = useLayoutSetting();
</script>
<style lang="scss" scoped>
.icon {
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
</style>
