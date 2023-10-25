import { ElMessage, ElMessageBox } from "element-plus";
import { confirmType } from "./interface/index";
/**
 * @description 操作单条数据信息 (二次确认【删除、禁用、启用、重置密码】)
 * @param {Function} api 操作数据接口的api方法 (必传)
 * @param {Object} params 携带的操作数据参数 {id,params} (必传)
 * @param {String} message 提示信息 (必传)
 * @param {String} confirmType icon类型 (不必传,默认为 warning)
 * @returns {Promise}
 */
export const useHandleData = (
  api: (params: any) => Promise<any>,
  params: any = {},
  message: string,
  confirmType: confirmType = "warning"
) => {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(`是否${message}?`, "温馨提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: confirmType,
      draggable: true,
      beforeClose: async (action, instance, done) => {
        if (action === "confirm") {
          // 开启按钮加载
          instance.confirmButtonLoading = true;
          try {
            let res = await api(params);
            if (res) {
              ElMessage({
                type: "success",
                message: `${message}成功!`,
              });
              resolve(res);
            }
          } catch (error) {
            ElMessage({
              type: "warning",
              message: `${message}失败!`,
            });
            reject(error);
          }
          done();
        } else {
          reject("取消");
          done();
        }
      },
    });
  });
};

// .then(async () => {
//   const res = await api(params);
//   if (!res) return reject(false);
//   ElMessage({
//     type: "success",
//     message: `${message}成功!`,
//   });
//   resolve(res);
// })
// .catch((error) => {
//   console.log(error);
//   ElMessage({
//     type: "warning",
//     message: `${message}失败!`,
//   });
// });
