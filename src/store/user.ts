import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import {UserControllerService} from "../../generated";

export default {
  namespaced: true,

  // state 用来存储全局状态信息
  state: () => ({
    loginUser: {
      userName: "当前未登录",
    },
  }),

  // 便捷获取对象的一个方法
  getters: {},

  // 对全局对象进行增删改查的一个方法(发送网络请求)
  actions: {
    // 远程调用 请求获取登录信息
    async getLoginUser({ commit, state }, payload) {
      const resp = await UserControllerService.getLoginUserUsingGet();
      console.log(resp)
      if (resp.code === 0) {
        commit("updateUser", resp.data);
      } else {
        commit("updateUser", {...state.loginUser, userRole: ACCESS_ENUM.NOT_LOGIN});
      }
    },
  },

  // 执行异步操作，请求响应，触发mutation的更改
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
