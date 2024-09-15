import ACCESS_ENUM from "@/access/accessEnum";
import AccessEnum from "@/access/accessEnum";
import accessEnum from "@/access/accessEnum";

/**
 * 权限访问统一控制方法
 */
const checkAccess = (loginUser: any , needAccess = AccessEnum.NOT_LOGIN) => {
    // 获取当前登录用户有什么权限，默认未登录
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
    if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
        return true;
    }
    // 如果需要登录才能访问
    if (needAccess === accessEnum.USER) {
        if (loginUserAccess !== accessEnum.NOT_LOGIN) {
            return false;
        }
    }
    // 如果管理员才能访问
    if (needAccess === accessEnum.ADMIN) {
        // 如果不是管理员，就表示无权限
        if (loginUserAccess !== accessEnum.ADMIN) {
            return false;
        }
    }
    return true;
};

export default checkAccess;