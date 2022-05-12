<template>
  <div class="project-detail">
    <el-row align="middle">
      <el-col :span="8">
        <div class="molecule-id">{{ $t("aggrescan.moleculeID") }}:</div>
      </el-col>
      <el-col :span="8">
        <el-button type="primary">{{ $t("aggrescan.downloadPDBFile") }}</el-button>
      </el-col>
    </el-row>
    <!-- <div class="title">{{ $t("aggrescan.settings") }}</div> -->
    <el-row class="ym-margin-default-y">
      <el-descriptions :title="$t('aggrescan.settings')" :column="1" border>
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
          Province</el-descriptions-item
        >
      </el-descriptions>
    </el-row>

  </div>
</template>

<script lang="ts">
export default {
  name: "ProjectDetail"
};
</script>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>