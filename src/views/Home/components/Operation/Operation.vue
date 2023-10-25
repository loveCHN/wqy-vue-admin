<template>
  <el-card>
    <div class="head">
      <div class="title">运营视窗</div>
    </div>
    <div class="noticeScroll">
      <div class="icon">
        <el-icon><ChatDotSquare /></el-icon>
      </div>
      <div class="carousel">
        <el-carousel
          trigger="click"
          height="22px"
          arrow="never"
          direction="vertical"
          indicator-position="none"
        >
          <el-carousel-item v-for="(item, index) in noticeInfo" :key="index">
            <div class="noticeScrollItem">
              <span>{{ item }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="operationdata-bar">
      <div class="visitor-bar">
        <div class="title">
          <span>访客数</span>
          <Prompt>
            <p>
              访客数：统计周期内访问您店铺页面、商品详情页或产生采购行为的去重人数，一个人在统计时间范围内多次访问只记一次。
            </p>
            <p>环比数据：昨日店铺总访客数相对前日店铺总访客数的数量变化情况</p>
          </Prompt>
        </div>
        <div class="nums">6</div>
        <div class="detail">
          <div class="detail-title">昨日全天</div>
          <div class="detail-nums">342</div>
        </div>
        <div class="detail">
          <div class="detail-title">昨日全天</div>
          <div class="detail-nums">342</div>
        </div>
      </div>
      <div class="shop-bar">
        <div class="shop-num">
          <div class="title">
            <span>访客数</span>
            <Prompt>
              <p>
                访客数：统计周期内访问您店铺页面、商品详情页或产生采购行为的去重人数，一个人在统计时间范围内多次访问只记一次。
              </p>
              <p>
                环比数据：昨日店铺总访客数相对前日店铺总访客数的数量变化情况
              </p>
            </Prompt>
          </div>
          <div class="nums">6</div>
          <div class="detail">
            <div class="detail-title">昨日全天</div>
            <div class="detail-nums">342</div>
          </div>
          <div class="detail">
            <div class="detail-title">昨日全天</div>
            <div class="detail-nums">342</div>
          </div>
        </div>
        <div class="sameday-num">
          <div class="sameday-num-item">
            <div>
              <div class="title">
                <span>当天新店数</span>
                <Prompt>
                  <p>
                    访客数：统计周期内访问您店铺页面、商品详情页或产生采购行为的去重人数，一个人在统计时间范围内多次访问只记一次。
                  </p>
                  <p>
                    环比数据：昨日店铺总访客数相对前日店铺总访客数的数量变化情况
                  </p>
                </Prompt>
              </div>
              <div class="num">12</div>
            </div>
            <div>
              <div class="title">
                <span>新店转化率</span>
              </div>
              <div class="num">240%</div>
            </div>
          </div>
          <div class="sameday-num-item">
            <div>
              <div class="title">
                <span>当日复购药店</span>
                <Prompt>
                  <p>
                    访客数：统计周期内访问您店铺页面、商品详情页或产生采购行为的去重人数，一个人在统计时间范围内多次访问只记一次。
                  </p>
                  <p>
                    环比数据：昨日店铺总访客数相对前日店铺总访客数的数量变化情况
                  </p>
                </Prompt>
              </div>
              <div class="num">12</div>
            </div>
            <div>
              <div class="title">
                <span>90天转化率</span>
              </div>
              <div class="num">240%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="amount-bar">
        <div class="title">
          <span>支付金额</span>
          <Prompt>
            <p>
              访客数：统计周期内访问您店铺页面、商品详情页或产生采购行为的去重人数，一个人在统计时间范围内多次访问只记一次。
            </p>
            <p>环比数据：昨日店铺总访客数相对前日店铺总访客数的数量变化情况</p>
          </Prompt>
        </div>
        <div class="nums">6</div>
        <div class="detail">
          <div class="detail-title">昨日全天</div>
          <div class="detail-nums">342</div>
        </div>
        <div class="detail">
          <div class="detail-title">昨日全天</div>
          <div class="detail-nums">342</div>
        </div>
      </div>
    </div>
    <div class="active">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane
          v-for="val in activityColumn"
          :key="val"
          :label="val.activityLabel"
          :name="val.activityLabel"
        >
          <ul>
            <li v-for="item in val.activeItems">
              <div class="status">{{ item.status }}</div>
              <router-link :to="item.path" class="activeItems-link">
                {{ item.itemLabel }}
              </router-link>
              <router-link :to="item.path" class="check-detail">
                查看详情
              </router-link>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import Prompt from "@/components/Prompt/Prompt.vue";
import type { TabsPaneContext } from "element-plus";
import { ref } from "vue";
let noticeInfo: string[] = [
  "最近7天共有832个药店在您的店铺采购，店铺转化率为42.2%",
  "最近7天共有1766个用户浏览过您的店铺（访问：3400次）",
  "最近7天共有832个药店在您的店铺采购，店铺转化率为42.2%",
];

let activityColumn = [
  {
    activityLabel: "流量利器",
    activeItems: [
      {
        itemLabel:
          "你离百万销量，只差一个商圈的距离！快速扩开商圈，获取更多流量！",
        path: "/",
        status: "待参与",
      },
      {
        itemLabel:
          "什么！拼团和【批购包邮】也能让用户补单？三步开通【一盒随心购】解锁全新补单页",
        path: "/",
        status: "待参与",
      },
    ],
  },
  {
    activityLabel: "推广活动",
    activeItems: [
      {
        itemLabel: "9.1-9.30新疆宁夏旗舰店99折",
        path: "/",
        status: "待参与",
      },
      {
        itemLabel: "9.1-9.30新疆宁夏旗舰店99折",
        path: "/",
        status: "待参与",
      },
    ],
  },
];
let activeName = ref<string>(activityColumn[0].activityLabel);
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style lang="scss" scoped>
.noticeScroll {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .icon {
    font-size: 22px;
    color: #fe6200;
    margin-right: 10px;
    transform: translate(0, 3px);
  }
  .carousel {
    flex: 1;
    height: 100%;
    .noticeScrollItem {
      width: 100%;
      height: 22px;
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
        color: #fe6200;
      }
    }
  }
}
.operationdata-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 155px;
  margin-bottom: 20px;
  .visitor-bar,
  .amount-bar,
  .shop-bar {
    background-color: #f8f9fc;
    height: 100%;
    padding: 16px;
  }
  .visitor-bar,
  .amount-bar,
  .shop-bar > .shop-num {
    width: 20%;
    min-width: 160px;
    .title {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #666;
      margin-bottom: 12px;
    }
    .nums {
      color: #000;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .detail {
      color: #666;
      display: flex;
      margin-bottom: 14px;
      .detail-title {
        font-size: 14px;
        margin-right: 8px;
      }
      .detail-nums {
        font-size: 12px;
      }
    }
  }
  .shop-bar {
    flex: 1;
    margin: 0 1.5%;
    display: flex;
    .shop-num {
      width: 30%;
      min-width: 110px;
    }
    .sameday-num {
      flex: 1;
      height: 100%;
      .sameday-num-item {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        > div {
          width: 50%;
        }
        .title {
          width: 100%;
          display: flex;
          font-size: 14px;
          color: #666;
          margin-bottom: 15px;
        }
        .num {
          width: 100%;
          font-size: 20px;
          color: #000;
          font-weight: bold;
        }
      }
    }
  }
}
.active {
  .demo-tabs {
    ul {
      width: 100%;
      li {
        height: 58px;
        display: flex;
        align-items: center;
        .status {
          width: 53px;
          color: #f53f3f;
          background-color: #ffebeb;
          font-size: 12px;
          font-weight: bold;
          padding: 0 8px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }
        .activeItems-link {
          flex: 1;
          color: #f53f3f;
          &:hover {
            text-decoration: underline;
          }
        }
        .check-detail {
          color: #fff;
          background-color: #fe6200;
          border: none;
          border-radius: 4px;
          width: 72px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
:deep(.el-tabs__active-bar) {
  background-color: #fe6200;
}
:deep(.el-tabs__item:hover) {
  opacity: 0.6;
  color: #000;
}
:deep(.el-tabs__item) {
  color: #000;
}
:deep(.el-tabs__item.is-active) {
  color: #fe6200;
}
:deep(.el-tabs__item.is-active:hover) {
  opacity: 1;
}
</style>
