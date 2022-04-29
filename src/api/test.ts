import { http } from "/@/utils/http";

export const getTestData = (params: object) => {
  return http.request("get", "/system/template/getTemplateByPage", {
    params
  });
};
