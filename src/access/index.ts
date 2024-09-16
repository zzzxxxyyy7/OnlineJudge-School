import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

/**
 * 跳转下一个页面之前，先判断是否有登录过，要先执行自动登录
 */
router.beforeEach(async (to, from, next) => {
    const loginUser = store.state.user.loginUser;

    // 如果之前没登录过，那么自动登录
    // if (!loginUser || !loginUser.userRole) {
    //     // 等用户成功登录之后，再执行后续的代码
    //     await store.dispatch("user/getLoginUser");
    // }

    const needAccess = to.meta?.access as string ?? ACCESS_ENUM.NOT_LOGIN;

    // 当前访问页面必须要登录
    if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
        // 如果没登陆
        if (!loginUser || !loginUser.userRole) {
            // 重定向到登录页面
            next(`/user/login/redirect=${to.fullPath}`);
            return;
        }

        if (!checkAccess(loginUser , needAccess)) {
            next("/noauth")
            return;
        }
    }
    next();
});