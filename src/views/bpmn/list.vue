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
const tableData = [
  {
    id: "1",
    name: "process1"
  },
  {
    id: "2",
    name: "process2"
  }
];
const onEdit = item => {
  window.open(`http://localhost:8100/?process_id=${item.id}`);
}
</script>
