<template>
  <div class="page-bpmn-list">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="code" label="Code" width="180" />
      <el-table-column prop="name" label="Name" />
      <el-table-column width="180">
        <template #default="scope">
          <el-button type="text" size="small" @click="onEdit(scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getProcessList } from "/@/api/bpmn";
import { getTokenStr } from "/@/utils/auth";
import { href } from "/@/utils/href";

// interface Process {
//   id: string;
//   name: string;
// }

const tableData = ref([]);
const queryData = async () => {
  const { data } = await getProcessList();
  tableData.value = data;
};
queryData();
const onEdit = (item) => {
  const token = getTokenStr();
  href.open({
    url: "http://localhost:8100/",
    query: {
      process_id: item.process_id,
      token
    }
  });
};
</script>
