<template>
  <div class="User">
    <!-- 表格头部区域 插槽 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- <FilterBar v-model="paginationInfo"></FilterBar> -->
    <!-- 表格区域 -->
    <el-table
      :row-key="rowKey"
      v-loading="isLoading"
      :border="true"
      class="table"
      :data="tableData"
      stripe
      @selection-change="handleSelectionChange"
      cell-class-name="table-cell"
      :header-cell-style="{
        background: '#fafafa',
        color: '#000000',
      }"
    >
      <template v-for="item in tableColumns" :key="item">
        <el-table-column
          v-if="
            item.type && ['selection', 'index', 'expand'].includes(item.type)
          "
          :="item"
          align="center"
        >
        </el-table-column>
        <el-table-column
          v-if="!item.type && item.prop && !item.slot"
          :label="item.label"
          :prop="item.prop"
          align="center"
          :width="item.width"
          :fixed="item.fixed"
        >
        </el-table-column>
        <el-table-column
          v-if="item.slot"
          :label="item.label"
          :prop="item.prop"
          align="center"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template #default="{ row }">
            <!-- 有时row会返回空{} 有可能是element的bug-->
            <!-- 这里加一个判断 判断row不为空  -->
            <div class="table-slot">
              <slot v-if="!isEmptyObject(row)" :name="item.slot" :="row"></slot>
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 这里是分页器 -->
    <el-pagination
      style="margin-top: 20px"
      v-model:page-size="paginationInfo.pageSize"
      :page-sizes="[5, 10, 15, 20]"
      :small="false"
      background
      layout="->,sizes,prev, pager, next, jumper"
      :total="paginationInfo.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import type {
  tableColumnType,
  paginationInfoType,
} from "@/components/Table/type";
import { isEmptyObject } from "@/utils/isEmpty";
let props = defineProps<{
  rowKey?: string;
  tableData: any;
  column: tableColumnType[];
}>();

//table表格loading状态 默认值为true 暂定为false 因为没有接入api
let isLoading = ref<boolean>(false);

// 接收 columns 并设置为响应式
const tableColumns = ref<tableColumnType[]>(props.column);

//配置分页器
let paginationInfo = reactive<paginationInfoType>({
  pageSize: 5,
  total: 100, //total先写死 后期将获取信息函数传给<Table />
});

const handleSizeChange = (currentPage: number) => {
  paginationInfo.pageSize = currentPage;
  console.log(paginationInfo.pageSize, "pageSize.value");
};
const handleCurrentChange = (currentPage: number) => {
  console.log(currentPage);
};

//定义当前选中的项 默认为空
let selectOptions = ref([]);
const handleSelectionChange = (val: any) => {
  selectOptions.value = val;
  console.log(selectOptions.value);
};
//动态设置table选择项的样式
// const editRowClassName = ({ row }: { row: any }) => {
//   let rowIsInSelectOptions = selectOptions.value.find(
//     (item: { id: string }) => item.id === row.id
//   );
//   if (rowIsInSelectOptions) {
//     return "table-edit-row";
//   }
// };
</script>
<style lang="scss" scoped>
.User {
  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .table {
      margin: 0 20px;
    }
  }
}
.table-slot {
  text-align: left;
}
// .header {
// margin-bottom: 25px;
// }
</style>
