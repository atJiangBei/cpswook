import { http } from "/@/utils/http";

export const getRoleList = (
  params: object = {
    is_del: 0,
    limit: 10,
    page: 1
  }
) => {
  return http.request("get", "/system/role/findByPage", {
    params
  });
};
