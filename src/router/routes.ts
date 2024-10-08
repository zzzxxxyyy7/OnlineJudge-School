import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import accessEnum from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";

// 提取通用路由文件到专门配置并且导出，直接作为 Header 参数传入动态渲染 Header
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户相关页面",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ]
  },
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
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/noauth",
    name: "权限不足",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    }
  },
  {
    path: "/notfound",
    name: "无法访问",
    component: NotFoundView,
    meta: {
      hideInMenu: true,
    }
  },
];
