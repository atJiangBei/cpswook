import qs from "qs";

export interface Options {
  url: string;
  query?: object;
}

const open = (options: Options) => {
  const { query, url } = options;
  const queryStr = qs.stringify(query);
  const fullUrl = url + (queryStr ? "?" + queryStr : "");
  return window.open(fullUrl);
};

const href = {
  open
};

export { href };
