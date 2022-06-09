import { http, axios } from "../utils/http";
import { loadEnv } from "@build/index";
import qs from "qs";

const { VITE_PROXY_DOMAIN_AGGRESCAN } = loadEnv();

type Data = object | string;

export const getSeq = (data?: Data) => {
  return http.request("post", "/get_seq", {
    // headers: {
    //   "content-type": "application/x-www-form-urlencoded"
    // },
    // data: qs.stringify(data),
    data,
    baseURL: VITE_PROXY_DOMAIN_AGGRESCAN
  });
};

export const analysisWithoutMutate = (data?: Data) => {
  return http.request<{
    config: object;
    table: object;
  }>("post", "/origin", {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(data),
    baseURL: VITE_PROXY_DOMAIN_AGGRESCAN
  });
};

export const analysisManualMutate = (data?: Data) => {
  return http.request("post", "/mutate", {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(data),
    baseURL: VITE_PROXY_DOMAIN_AGGRESCAN
  });
};

export const analysisAutoMutate = (data?: Data) => {
  return http.request("post", "/auto_mutation", {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(data),
    baseURL: VITE_PROXY_DOMAIN_AGGRESCAN
  });
};

export const requestForward = (data?: Data) => {
  return http.request("post", "/request_forward", {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(data),
    baseURL: VITE_PROXY_DOMAIN_AGGRESCAN
  });
};

export const getAnalysisResult = (data?: Data) => {
  return http.request(
    "post",
    "/get_seq",
    {
      // headers: {
      //   "content-type": "application/x-www-form-urlencoded"
      // },
      // data: qs.stringify(data),
      data,
      baseURL: VITE_PROXY_DOMAIN_AGGRESCAN
    },
    {
      useNProgress: false
    }
  );
  // const { emit, on, off, remove } = http.poll({
  //   url: "/get_seq",
  //   method: "POST",
  //   baseURL: VITE_PROXY_DOMAIN_AGGRESCAN,
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded"
  //   },
  //   data: qs.stringify(data)
  // });
  // emit();
};

export const getResidues = () => {
  const res = [
    { letter: "A", name: "ALA", fullName: "alanine" },
    { letter: "R", name: "ARG", fullName: "arginine" },
    { letter: "N", name: "ASN", fullName: "asparagine" },
    { letter: "D", name: "ASP", fullName: "aspartic acid" },
    { letter: "C", name: "CYS", fullName: "cysteine" },
    { letter: "Q", name: "GLN", fullName: "glutamine" },
    { letter: "E", name: "GLU", fullName: "glutamic acid" },
    { letter: "G", name: "GLY", fullName: "glycine" },
    { letter: "H", name: "HIS", fullName: "histidine" },
    { letter: "I", name: "ILE", fullName: "isoleucine" },
    { letter: "L", name: "LEU", fullName: "leucine" },
    { letter: "K", name: "LYS", fullName: "lysine" },
    { letter: "M", name: "MET", fullName: "methionine" },
    { letter: "F", name: "PHE", fullName: "phenylalanine" },
    { letter: "P", name: "PRO", fullName: "proline" },
    { letter: "S", name: "SER", fullName: "serine" },
    { letter: "T", name: "THR", fullName: "threonine" },
    { letter: "W", name: "TRP", fullName: "tryptophan" },
    { letter: "Y", name: "TYR", fullName: "tyrosine" },
    { letter: "V", name: "VAL", fullName: "valine" }
  ];
  return Promise.resolve(res);
};
