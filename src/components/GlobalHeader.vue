<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.png">
            <div class="title">莆田学院机电与信息工程学院在线代码评测平台</div>
          </div>
        </a-menu-item>
        <!-- 有hideInMenu则不展示 -->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
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
import {computed, ref} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const store = useStore();

// 可以展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    // 这个页面本事就不展示，对所有用户隐藏
    if (item.meta?.hideInMenu) {
      return false;
    }
    // TODO 针对特定用户隐藏的页面
    if (!checkAccess(store.state.user.loginUser , item?.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

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
    userRole: ACCESS_ENUM.ADMIN,
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
