<template>
  <a-form label-align="left"
          style="max-width: 480px; margin: 0 auto"
          auto-label-width
          :model="form"
          @submit="handleSubmit">
    <h2 style="margin-top: 128px; margin-bottom: 16px">用户登录</h2>
    <a-form-item
        field="userAccount"
        tooltip="Please enter username"
        label="学号">
      <a-input
          v-model="form.userAccount"
          placeholder="请输入学号"
      />
    </a-form-item>

    <a-form-item field="userPassword" label="密码">
      <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {UserControllerService , UserLoginRequest} from "../../../generated";
import message from "@arco-design/web-vue/es/message"
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

/**
 * 表单信息
 */
const form = reactive({
  userAccount: '',
  userPassword: '',
} as UserLoginRequest);

// 提交表单方法
const handleSubmit = async () => {
  // 拿到后端的响应
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    // 登录成功之后再调用获取登录用户的属性
    await store.dispatch("user/getLoginUser");
    // 登录成功暂时跳转到主页
    router.push({
      path: "/",
      // 替换浏览器历史记录的堆栈信息，再点击回退就不会返回到登录页了
      replace: true,
    })
  } else {
    message.error("登录失败：" + res.message );
  }
}
</script>

<style scoped>

</style>