<!-- 筛选组件 -->
<!-- 后续会添加更多选项 -->
<template>
  <ul class="filter">
    <li
      v-for="(item, index) in filterItems"
      :key="item.name"
      @click="handleClick(index)"
      :class="{ active: isActive === index }"
    >
      <span>{{ item.name }}</span>
      <div class="nums" v-if="item.num">{{ item.num }}</div>
    </li>
  </ul>
  <!-- 筛选后底下的操作 -->
  <div class="operate">
    <div class="slot">
      <slot :name="filterItems[isActive].slot"> </slot>
    </div>
    <div class="pagination">
      <!-- 分页器组件目前的想法是父组件传过来一个获取列表数据的方法 -->
      <!-- 父 -> <Table /> -> <FilterBar /> -->
      <el-pagination
        v-model:page-size="paginationInfo.pageSize"
        :page-sizes="[5, 10, 15, 20]"
        :small="false"
        background
        layout="->,total,sizes"
        :total="20"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { paginationInfoType } from "@/components/Table/type/index";
import type { FilterItem } from "./types/type";
let props = defineProps<{
  requestApi?: () => any;
  filterItems: FilterItem[];
}>();
let paginationInfo = defineModel<paginationInfoType>({
  default: {
    pageSize: 5, // 适当的值
    total: 0, // 适当的值
  },
});

//分页
const handleSizeChange = (currentPage: number) => {
  paginationInfo.value.pageSize = currentPage;
  console.log(paginationInfo.value.pageSize, "pageSize.value");
};
const handleCurrentChange = (currentPage: number) => {
  console.log(currentPage);
};
//设置当前选中项 默认第0项
let isActive = ref<number>(0);
const handleClick = async (index: number) => {
  isActive.value = index;
  //触发父组件获取数据函数 更新父组件的值 保持单向数据流
  props.requestApi && (await props.requestApi());
};
</script>
<style lang="scss" scoped>
.filter {
  display: flex;
  border-left: 1px solid #e5e5e5;

  li {
    cursor: pointer;
    padding: 0 24px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    font-size: 16px;
    user-select: none;
    &:hover {
      span {
        color: #1890ff;
      }
    }

    .nums {
      margin-left: 5px;
      background-color: #1890ff;
      color: #fff;
      padding: 0 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      font-size: 14px;
      height: 20px;
    }
  }

  .active {
    border-top: 2px solid #1890ff;
    background-color: #f8f9fc;

    span {
      font-weight: bold;
      color: #1890ff;
    }
  }
}

.operate {
  width: 100%;
  background-color: #f8f9fc;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-bottom: none;
  display: flex;
  justify-content: space-between;

  .operate-button {
    display: flex;
    align-items: center;
  }
}
</style>
