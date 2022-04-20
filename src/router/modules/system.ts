import Layout from "/@/layout/index.vue";
const system = {
  path: "/system",
  name: "/system",
  component: Layout,
  meta: {
    showLink: true,
    i18n: true,
    title: "menus.hssysManagement"
  },
  children: [
    {
      path: "/system/role/index",
      component: () => import("/@/views/system/role/index.vue"),
      name: "system-role",
      meta: {
        showLink: true,
        i18n: true,
        keepAlive: true,
        title: "menus.hsPermissionRole"
      }
    },
    {
      path: "/system/menus/index",
      component: () => import("/@/views/system/menus/index.vue"),
      name: "/system/menus/index",
      meta: {
        showLink: true,
        i18n: true,
        keepAlive: true,
        title: "menus.hsPermissionMenus"
      }
    }
  ]
};

export default system;
