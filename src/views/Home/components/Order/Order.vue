<template>
  <el-card>
    <div class="head">
      <div class="title">实时订单</div>
      <div class="welcome-info">
        {{ date }} {{ dayOfWeek }} 亲，今天是您与药师帮携手走过的第 1749
        天，继续加油哦！
      </div>
    </div>
    <div class="orderBarList">
      <router-link
        v-for="item in orderLinkColumn"
        to="/acl/business"
        class="orderBar"
        :class="emergencyClass(item)"
      >
        <div class="label">{{ item.label }}</div>
        <div class="nums">{{ item.nums }}</div>
      </router-link>
    </div>
    <div class="head">
      <div class="title">待办任务</div>
    </div>
    <div class="upcoming-task">
      <div class="presale">
        <div class="title">
          <el-icon class="icon"><ShoppingCartFull /></el-icon>
          <span>售前服务</span>
        </div>
        <div class="taskBarList">
          <router-link
            v-for="item in presaleLinkColumn"
            to="/acl/business"
            class="taskBar"
            :class="emergencyClass(item)"
          >
            <div class="label">{{ item.label }}</div>
            <div class="nums">{{ item.nums }}</div>
          </router-link>
        </div>
      </div>
      <div class="aftersale">
        <div class="title">
          <el-icon class="icon"><Medal /></el-icon>
          <span>售后服务</span>
        </div>
        <div class="taskBarList">
          <router-link
            v-for="item in aftersaleLinkColumn"
            to="/acl/business"
            class="taskBar"
            :class="emergencyClass(item)"
          >
            <div class="label">{{ item.label }}</div>
            <div class="nums">{{ item.nums }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import type { LinkType } from "../../type";
dayjs.locale("zh-cn");
const date = dayjs().format("MM月DD日");
const dayOfWeek = dayjs().format("dddd");
//配置项 router-link
let orderLinkColumn: LinkType[] = [
  {
    label: "今日新订单",
    nums: 25,
  },
  {
    label: "今日新增用户",
    nums: 11,
  },
  {
    label: "待审核退款单",
    nums: 0,
  },
  {
    label: "超24小时未处理",
    nums: 5,
  },
  {
    label: "超24小时未发货",
    nums: 0,
  },
  {
    label: "客户催发货",
    nums: 3,
    emergency: true,
  },
];
let presaleLinkColumn: LinkType[] = [
  {
    label: "订单电汇待审核",
    nums: 0,
  },
  {
    label: "超48小时未开户订单",
    nums: 11,
  },
  {
    label: "配送超48小时订单",
    nums: 0,
  },
  {
    label: "在线客服未回复",
    nums: 5,
  },
];
let aftersaleLinkColumn: LinkType[] = [
  {
    label: "平台介入",
    nums: 1,
    emergency: true,
  },
  {
    label: "未处理售后单",
    nums: 7,
  },
  {
    label: "未处理投诉",
    nums: 0,
  },
  {
    label: "三证更新待审核",
    nums: 5,
  },
];
const emergencyClass = (item: LinkType) => {
  const isEmergency = typeof item.nums === "number" && item.nums > 0;
  return {
    emergency: item.emergency && isEmergency,
  };
};
</script>
<style lang="scss" scoped>
.orderBarList {
  display: flex;
  height: 90px;
  margin-bottom: 16px;
  .orderBar {
    flex: 1;
    height: 100%;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #f8f9fc;
      .nums {
        color: #1890ff;
      }
    }
    .label {
      color: #666;
      font-size: 14px;
      margin-bottom: 15px;
    }
    .nums {
      font-size: 24px;
      color: #000;
      font-weight: bold;
    }
  }
  .emergency {
    &:hover {
      .nums {
        color: #f53f3f;
      }
    }
    .nums {
      color: #f53f3f;
    }
  }
}
.upcoming-task {
  display: flex;
  justify-content: space-between;
  .presale,
  .aftersale {
    width: 49%;
    .title {
      font-size: 16px;
      display: flex;
      align-items: center;
      margin-bottom: 7px;
      .icon {
        font-size: 24px;
        color: #1890ff;
        margin-right: 7px;
      }
    }
    .taskBarList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .taskBar {
        margin-bottom: 17px;
        border: 1px solid #f0f0f0;
        width: 49%;
        height: 100%;
        padding: 16px;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background-color: #f8f9fc;
          .nums {
            color: #1890ff;
          }
        }
        &:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }
        .label {
          color: #666;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .nums {
          font-size: 24px;
          color: #000;
          font-weight: bold;
        }
      }
      .emergency {
        &:hover {
          .nums {
            color: #f53f3f;
          }
        }
        .nums {
          color: #f53f3f;
        }
      }
    }
  }
}
</style>
