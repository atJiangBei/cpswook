import path from "path";
export function generateTree(routes, basePath = "/", checkedKeys) {
  const res = [];

  for (const route of routes) {
    const routePath = path.resolve(basePath, route.path);
    if (route.children) {
      route.children = generateTree(route.children, routePath, checkedKeys);
    }

    if (
      checkedKeys.includes(routePath) ||
      (route.children && route.children.length >= 1)
    ) {
      res.push(route);
    }
  }
  return res;
}

export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
