import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const bioRouter = {
  path: "/bio",
  name: "bio",
  component: Layout,
  redirect: "/bio/sequence",
  meta: {
    icon: "Position",
    title: $t("menus.bioComponent"),
    showLink: true,
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: "/bio/sequence",
      name: "sequence",
      component: () => import("/@/views/bio/sequence.vue"),
      meta: {
        title: $t("menus.sequence"),
        i18n: true,
        showLink: true
      }
    },
    {
      path: "/bio/protein",
      name: "protein",
      component: () => import("/@/views/bio/protein.vue"),
      meta: {
        title: $t("menus.protein"),
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default bioRouter;
