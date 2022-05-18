<template>
  <div>
    <vxe-grid
      border
      ref="xGrid"
      height="600"
      :column-config="{ resizable: true }"
      :export-config="{}"
      :toolbar-config="tableToolbar"
      :proxy-config="tableProxy"
      :columns="tableColumn"
      :form-config="tableForm"
      v-on="gridEvents"
    >
      <template #btns>
        <vxe-button type="submit" content="查询"></vxe-button>
        <vxe-button type="reset" content="重置"></vxe-button>
      </template>
      <template #operate="{ row }">
        <vxe-button
          type="reset"
          icon="fa fa-eye"
          title="查看"
          circle
        ></vxe-button>
        <vxe-button
          type="submit"
          icon="fa fa-gear"
          title="设置"
          circle
        ></vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, h, Fragment } from "vue";
import { VxeGridInstance } from "vxe-table";
import VXETable, { Button, Input } from "vxe-table";
import { ElButton } from "element-plus";

// 创建一个简单的表单-输入框渲染
VXETable.renderer.add("FormItemInput", {
  renderItemContent(renderOpts, params) {
    const { data, property } = params;
    console.log(data);
    return [
      h(
        {
          // onChange: value => {
          //   data[property] = value.value;
          // }
          props: ["modelValue"],
          emits: ["update:modelValue"],
          render() {
            return h(Input, {
              modelValue: data[property],
              "onUpdate:modelValue": value => {
                this.$emit("update:modelValue", value);
              }
            });
          }
        },
        {
          VModel: data[property]
        }
      )
    ];
  }
});

// 创建一个简单的工具栏-左侧按钮渲染
VXETable.renderer.add("ToolbarButtonDownload", {
  renderToolbarButton(renderOpts, params) {
    const { events = {} } = renderOpts;
    const { button } = params;

    return [
      h(
        Button,
        {
          circle: false,
          icon: "fa fa-cloud-download",
          onClick: () => {
            events.click(button);
          }
        },
        {
          default: () => "导出"
        }
      )
    ];
  }
});
VXETable.renderer.add("ToolbarToolPrint", {
  renderToolbarTool(renderOpts, params) {
    const { $table } = params;
    return [
      h(Button, {
        circle: false,
        icon: "fa fa-print",
        onClick: () => {
          $table.print();
        }
      })
    ];
  }
});
export default defineComponent({
  setup() {
    const xGrid = ref({} as VxeGridInstance);

    const findList = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          const rest = [
            {
              id: 10001,
              name: "Test1",
              role: "Develop",
              sex: "Man",
              age: 28,
              address: "Shenzhen"
            },
            {
              id: 10002,
              name: "Test2",
              role: "Test",
              sex: "Women",
              age: 22,
              address: "Guangzhou"
            },
            {
              id: 10003,
              name: "Test3",
              role: "PM",
              sex: "Man",
              age: 32,
              address: "Shanghai"
            },
            {
              id: 10004,
              name: "Test4",
              role: "Designer",
              sex: "Women",
              age: 23,
              address: "Shenzhen"
            },
            {
              id: 10005,
              name: "Test5",
              role: "Develop",
              sex: "Women",
              age: 30,
              address: "Shanghai"
            },
            {
              id: 10006,
              name: "Test6",
              role: "Designer",
              sex: "Women",
              age: 21,
              address: "Shenzhen"
            },
            {
              id: 10007,
              name: "Test7",
              role: "Test",
              sex: "Man",
              age: 29,
              address: "Shenzhen"
            },
            {
              id: 10008,
              name: "Test8",
              role: "Develop",
              sex: "Man",
              age: 35,
              address: "Shenzhen"
            }
          ];
          resolve(rest);
        }, 200);
      });
    };

    const btnDownEvent = () => {
      const $grid = xGrid.value;
      $grid.exportData();
    };

    const demo1 = reactive({
      tableColumn: [
        { type: "seq", width: 50 },
        { field: "name", title: "Name" },
        { field: "age", title: "Age" },
        { field: "sex", title: "Sex" },
        { field: "role", title: "Role" },
        { title: "操作", width: 200, slots: { default: "operate" } }
      ],
      tableForm: {
        items: [
          {
            field: "name",
            title: "名称",
            itemRender: {
              name: "FormItemInput",
              props: { clearable: true, placeholder: "请输入名称" }
            }
          },
          {
            field: "age",
            title: "年龄",
            itemRender: {
              name: "FormItemInput",
              props: {
                type: "number",
                clearable: true,
                placeholder: "请输入年龄!"
              }
            }
          },
          { slots: { default: "btns" } }
        ]
      },
      tableToolbar: {
        import: true,
        export: true,
        custom: true,
        print: true,
        refresh: true,
        buttons: [
          { name: "刷新", code: "reload", icon: "fa fa-refresh" },
          { name: "自定义1", code: "custom1", icon: "fa fa-bell" },
          {
            buttonRender: {
              name: "ToolbarButtonDownload",
              events: { click: btnDownEvent }
            }
          }
        ],
        tools: [
          { name: "自定义2", code: "custom2", icon: "fa fa-bug" },
          { toolRender: { name: "ToolbarToolPrint" } }
        ]
      },
      tableProxy: {
        form: true,
        ajax: {
          query: () => findList()
        }
      }
    });
    const gridEvents = {
      formSubmit() {
        findList();
      }
    };
    return {
      ...demo1,
      xGrid,
      gridEvents
    };
  }
});
</script>
