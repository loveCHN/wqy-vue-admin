<template>
  <template v-for="item in MenuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <span class="sle">{{ item.meta?.title }}</span>
      </template>
      <Menu :MenuList="item.children" />
    </el-sub-menu>
    <el-menu-item
      v-if="!item.children?.length"
      :index="item.path"
      @click="handleClickMenu(item)"
    >
      <el-icon>
        <component :is="item.meta?.icon"></component>
      </el-icon>
      <template #title>
        <span class="sle">{{ item.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
defineOptions({
  name: "Menu",
});
//获取路由器对象
let $router = useRouter();
defineProps<{
  MenuList: Menu.MenuOptions[];
}>();

const handleClickMenu = (subItem: any) => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
  $router.push(subItem.path);
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  user-select: none;
}
.el-menu-item.is-active {
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: bold;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    content: "";
    background-color: #337ecc;
  }
}
</style>
