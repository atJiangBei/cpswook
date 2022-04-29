<template>
  <div class="ym-padding-large ym-bg-white">
    <div>
      <el-form
        :inline="true"
        label-width="100px"
        size="small"
        :model="searchForm"
        ref="searchFormRef"
      >
        <el-form-item prop="name" label="Template Name">
          <el-input v-model="searchForm.name" style="width: 150px"></el-input>
        </el-form-item>
        <el-form-item prop="bu_code" label="Bu Code">
          <el-select style="width: 150px" v-model="searchForm.bu_code">
            <el-option
              v-for="item in buCodeList"
              :key="item.dicId"
              :label="item.dicTxt"
              :value="item.dicId"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="type" label="Template Type">
          <el-select style="width: 150px" v-model="searchForm.type">
            <el-option
              v-for="item in templateTypeList"
              :key="item.dicTxt"
              :label="item.dicTxt"
              :value="item.dicId"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="status" label="Status">
          <el-select style="width: 150px" v-model="searchForm.status">
            <el-option label="Open" value="open" />
            <el-option label="Close" value="close" />
          </el-select>
        </el-form-item>
        <el-form-item prop="version" label="Version">
          <el-input
            v-model="searchForm.version"
            style="width: 150px"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="ym-padding-small-y">
      <el-button type="primary" size="small" @click="onQuery">
        {{ $t("buttons.search") }}
      </el-button>
      <el-button size="small" @click="resetSearchForm">
        {{ $t("buttons.reset") }}
      </el-button>
    </div>
    <div class="ym-padding-small-y">
      <el-button type="primary" size="small" @click="onAdd">
        {{ $t("buttons.add") }}
      </el-button>
    </div>
    <div class="ym-border-basic" style="border-bottom: 0">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="number" width="180">
          <template #default="{ $index }">
            {{ pageData.pageSize * (pageData.page - 1) + $index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="id" label="id" width="180" />
        <el-table-column prop="statusAS" label="statusAS" width="180" />
        <el-table-column prop="creater_useridAS" label="creater_useridAS" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button type="text" size="small">Detail</el-button>
            <el-button type="text" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="ym-padding-default-y">
      <el-pagination
        background
        layout="total,prev, pager, next,jumper,sizes"
        :total="pageData.total"
        v-model:current-page="pageData.page"
        v-model:page-size="pageData.pageSize"
      />
    </div>
    <popup-container v-model="addDialogVisible" title="Details">
      <TemplateDetails @cancel="addDialogVisible = false"></TemplateDetails>
    </popup-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "system-template"
});
</script>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useTableData } from "./utils";
import previewData from "./preview";
import TemplateDetails from "./details/index.vue";
import PopupContainer from "./component/popup-container";
import { useBuCodeList, useTemplateTypeList } from "./useData";
import { http } from "/@/utils/http";
import axios from "axios";

console.log(http);
const searchFormRef = ref();

console.log(previewData);
const searchForm = reactive({
  name: "",
  bu_code: "",
  type: "",
  status: "",
  version: ""
});
const pageData = reactive({
  page: 1,
  pageSize: 10,
  total: 10
});

const [tableData, search] = useTableData(pageData);

const onQuery = () => {
  http.get("/api/searchList", {
    params: { name: "ZhangSan", age: 45, info: { basic: "123" } }
  });
  http.post("/api/searchList", { data: { name: "ZhangSan", age: 2 } });
  //search();
};

const resetSearchForm = () => {
  console.log(searchFormRef.value);
  searchFormRef.value.resetFields();
};

const addDialogVisible = ref(true);

const onAdd = () => {
  addDialogVisible.value = true;
};
const [buCodeList] = useBuCodeList();
const [templateTypeList] = useTemplateTypeList();
</script>
