import { $t } from "/@/plugins/i18n";
import Layout from "/@/layout/index.vue";

const bpmnRouter = {
  path: "/bpmn",
  name: "bpmn",
  component: Layout,
  redirect: "/bpmn/list",
  meta: {
    title: $t("menus.bpmn"),
    showLink: true,
    i18n: true,
    rank: 7
  },
  children: [
    {
      path: "/bpmn/list",
      name: "bpmnList",
      component: () => import("/@/views/bpmn/list.vue"),
      meta: {
        title: $t("menus.bpmnList"),
        i18n: true,
        showLink: true
      }
    }
  ]
};

export default bpmnRouter;
