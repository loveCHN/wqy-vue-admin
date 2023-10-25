<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>hello</h1>
          <h2>欢迎来到管理系统</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login-button"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import { User, Lock } from "@element-plus/icons-vue";
import type { loginForm } from "@/api/user/type";
import { ElMessage, ElNotification, type FormRules } from "element-plus";

let loginForm: loginForm = reactive({
  username: "admin",
  password: "123456",
});
let loginForms = ref();
//@ts-ignore
const validatorUsername = (rule: any, value: string, callback: any) => {
  //如果符合条件，callback放行通过
  //如果不符合条件，callback注入错误信息
  // if (/^1[3-9]\d{9}$/.test(value)) {
  //     callback()
  // } else {
  //     callback(new Error('必须为正确的手机号'))
  // }
  callback();
};
let rules: FormRules<typeof loginForm> = reactive({
  username: [
    {
      required: true,
      trigger: "blur",
    },
    {
      validator: validatorUsername,
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 15,
      message: "密码长度至少6位",
      trigger: "change",
    },
  ],
});
//自定义验证规则
let loading = ref<boolean>(false);
let userLogin = useUserStore().userLogin;
//登录按钮方法
//获取路由
let $router = useRouter();
const login = async () => {
  await loginForms.value.validate();
  loading.value = true;
  try {
    await userLogin(loginForm);
    ElNotification({
      type: "success",
      message: "登陆成功",
    });
    $router.push("/");
  } catch (error) {
    ElMessage({
      type: "error",
      message: "登录失败",
    });
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login-form {
    width: 80%;
    position: relative;
    top: 30vh;
    background-color: #2d58c0;

    // background-image: url("/src/assets/images/login_form.png");
    // background-size: cover;
    padding: 40px;

    h1 {
      color: #fff;
      font-size: 40px;
    }

    h2 {
      margin: 20px 0;
      font-size: 20px;
      color: #fff;
    }

    .login-button {
      width: 100%;
    }
  }
}
</style>
