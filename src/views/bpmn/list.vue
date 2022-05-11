<template>
  <div class="page-bpmn-list">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
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
import { getProcessList } from "/@/api/bpmn";
import { getTokenStr } from "/@/utils/auth";
import { href } from "/@/utils/href";
// import { useRouter } from "vue-router";

// const router = useRouter();

interface Process {
  id: string;
  name: string;
}

const tableData: Process[] = [
  {
    id: "1",
    name: "process1"
  },
  {
    id: "2",
    name: "process2"
  }
];
getProcessList();
const onEdit = (item: Process) => {
  const token = getTokenStr();
  href.open({
    url: "http://localhost:8100/",
    query: {
      process_id: item.id,
      token
    }
  });
  // window.open(`http://localhost:8100/?process_id=${item.id}&token=${token}`);
};
</script>
