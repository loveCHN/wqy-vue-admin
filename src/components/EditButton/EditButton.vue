<template>
  <div class="edit-button">
    <el-button
      link
      type="primary"
      :icon="EditPen"
      @click="handleEdit"
      class="icon"
    ></el-button>
    <el-dialog
      append-to-body
      draggable
      v-model="centerDialogVisible"
      :title="title"
    >
      <div>
        <slot></slot>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <LoadingButton type="primary" @click="loadBtnClick">
            确认
          </LoadingButton>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import LoadingButton from "@/components/LoadingButton/LoadingButton.vue";
import { EditPen } from "@element-plus/icons-vue";
defineProps<{
  title: string;
  handleConfirm?: any;
}>();
let $emit = defineEmits<{
  confirm: [editBtnDone: () => void];
}>();
//控制dialog显示隐藏
let centerDialogVisible = ref(false);
const handleEdit = () => {
  centerDialogVisible.value = true;
};
/**
 *
 * @param done 控制按钮的加载状态
 */
const loadBtnClick = (done: () => void) => {
  centerDialogVisible.value = true;
  const editBtnDone = () => {
    done();
    centerDialogVisible.value = false;
  };
  $emit("confirm", editBtnDone);
};
</script>
<style lang="scss" scoped>
.edit-button {
  display: inline-block;
  .icon {
    color: #1890ff !important;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
