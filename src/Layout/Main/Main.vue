<template>
  <div id="Main">
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.fullPath"></component>
        </keep-alive>
        <!-- <component :is="Component" v-if="flag"></component> -->
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import useLayoutSetting from "@/store/modules/setting";
let SettingStore = useLayoutSetting();
//定义组件是否销毁变量flag
let flag = ref<boolean>(true);
watch(
  () => SettingStore.refsh,
  () => {
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  }
);
</script>
<style lang="scss" scoped>
#Main {
  width: 100%;
  height: 100%;
  position: relative;
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}

.fade-transform-enter-from {
  opacity: 0;
  transition: all 0.2s;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transition: all 0.2s;
  // transform: translateX(30px);
}
</style>
