import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NoAuthView from "@/views/NoAuthView.vue";

// 提取通用路由文件到专门配置并且导出，直接作为 Header 参数传入动态渲染 Header
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "题库",
    component: HomeView,
  },
  {
    path: "/about",
    name: "分享",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/admin",
    name: "管理后台",
    component: AdminView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/noauth",
    name: "权限不足",
    component: NoAuthView,
  },
  {
    path: "/notfound",
    name: "无法访问",
    component: NotFoundView,
  },
];
