<template>
  <div class="page-aggrescan-result ym-padding-large ym-bg-white">
    <el-tabs v-model="curTab" class="tabs" @tab-click="handleClick">
      <el-tab-pane :label="$t('aggrescan.projectDetails')">
        <ProjectDetail></ProjectDetail>
      </el-tab-pane>
      <el-tab-pane :label="$t('aggrescan.aggrescanScore')">
        <AggrescanScore></AggrescanScore>
      </el-tab-pane>
      <el-tab-pane :label="$t('aggrescan.aggrescanPlot')">
        <AggrescanPlot></AggrescanPlot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import ProjectDetail from "./_components/ProjectDetail.vue";
import AggrescanScore from "./_components/AggrescanScore.vue";
import AggrescanPlot from "./_components/AggrescanPlot.vue";

const curTab = ref("0");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

</script>

<style lang="scss" scoped></style>
