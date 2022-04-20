<script lang="ts">
export default {
  name: "userinfo"
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
import { VxeGridProps } from "vxe-table";
import { http } from "/@/utils/http";

const gridOptions = reactive({
  border: true,
  resizable: true,
  keepSource: true,
  height: 578,
  printConfig: {},
  importConfig: {},
  exportConfig: {},
  pagerConfig: {
    perfect: true,
    pageSize: 15
  },
  editConfig: {
    trigger: "click",
    mode: "row",
    showStatus: true
  },
  formConfig: {
    items: [
      {
        field: "userFormMap.username",
        title: "User Name",
        span: 5,
        itemRender: { name: "$input" }
      },
      {
        field: "userFormMap.accountname",
        title: "Login Account",
        span: 5,
        itemRender: { name: "$input" }
      },
      {
        field: "userFormMap.bu_code",
        title: "Bu",
        span: 5,
        itemRender: { name: "$select", options: [] }
      },
      {
        field: "userFormMap.institution",
        title: "Bu Name",
        span: 5,
        itemRender: { name: "$input" }
      },
      {
        span: 4,
        align: "center",
        collapseNode: false,
        itemRender: {
          name: "$buttons",
          children: [
            {
              props: {
                type: "submit",
                content: "Query",
                status: "primary"
              }
            },
            { props: { type: "reset", content: "Reset" } }
          ]
        }
      }
    ]
  },
  toolbarConfig: {},
  proxyConfig: {
    form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
    props: {
      result: "result",
      total: "page.total"
    },
    ajax: {
      // 接收 Promise
      query: ({ page, form }) => {
        return new Promise(resolve => {
          const queryParams: any = Object.assign({}, form);

          console.log(queryParams);
          queryParams.page = page.currentPage;
          queryParams.limit = page.currentPage;
          console.log(queryParams);
          http
            .get("/api/system/user/findByPage", { params: queryParams })
            .then(function (response: any): void {
              console.log(response);
              var list = response.data;
              resolve({
                page: {
                  total: response.total
                },
                result: list
              });
            });
        });
      },
      // body 对象： { removeRecords }
      delete: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({});
          }, 100);
        });
      },
      // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
      save: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({});
          }, 100);
        });
      }
    }
  },
  columns: [
    { type: "checkbox", width: 50 },
    { field: "id", title: "ID", width: 60 },
    { field: "phone", title: "Login account" },
    { field: "userName", title: "User Name" },
    { field: "accountName", title: "Platform account" },
    { field: "email", title: "Email" }
  ]
} as VxeGridProps);

http
  .get("/api/system/dic/getDicByType?type=factory")
  .then(function (response: any) {
    console.log(response);
    const { formConfig } = gridOptions;
    if (formConfig && formConfig.items) {
      const buItem = formConfig.items[2];
      if (buItem && buItem.itemRender) {
        var buList = [];
        for (let i = 0; i < response.length; i++) {
          const element = response[i];
          var bu = {
            label: element.dicTxt,
            value: element.dicId
          };
          buList.push(bu);
        }
        buItem.itemRender.options = buList;
      }
    }
  });
</script>
<template>
  <vxe-grid v-bind="gridOptions"></vxe-grid>
</template>
