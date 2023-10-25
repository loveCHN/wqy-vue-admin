<template>
  <div class="button-container">
    <el-popover
      v-if="childPathList"
      placement="bottom"
      :width="200"
      trigger="hover"
    >
      <template #reference>
        <div class="button">{{ title }}</div>
      </template>
      <ul>
        <li>
          <router-link to="/">1</router-link>
        </li>
      </ul>
    </el-popover>
    <router-link v-if="path" :to="path" class="button">
      {{ title }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
import type { ButtonPathListType } from "./type";
defineProps<ButtonPathListType>();
</script>
<style lang="scss" scoped>
.button {
  display: inline-block;
  color: #1890ff;
  border: 1px solid #1890ff;
  font-size: 14px;
  border-radius: 2px;
  padding: 8px 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}
</style>
