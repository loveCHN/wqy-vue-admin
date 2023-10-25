<template>
  <el-card>
    <div class="head">
      <div class="title">商品管理</div>
    </div>
    <div class="commodity-list">
      <router-link
        v-for="item in commodityLinkColumn"
        to="/acl/business"
        class="orderBar"
        :class="emergencyClass(item)"
      >
        <div class="label">{{ item.label }}</div>
        <div class="nums">{{ item.nums }}</div>
      </router-link>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import type { LinkType } from "../../type";
let commodityLinkColumn: LinkType[] = [
  {
    label: "在售/缺货/总缺货",
    nums: "8/314",
  },
  {
    label: "库存不足7天",
    nums: 11,
  },
  {
    label: "48小时自动上架品种数",
    nums: 0,
  },
  {
    label: "在售有货商品",
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
.commodity-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .orderBar {
    width: 50%;
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
</style>
