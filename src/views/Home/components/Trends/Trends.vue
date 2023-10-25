<template>
  <el-card>
    <div class="head">
      <div class="title">最新动态</div>
      <router-link to="/" class="more">更多</router-link>
    </div>
    <div class="scroll-banner">
      <el-carousel
        ref="carousel"
        trigger="click"
        height="105px"
        arrow="never"
        indicator-position="none"
        @change="scrollChange"
      >
        <el-carousel-item v-for="item in scrollInfoList" :key="item">
          <router-link :to="item.path" class="scrollLink">
            <img :src="item.url" alt="" />
          </router-link>
        </el-carousel-item>
        <div class="intro">
          <span>
            {{ scrollInfoList[scrollIndex as number].label }}
          </span>
          <ul class="scroll-dots">
            <li
              v-for="(_, index) in scrollInfoList"
              :key="index"
              :class="{
                active: index === scrollIndex,
              }"
              @click="changeScrollItem(index)"
            >
              {{ index + 1 }}
            </li>
          </ul>
        </div>
      </el-carousel>
    </div>
    <div class="notice">
      <el-carousel
        trigger="click"
        height="60px"
        arrow="never"
        direction="vertical"
        indicator-position="none"
      >
        <el-carousel-item v-for="groups in noticeInfoListGroup" :key="groups">
          <ul class="notice-item">
            <li v-for="(item, index) in groups" :key="index">
              <el-icon class="icon"><Bell /></el-icon>
              <router-link :to="item.path" class="router-link">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import type { ScrollType, NoticeType } from "../../type.ts";
let scrollInfoList = reactive<ScrollType[]>([
  {
    path: "/",
    label: "更优定价，更快动销，快根据建议折后价调价吧",
    url: "https://img.ysbang.cn/data/img/pharmacy/broadcast/2023/09/05/64f6deda1e992.jpg",
  },
  {
    path: "/",
    label: "诊所尾品专区，解决尾货困扰",
    url: "https://img.ysbang.cn/data/img/pharmacy/broadcast/2022/09/05/63155924dbfd1.png",
  },
  {
    path: "/",
    label: "更优定价，更快动销，快根据建议折后价调价吧",
    url: "https://img.ysbang.cn/data/img/pharmacy/broadcast/2023/09/05/64f6deda1e992.jpg",
  },
]);
let noticeInfoList = reactive<NoticeType[]>([
  {
    label: "消毒产品上架标准调整通知",
    path: "/",
    emergency: true,
  },
  {
    label: "【重要通知】订单异常物流功能升级通知",
    path: "/",
    emergency: true,
  },
  {
    label: "化妆品质量公告汇总（2023）第9期",
    path: "/",
  },
  {
    label: "关于部分修改药师帮技术服务合作协议的通知",
    path: "/",
  },
  {
    label: "化妆品质量公告汇总（2023）第9期",
    path: "/",
  },
  {
    label: "关于部分修改药师帮技术服务合作协议的通知",
    path: "/",
  },
]);
//计算属性 对noticeInfoList进行分组 两个一组
let noticeInfoListGroup = computed(() => {
  let arr: NoticeType[] = [];
  let newArr: NoticeType[][] = [];
  noticeInfoList.forEach((item: NoticeType) => {
    if (arr.length < 2) {
      arr.push(item);
    } else {
      newArr.push(arr);
      arr = [];
      arr.push(item);
    }
  });
  if (arr.length !== 0) {
    newArr.push(arr);
  }
  return newArr;
});

//定义一个索引值
let scrollIndex = ref<number>(0);
const scrollChange = (index: number) => {
  scrollIndex.value = index;
};
const carousel = ref();
const changeScrollItem = (index: number) => carousel.value.setActiveItem(index);
</script>
<style lang="scss" scoped>
.scroll-banner {
  width: 100%;
  height: 105px;
  position: relative;
  margin-bottom: 15px;
  .scrollLink {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .intro {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 14px;
    height: 20px;
    color: #fff;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    background-color: rgba($color: #000000, $alpha: 0.6);
    .scroll-dots {
      height: 100%;
      display: flex;
      li {
        width: 20px;
        height: 100%;
        margin-left: 2px;
        background-color: #6f4f67;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      .active {
        background-color: #333;
      }
    }
  }
}
.notice {
  width: 100%;
  height: 60px;

  .notice-item {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      .icon {
        font-size: 20px;
        color: #1890ff;
        margin-right: 8px;
      }
      .router-link {
        font-size: 16px;
        color: #333;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
