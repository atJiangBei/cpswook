<template>
  <div class="ym-padding-large ym-bg-white">
    <div>
      <el-form :inline="true" :model="formInline" ref="searchFormRef">
        <el-form-item label="roleName" prop="username">
          <el-input v-model="formInline.username" placeholder="Approved by" />
        </el-form-item>
        <!-- <el-form-item :label="$tl('label.other')">
              <el-select
                v-model="formInline.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item> -->
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
      <Details></Details>
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
import Details from "./details/index.vue";
import PopupContainer from "./component/popup-container";
const searchFormRef = ref();
const formInline = reactive({
  username: "",
  region: ""
});
const pageData = reactive({
  page: 1,
  pageSize: 10,
  total: 10
});

const [tableData, search] = useTableData(pageData);

const onQuery = () => {
  search();
};

const resetSearchForm = () => {
  console.log(searchFormRef.value);
  searchFormRef.value.resetFields();
};

const addDialogVisible = ref(true);

const onAdd = () => {
  addDialogVisible.value = true;
};
</script>
