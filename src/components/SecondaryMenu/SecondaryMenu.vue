<template>
  <div class="SecondaryMenu">
    <div class="title">
      {{ title }}
    </div>
    <ul class="menu-list">
      <li
        v-for="(item, index) in menuList"
        :key="index"
        @click="handleClick(item, index)"
        :class="{ active: active === index }"
      >
        {{ item.menuName }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" generic="T" setup>
import { ref } from "vue";

interface Props {
  menuList: any;
  title: string;
}
defineProps<Props>();
const $emit = defineEmits<{
  menuChange: [item: any, index: number];
}>();
let active = ref<number>(0);
const handleClick = (item: any, index: number) => {
  active.value = index;
  $emit("menuChange", item, index);
};
</script>
<style lang="scss" scoped>
.SecondaryMenu {
  border-radius: 10px;
  overflow: hidden;
  width: 195px;
  height: 100%;
  .title {
    width: 100%;
    height: 48px;
    background-color: #e3f1ff;
    color: #1890ff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-list {
    background-color: #fff;
    padding: 5px;
    li {
      border-radius: 5px;
      width: 100%;
      height: 48px;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #000;
      padding-left: 16px;
      &:hover {
        background-color: #f3f9ff;
        transition: all 0.2s;
      }
    }
    .active {
      background-color: #f3f9ff;
      transition: all 0.2s;
    }
  }
}
</style>
