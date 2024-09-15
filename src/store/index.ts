import { createStore } from "vuex";
import user from "./user";

export default createStore({
  mutations: {},
  actions: {},
  modules: {
    // 引入 user.ts 定义的状态管理
    user,
  },
});
