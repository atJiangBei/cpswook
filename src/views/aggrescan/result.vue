<template>
  <div class="page-aggrescan-result ym-padding-large ym-bg-white">
    <el-tabs v-model="curTab" class="tabs" @tab-click="handleClick">
      <el-tab-pane :label="$t('aggrescan.projectDetails')">
        <ProjectDetail :data="res.config"></ProjectDetail>
      </el-tab-pane>
      <el-tab-pane :label="$t('aggrescan.aggrescanScore')">
        <AggrescanScore :data="res.table"></AggrescanScore>
      </el-tab-pane>
      <el-tab-pane :label="$t('aggrescan.aggrescanPlot')">
        <AggrescanPlot :data="res.table"></AggrescanPlot>
      </el-tab-pane>
      <el-tab-pane :label="$t('aggrescan.aggrescanAutoMutate')">
        <AggrescanAutoMutate></AggrescanAutoMutate>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import type { TabsPaneContext } from "element-plus";
import ProjectDetail from "./_components/ProjectDetail.vue";
import AggrescanScore from "./_components/AggrescanScore.vue";
import AggrescanPlot from "./_components/AggrescanPlot.vue";
import AggrescanAutoMutate from "./_components/AggrescanAutoMutate.vue";
import { analysisWithoutMutate, getAnalysisResult } from "/@/api/aggrescan";
import { Poll } from "/@/utils/poll";

const curTab = ref("0");

const res = ref({
  config: {},
  table: {}
});

const {
  query: { uid }
} = useRoute();

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const poll = new Poll({
  query: getAnalysisResult,
  queryParams: {
    pdb: "/data/xiao_cong/develop/aggrescan3d/data/109_ABlooper.pdb",
    chain: ""
  },
  interval: 10000,
  success: ({ data, code, msg }) => {
    return +code !== 200;
    // if (+code === 200) {
    //   return false;
    // } else {
    //   return true;
    // }
  }
});

// getAnalysisResult({
//   pdb: "/data/xiao_cong/develop/aggrescan3d/data/109_ABlooper.pdb",
//   chain: ""
// });

const queryData = async () => {
  // res.value = await analysisWithoutMutate({
  //   json: JSON.stringify({
  //     pid: "109",
  //     pdb: "/data/xiao_cong/develop/aggrescan3d/data/109_ABlooper.pdb",
  //     chain: "",
  //     dis,
  //     usefoldx
  //   })
  // });
};
queryData();
</script>

<style lang="scss" scoped></style>
