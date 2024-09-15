<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import BasicLayout from './layouts/BasicLayout.vue';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  // 是否仅管理员可见
  if (to.meta?.access === 'canAdmin') {
    if (store.state.user.loginUser?.role !== 'canAdmin') {
      next('/noauth');
      return;
    }
  }
  next();
});
</script>