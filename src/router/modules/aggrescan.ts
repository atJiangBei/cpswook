import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const aggrescanRouter = {
  path: "/aggrescan",
  name: "aggrescan",
  component: Layout,
  redirect: "/aggrescan/analysis",
  meta: {
    title: $t("menus.aggrescan"),
    showLink: true,
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: "/aggrescan/analysis",
      name: "aggrescanAnalysis",
      component: () => import("/@/views/aggrescan/analysis.vue"),
      meta: {
        title: $t("menus.aggrescanAnalysis"),
        i18n: true,
        showLink: true
      }
    },
    {
      path: "/aggrescan/result",
      name: "aggrescanResult",
      component: () => import("/@/views/aggrescan/result.vue"),
      meta: {
        title: $t("menus.aggrescanResult"),
        i18n: true,
        showLink: false
      }
    },
    {
      path: "/aggrescan/mutate",
      name: "aggrescanMutate",
      component: () => import("/@/views/aggrescan/mutate.vue"),
      meta: {
        title: $t("menus.aggrescanMutate"),
        i18n: true,
        showLink: false
      }
    },
    {
      path: "/aggrescan/auto-mutate",
      name: "aggrescanAutoMutate",
      component: () => import("/@/views/aggrescan/auto-mutate.vue"),
      meta: {
        title: $t("menus.aggrescanAutoMutate"),
        i18n: true,
        showLink: false
      }
    }
  ]
};

export default aggrescanRouter;
