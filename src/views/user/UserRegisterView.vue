<template>
  <a-form label-align="left"
          style="max-width: 480px; margin: 0 auto"
          auto-label-width
          :model="form"
          @submit="handleSubmit">
    <h2 style="margin-top: 128px; margin-bottom: 16px">用户注册</h2>
    <a-form-item
        field="userAccount"
        tooltip="Please enter username"
        label="账号">
      <a-input
          v-model="form.userAccount"
          placeholder="请输入学号"
      />
    </a-form-item>

    <a-form-item field="userPassword" label="密码">
      <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
    </a-form-item>

    <a-form-item field="checkPassword" label="确认密码">
      <a-input-password v-model="form.checkPassword" placeholder="请确认密码" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" style="width: 100%">注册</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {UserControllerService, UserRegisterRequest} from "../../../generated";
import message from "@arco-design/web-vue/es/message"
import {useRouter} from "vue-router";

const router = useRouter();

/**
 * 表单信息
 */
const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
} as UserRegisterRequest);

// 提交表单方法
const handleSubmit = async () => {
  // 拿到后端的响应
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    message.info("注册成功，请重新登录");
    // 注册成功暂时跳转到登录页面
    router.push({
      path: "/user/login",
      // 替换浏览器历史记录的堆栈信息，再点击回退就不会返回到注册页了
      replace: true,
    })
  } else {
    message.error("注册失败：" + res.message );
  }
}
</script>

<style scoped>

</style>