import Cookies from "js-cookie";
import { useUserStoreHook } from "/@/store/modules/user";
// import { LOGIN_API } from "../api/user";

const TokenKey = "authorized-token";

export type ParamsMapType = {
  expires: number;
  accessToken: string;
};

// token白名单，不需要带token即可访问
// const TOKEN_WHITE_LIST = [LOGIN_API];
// export { TOKEN_WHITE_LIST };

// 获取token对象
export function getToken() {
  // 此处与TokenKey相同，此写法解决初始化时Cookies中不存在TokenKey报错
  return Cookies.get("authorized-token");
}

// 获取token串
export function getTokenStr(): string {
  const tokenObjStr = getToken();
  if (!tokenObjStr) return "";
  const tokenObj: ParamsMapType = JSON.parse(tokenObjStr);
  return tokenObj?.accessToken;
}

// 设置token以及过期时间（cookies、sessionStorage各一份）
// 后端需要将用户信息和token以及过期时间都返回给前端，过期时间主要用于刷新token
export function setToken(data) {
  const { access_token: accessToken } = data;
  let expires = data.expires_in;
  expires *= 1000;
  // 提取关键信息进行存储
  const paramsMap: ParamsMapType = {
    // name,
    expires: Date.now() + parseInt(expires),
    accessToken
  };
  const dataString = JSON.stringify(paramsMap);
  useUserStoreHook().SET_TOKEN(accessToken);
  // useUserStoreHook().SET_NAME(name);
  expires > 0
    ? Cookies.set(TokenKey, dataString, {
        expires: expires / 86400000
      })
    : Cookies.set(TokenKey, dataString);
  sessionStorage.setItem(TokenKey, dataString);
}

// 删除token
export function removeToken() {
  Cookies.remove(TokenKey);
  sessionStorage.removeItem(TokenKey);
}

export function isTokenExpired(expires: number) {
  const now = new Date().getTime();
  return parseInt(expires) - now <= 0;
}
