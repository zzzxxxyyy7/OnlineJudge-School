<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh;">
      <a-layout-header class="header">
        <a-space>
          <img class="logo" src="../assets/oj-logo.png" alt="暂时无法显示">
          <div class="title" style="font-size: x-large">莆田学院机电与信息工程学院在线代码评测平台</div>
        </a-space>
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="footer">
        莆田学院机电与信息工程学院在线代码评测平台
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#userLayout {
  text-align: center;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  margin-top: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
