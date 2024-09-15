import { StoreOptions } from "vuex";

export default {
  namespaced: true,

  // state 用来存储全局状态信息
  state: () => ({
    loginUser: {
      userName: "当前未登录",
      role: "visitor",
    },
  }),

  // 便捷获取对象的一个方法
  getters: {},

  // 对全局对象进行增删改查的一个方法(发送网络请求)
  actions: {
    // TODO 远程调用 请求获取登录信息
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", payload);
    },
  },

  // 执行异步操作，请求响应，触发mutation的更改
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
