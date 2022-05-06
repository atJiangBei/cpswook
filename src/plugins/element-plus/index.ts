import { App, Component } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import {
//   ElTag,
//   ElAffix,
//   ElSkeleton,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElScrollbar,
//   ElSubMenu,
//   ElButton,
//   ElCol,
//   ElRow,
//   ElSpace,
//   ElDivider,
//   ElCard,
//   ElDropdown,
//   ElDialog,
//   ElMenu,
//   ElMenuItem,
//   ElDropdownItem,
//   ElDropdownMenu,
//   ElIcon,
//   ElInput,
//   ElForm,
//   ElFormItem,
//   ElPopover,
//   ElPopper,
//   ElTooltip,
//   ElDrawer,
//   ElPagination,
//   ElAlert,
//   ElRadio,
//   ElRadioButton,
//   ElRadioGroup,
//   ElDescriptions,
//   ElDescriptionsItem,
//   ElBacktop,
//   ElSwitch,
//   ElBadge,
//   ElTabs,
//   ElTabPane,
//   ElAvatar,
//   ElEmpty,
//   ElCollapse,
//   ElCollapseItem,
//   ElTreeV2,
//   // 指令
//   ElLoading,
//   ElInfiniteScroll,
//   ElTable,
//   ElTableColumn,
//   ElSelect,
//   ElOption,
//   ElTree,
//   ElDatePicker
// } from "element-plus";

// // Directives
// const plugins = [ElLoading, ElInfiniteScroll];

// const components = [
//   ElTag,
//   ElAffix,
//   ElSkeleton,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElScrollbar,
//   ElSubMenu,
//   ElButton,
//   ElCol,
//   ElRow,
//   ElSpace,
//   ElDivider,
//   ElCard,
//   ElDropdown,
//   ElDialog,
//   ElMenu,
//   ElMenuItem,
//   ElDropdownItem,
//   ElDropdownMenu,
//   ElIcon,
//   ElInput,
//   ElForm,
//   ElFormItem,
//   ElPopover,
//   ElPopper,
//   ElTooltip,
//   ElDrawer,
//   ElPagination,
//   ElAlert,
//   ElRadio,
//   ElRadioButton,
//   ElRadioGroup,
//   ElDescriptions,
//   ElDescriptionsItem,
//   ElBacktop,
//   ElSwitch,
//   ElBadge,
//   ElTabs,
//   ElTabPane,
//   ElAvatar,
//   ElEmpty,
//   ElCollapse,
//   ElCollapseItem,
//   ElTreeV2,
//   ElTable,
//   ElTableColumn,
//   ElSelect,
//   ElOption,
//   ElTree,
//   ElDatePicker
// ];

// https://element-plus.org/zh-CN/component/icon.html
//import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import {
  Check,
  Menu,
  HomeFilled,
  SetUp,
  Edit,
  Setting,
  Lollipop,
  Link,
  Position,
  Histogram,
  RefreshRight,
  ArrowDown,
  Close,
  CloseBold,
  Bell,
  Guide,
  User,
  Iphone,
  Location,
  Tickets,
  OfficeBuilding,
  Notebook,
  Plus,
  Delete,
  Warning
} from "@element-plus/icons-vue";

// Icon
export const iconComponents = [
  Check,
  Menu,
  HomeFilled,
  SetUp,
  Edit,
  Setting,
  Lollipop,
  Link,
  Position,
  Histogram,
  RefreshRight,
  ArrowDown,
  Close,
  CloseBold,
  Bell,
  Guide,
  User,
  Iphone,
  Location,
  Tickets,
  OfficeBuilding,
  Notebook,
  Plus,
  Delete,
  Warning
];

export function useElementPlus(app: App) {
  // 注册组件
  // components.forEach((component: Component) => {
  //   app.component(component.name, component);
  // });
  // 注册指令
  // plugins.forEach(plugin => {
  //   app.use(plugin);
  // });
  // 注册图标
  app.use(ElementPlus);
  iconComponents.forEach((component: Component) => {
    app.component(component.name, component);
  });
  // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //   app.component(key, component);
  // }
}
