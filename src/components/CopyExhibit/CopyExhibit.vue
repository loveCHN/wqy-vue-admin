<template>
  <div class="container">
    {{ showInfo }}
    <div class="copy" v-copy="showInfo">复制</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  showInfo: string;
}>();
</script>
<style lang="scss" scoped>
.container {
  width: 375px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  padding: 6px 11px;
  display: flex;
  align-items: center;
  position: relative;
  .copy {
    background-color: #fafafa;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 13px;
    cursor: pointer;
    user-select: none;
    border-left: 1px solid #d9d9d9;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
