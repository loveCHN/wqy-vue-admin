<template>
  <!-- 刷新按钮 -->
  <el-button circle size="small" icon="Refresh" @click="changeRefsh">
  </el-button>
  <!-- 全屏按钮 -->
  <el-button circle size="small" icon="FullScreen" @click="fullScreen">
  </el-button>
  <!-- 设置按钮 -->
  <el-button circle size="small" icon="Setting"> </el-button>
  <!-- 头像 -->
  <img
    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fba6b21b2-617c-482c-a8ee-f643970608e1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695460900&t=2c4b7dcfeb11231894bb84c0e81fcc35"
    alt=""
    class="headportrait"
  />
  <el-dropdown class="dropdown">
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import useLayoutSetting from "@/store/modules/setting";
import useUserStore from "@/store/modules/user";
let $router = useRouter();
/**
 * 全屏模式
 */
const fullScreen = () => {
  //dom对象的一个属性 可以判断当前是不是全屏模式 如果是全屏返回true 不是返回null
  let full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

let { changeRefsh } = useLayoutSetting();
let userStore = useUserStore();
const logout = () => {
  //向退出登录接口发送请求,逻辑可以放到userLouout()中（暂时不弄）
  userStore.userLouout();
  $router.push({
    path: "/login",
  });
};
</script>
<style lang="scss" scoped>
.headportrait {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 12px;
}

.dropdown {
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
}
</style>
