<template>
  <div class="detail-info">
    <div v-if="label" class="label" :class="{ labelAuto }">{{ label }}:</div>
    <div class="slot" :class="{ center }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    label?: string; //标签名
    center?: boolean; //右侧内容是否居中
    labelAuto?: boolean; //是否对齐
  }>(),
  {
    center: false,
    labelAuto: false,
  }
);
</script>

<style lang="scss" scoped>
.detail-info {
  display: flex;
  width: 100%;
  .label {
    width: 70px;
    // text-align: left;
    text-align: right;
    flex-shrink: 0;
    margin-right: 10px;
  }
  .labelAuto {
    width: auto;
  }
  .slot {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    word-wrap: break-word;
    white-space: normal;
  }
  .center {
    justify-content: center;
  }
}
</style>
