import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // 导入路由文件，并借助 Vue-Router 渲染
  routes,
});

export default router;
