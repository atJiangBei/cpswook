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
        <el-descriptions-item 
          v-for="(val, key) in data"
          :label="key">{{ val }}</el-descriptions-item>
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
import { ref } from 'vue';
interface Props {
  data: object
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.project-detail {
  :deep(.el-descriptions__label) {
    white-space: nowrap;
  }
  :deep(.el-descriptions__content) {
    word-break: break-all;
  }
}
</style>