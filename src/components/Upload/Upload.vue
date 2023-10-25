<template>
  <div class="upload">
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="/api/admin/tool/uploadimg"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      list-type="picture"
      :on-change="handleChange"
      :on-success="handleUploadSuccess"
      name="image"
    >
      <el-button type="primary">点击上传1</el-button>
      <template #tip>
        <div class="el-upload__tip">不要超过500kb</div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { UploadProps, UploadUserFile } from "element-plus";
let uploadImgList = defineModel<any>("uploadImgList");
const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  // console.log(uploadFile, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (file) => {
  // console.log(file);
};
const handleChange = (file: any, fileLists: any) => {
  // console.log(file, "filefilefilefilefile");
  // console.log(fileLists, "fileLists");
};

const handleUploadSuccess: UploadProps["onSuccess"] = (response) => {
  uploadImgList.value.push(`${response.domain}${response.data}`);
  console.log(uploadImgList.value);
};
</script>
<style lang="scss" scoped>
.upload {
  width: 100%;
}
</style>
