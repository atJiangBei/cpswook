import { routesData, roles } from "./data";

export const getAllRoutes = () => {
  return Promise.resolve(routesData);
};

export const getRoles = () => {
  return Promise.resolve(roles);
};
