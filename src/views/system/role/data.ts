const routesData = [
  {
    label: "系统管理",
    path: "/system",
    children: [
      {
        label: "用户管理",
        path: "/system/userinfo/index"
      },
      {
        label: "角色权限",
        path: "/system/role/index"
      }
    ]
  },
  {
    label: "组件",
    path: "/finetrue"
  }
];

const roles = [
  {
    key: "admin",
    name: "admin",
    description: "最大权限管理员"
  },
  {
    key: "test",
    name: "test",
    description: "测试人员"
  }
];

export { routesData, roles };
