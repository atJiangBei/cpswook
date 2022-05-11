import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const nebulaRouter = {
  path: "/nebula",
  name: "nebula",
  component: Layout,
  redirect: "/nebula/test",
  meta: {
    icon: "Position",
    title: $t("menus.nebula"),
    showLink: true,
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: "/nebula/test",
      name: "test",
      component: () => import("/@/views/nebula/test.vue"),
      meta: {
        title: $t("menus.test"),
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default nebulaRouter;
