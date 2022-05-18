const routesData = [
  {
    title: "menus.systemManagement",
    path: "/system",
    name: "system",
    type: 0,
    showLink: true,
    i18n: true,
    children: [
      {
        title: "menus.permissionRole",
        path: "/system/role/index",
        name: "system-role",
        type: 1,
        showLink: true,
        i18n: true,
        children: [
          {
            type: 2,
            title: "buttons.hsadd",
            path: "/system/role/index/edit",
            buttonType: "add"
          }
        ]
      },
      {
        title: "menus.menusManagement",
        path: "/system/menus/index",
        name: "system-menus",
        type: 1,
        showLink: true,
        i18n: true
      },
      {
        title: "menus.templateManagement",
        path: "/system/template/index",
        name: "system-template",
        type: 1,
        showLink: true,
        i18n: true
      },
      {
        title: "menus.templateManagement",
        path: "/system/reset/index",
        name: "system-reset",
        type: 1,
        showLink: true,
        i18n: true
      },
      {
        title: "menus.templateManagement",
        path: "/system/table/index",
        name: "system-table",
        type: 1,
        showLink: true,
        i18n: true
      }
    ]
  },
  {
    name: "Nested",
    path: "/nested",
    title: "menus.hsmenus",
    showLink: true,
    i18n: true,
    type: 0,
    children: [
      {
        name: "Menu1",
        path: "/nested/menu1",
        title: "menus.hsmenu1",
        showLink: true,
        i18n: true,
        type: 0,
        children: [
          {
            name: "Menu1-1",
            path: "/nested/menu1/menu1-1/index",
            title: "menus.hsmenu1-1",
            showLink: true,
            i18n: true,
            type: 1
          },
          {
            name: "Menu1-2",
            path: "/nested/menu1/menu1-2",
            title: "menus.hsmenu1-2",
            showLink: true,
            i18n: true,
            type: 0,
            children: [
              {
                name: "Menu1-2-1",
                path: "/nested/menu1/menu1-2/menu1-2-1/index",
                title: "menus.hsmenu1-2-1",
                showLink: true,
                i18n: true,
                type: 1
              },
              {
                name: "Menu1-2-2",
                path: "/nested/menu1/menu1-2/menu1-2-2/index",
                title: "menus.hsmenu1-2-2",
                showLink: true,
                i18n: true,
                type: 1
              }
            ]
          },
          {
            name: "Menu1-3",
            path: "/nested/menu1/menu1-3/index",
            title: "menus.hsmenu1-3",
            showLink: true,
            i18n: true,
            type: 1
          }
        ]
      },
      {
        name: "Menu2",
        path: "/nested/menu2/index",
        title: "menus.hsmenu2",
        showLink: true,
        i18n: true,
        type: 1
      }
    ]
  }
];

export const getSyncRoutes = (data: { name: string }) => {
  return Promise.resolve({
    info: routesData
  });
};
