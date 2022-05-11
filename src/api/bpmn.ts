import { http } from "../utils/http";

export const getProcessList = (params?: object) => {
  return http.request("post", "/system//bpmprocess/findBpmProcessBypage", {
    params
  });
};
