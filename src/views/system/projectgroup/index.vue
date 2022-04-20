<script lang="ts">
export default {
  name: "projectGroup"
};
</script>

<script setup lang="ts">
import { reactive, ref } from "vue";
import XEUtils from "xe-utils";
import { cloneDeep } from "lodash-es";
import { templateRef } from "@vueuse/core";
import { http } from "/@/utils/http";
import { VXETable, VxeTableInstance, VxeFormPropTypes } from "vxe-table";

const dictData = reactive({
  submitLoading: false,
  showEdit: false,
  selectRow: null,
  page: {
    loading1: false,
    tablePage1: {
      currentPage: 1,
      pageSize: 10,
      totalResult: 0
    }
  },
  groupCode: "",
  groupName: "",
  tableData: [],
  formData: {
    pj_group_code: "",
    pj_group_name: ""
  },
  formItems: [
    {
      field: "pj_group_code",
      title: "Group Code",
      span: 24,
      itemRender: {
        name: "$input"
      }
    },
    {
      field: "pj_group_name",
      title: "Group Name",
      span: 24,
      itemRender: {
        name: "$input"
      }
    },
    {
      align: "right",
      span: 24,
      itemRender: {
        name: "$buttons",
        children: [
          { props: { type: "submit", content: "提交", status: "primary" } },
          { props: { type: "reset", content: "重置" } }
        ]
      }
    }
  ] as VxeFormPropTypes.Items
});

let originData = cloneDeep(dictData.tableData);

const xTree = templateRef<HTMLElement | any>("xTree", null);

// 创建一个防防抖函数，调用频率间隔 100 毫秒
const searchEvent = XEUtils.debounce(
  function () {
    handleSearch();
  },
  100,
  { leading: false, trailing: true }
);
const handleSearch = () => {
  const groupCode = XEUtils.toValueString(dictData.groupCode).trim();
  const groupName = XEUtils.toValueString(dictData.groupName).trim();
  var params = {
    pjGroupCode: groupCode,
    pjGroupName: groupName,
    page: dictData.page.tablePage1.currentPage,
    limit: dictData.page.tablePage1.pageSize
  };
  http
    .get("/api/system/projectGroup/getProjectGroupList", { params: params })
    .then(function (response: any): void {
      console.log(response);
      dictData.tableData = response.rows;
      dictData.page.tablePage1.totalResult = response.rowCount;
    });
};

searchEvent();

function commonFn(value, disabled) {
  dictData.selectRow = value;
  dictData.showEdit = true;
}

// 新增
function onAdd() {
  commonFn(null, false);
}

const xTable = ref({} as VxeTableInstance);

const submitEvent = () => {
  dictData.submitLoading = true;
  var pj_group_code = dictData.formData.pj_group_code;
  var pj_group_name = dictData.formData.pj_group_name;
  var data = {
    pj_group_code: pj_group_code,
    pj_group_name: pj_group_name
  };
  http
    .post("/api/projectGroup/addProjectGroup", { data: data })
    .then(function (Response) {
      dictData.submitLoading = false;
      dictData.showEdit = false;
      VXETable.modal.message({ content: "新增成功", status: "success" });
      searchEvent();
    });
};

let drawer = ref(false);

function handlePageChange1({ currentPage, pageSize }) {
  dictData.page.tablePage1.currentPage = currentPage;
  dictData.page.tablePage1.pageSize = pageSize;
  searchEvent();
}

function handleClose() {
  drawer.value = false;
}
</script>

<template>
  <div>
    <!-- 工具栏 -->
    <vxe-toolbar>
      <template #buttons
        ><label>Group Code</label>
        <vxe-input v-model="dictData.groupCode"></vxe-input>
        <label>Group Name</label>
        <vxe-input v-model="dictData.groupName"></vxe-input>
        <vxe-button status="primary" @click="searchEvent">{{
          $t("buttons.hssearch")
        }}</vxe-button>
      </template>
      <template #tools>
        <vxe-button
          icon="fa fa-plus-square-o"
          status="primary"
          @click="onAdd"
          >{{ $t("buttons.hsadd") }}</vxe-button
        >
      </template>
    </vxe-toolbar>

    <!-- 列表 -->
    <vxe-table ref="xTree" border resizable :data="dictData.tableData">
      <vxe-column type="checkbox" width="60" align="center"></vxe-column>
      <vxe-table-column field="id" title="ID"></vxe-table-column>
      <vxe-table-column
        field="pj_group_code"
        title="Group Code"
      ></vxe-table-column>
      <vxe-table-column
        field="pj_group_name"
        title="Group Name"
      ></vxe-table-column>
    </vxe-table>
    <vxe-pager
      :loading="dictData.page.loading1"
      :current-page="dictData.page.tablePage1.currentPage"
      :page-size="dictData.page.tablePage1.pageSize"
      :total="dictData.page.tablePage1.totalResult"
      :layouts="[
        'PrevPage',
        'JumpNumber',
        'NextPage',
        'FullJump',
        'Sizes',
        'Total'
      ]"
      @page-change="handlePageChange1"
    >
    </vxe-pager>
    <!-- 修改、添加弹框 -->
    <vxe-modal
      resize
      width="450"
      v-model="dictData.showEdit"
      :title="dictData.selectRow ? '编辑' : '新增'"
      :loading="dictData.submitLoading"
    >
      <template #default>
        <vxe-form
          ref="xForm"
          :data="dictData.formData"
          :items="dictData.formItems"
          title-align="right"
          title-width="100"
          @submit="submitEvent"
        ></vxe-form>
      </template>
    </vxe-modal>

    <Config :drawer="drawer" drawTitle="字典列表" @handleClose="handleClose" />
  </div>
</template>

<style lang="scss" scoped>
.vxe-input + .vxe-button,
.vxe-input + .vxe-button--dropdown,
.vxe-button + .vxe-button,
.vxe-button + .vxe-button--dropdown {
  margin-left: 0;
}

.vxe-button.type--button:not(.is--round) {
  border-radius: 0;
}

.vxe-toolbar.size--medium {
  padding: 10px;
}

.vxe-table--render-default.size--medium {
  margin-top: 12px;
}

.vxe-button.size--medium.type--button {
  margin-right: 0.07em;
}

.text-model {
  &:hover {
    cursor: pointer;
  }
}
</style>
