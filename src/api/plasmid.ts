import { http } from "../utils/http";

export const getPlasmidList = (params?: object) => {
  return http.request("post", "/system/PlasmidLib/findPlasmidLiblist", {
    params
  });
};
