<template>
  <div>
    <el-card :="$attrs" body-style="padding:0px">
      <div class="back-bar">
        <el-button :icon="Back" @click="goBack">
          {{ backName ? backName : "返回" }}
        </el-button>
        <div class="title">{{ title ? title : backBarTitle }}</div>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { Back } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
defineProps<{
  title?: string;
  backName?: string;
}>();
let $router = useRouter();
let $route = useRoute();
const goBack = () => $router.go(-1);
let backBarTitle = ref<string>();
onMounted(() => {
  setTimeout(() => {
    backBarTitle.value = $route.meta.title as string;
  }, 50);
});
</script>
<style lang="scss" scoped>
.back-bar {
  padding: 11px 16px;
  display: flex;
  align-items: center;
  .title {
    margin-left: 16px;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
