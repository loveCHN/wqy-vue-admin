<template>
  <div class="prompt">
    <el-tooltip class="box-item" effect="dark" placement="top">
      <template #content>
        <div class="prompt-content">
          <slot></slot>
        </div>
      </template>
      <el-icon class="icon"><QuestionFilled /></el-icon>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.prompt-content {
  max-width: 250px;
  font-size: 14px;
}
.prompt {
  display: flex;
  align-items: center;
  margin-left: 3px;
  .icon {
    cursor: pointer;
  }
}
</style>
