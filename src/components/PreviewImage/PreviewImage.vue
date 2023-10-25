<template>
  <div
    class="previewImage"
    :style="style"
    @mouseover="previewImageMouseOver"
    @mouseleave="previewImageMouseLeave"
  >
    <div class="mask" v-show="maskIsShow">
      <el-icon><View style="color: #fff" /></el-icon>
      <span style="color: #fff">点击预览</span>
    </div>
    <el-image
      :style="style"
      :src="imageSrc"
      :zoom-rate="1.2"
      :preview-src-list="previewSrc"
      :initial-index="0"
      fit="cover"
      preview-teleported
    />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

let props = defineProps<{
  image: string[] | string; //传入单个图片或者传入图片数组都可以
  style?: any;
}>();
//判断是否为单张图片
let isSingle = ref<boolean>();
isSingle.value = typeof props.image === "string" ? true : false;

// //创立一个计算属性（只读）
let imageSrc = computed(() => (isSingle.value ? props.image : props.image[0]));
let previewSrc = computed(() => (isSingle.value ? [props.image] : props.image));

let maskIsShow = ref<boolean>(false);
const previewImageMouseOver = () => (maskIsShow.value = true);
const previewImageMouseLeave = () => (maskIsShow.value = false);
</script>
<style lang="scss" scoped>
.previewImage {
  position: relative;
  // margin: 0 auto;
  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.7);
    pointer-events: none; //不处理点击事件 让下层元素处理  实现点击穿透
  }
}
</style>
