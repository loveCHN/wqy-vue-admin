<template>
  <!-- 该组件用于展示table组件中复杂数据 -->
  <!-- 在table组件的slot插槽中使用 -->
  <!-- <ComplexSlot :row="row" :complexMap="complexMap" /> -->
  <!-- row为Table组件作用域插槽的返回值row -->
  <!-- complexMap在父组件中定义 为数组形式 体现映射关系 -->
  <div class="ComplexSlot">
    <div class="infoItem" v-for="(item, index) in complexMap" :key="index">
      <div class="itemName">{{ item.itemName }}:</div>
      <div class="itemInfo">{{ row[item.itemInfo] }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { complexMapType } from "@/components/ComplexSlot/type";
defineProps<{
  row: any;
  complexMap: complexMapType[];
}>();
</script>
<style lang="scss" scoped>
.ComplexSlot {
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #000;
  width: 100%;
  white-space: pre-wrap; /* 使文本自动换行 */
  word-wrap: break-word; /* 处理长单词或链接自动换行 */
  .infoItem {
    display: flex;
    height: auto;
    .itemName {
      min-width: 30%;
    }
    .itemInfo {
      flex: 1;
    }
  }
}
</style>
