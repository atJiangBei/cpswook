import { ref } from "vue";
import { getAllRoutes, getRoles } from "./api.role";
import { getSyncRoutes } from "/@/api/global";

export function useRoles(initValue = [], load: (value: any[]) => void) {
  const roles = ref(initValue);
  getRoles().then(list => {
    roles.value = list;
    load?.(list);
  });
  const setRoles = value => {
    roles.value = value;
  };
  return [roles, setRoles];
}

export function useRoutes(initValue = [], load: (value: any[]) => void) {
  const routes = ref(initValue);
  // getAllRoutes().then(data => {
  //   routes.value = data;
  //   load?.(data);
  // });
  getSyncRoutes().then(({ info: data }) => {
    data = JSON.parse(JSON.stringify(data));
    routes.value = data;
    load?.(data);
  });
  const setRoutes = value => {
    routes.value = value;
  };

  return [routes, setRoutes];
}
