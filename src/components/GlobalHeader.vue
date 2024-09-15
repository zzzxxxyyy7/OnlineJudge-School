<template>
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.png">
            <div class="title">莆田学院机电与信息工程学院在线代码评测平台</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "用户未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

// 默认选择主页
const selectedKeys = ref(["/"]);

// 路由跳转后，同步更新菜单栏的高亮状态
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
})

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  })
}

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "Rhss",
    role: "canAdmin",
  });
}, 3000);

</script>


<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
  font-size: large;
}

.logo {
  height: 48px;
}
</style>
