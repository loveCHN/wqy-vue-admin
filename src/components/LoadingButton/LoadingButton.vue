<template>
  <el-button :="$attrs" :loading="isLoading" @click="buttonClick">
    <slot />
  </el-button>
</template>
<script setup lang="ts">
import { ref } from "vue";
const $emit = defineEmits<{
  click: [done: () => void];
}>();
const isLoading = ref(false);
const done = () => {
  isLoading.value = false;
};
const buttonClick = () => {
  isLoading.value = true;
  $emit("click", done);
};
</script>
