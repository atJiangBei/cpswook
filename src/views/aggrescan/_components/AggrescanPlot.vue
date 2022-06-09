<template>
  <div class="aggrescan-plot">
    <el-row class="ym-margin-default-y" align="middle">
      <el-col :span="12">
        <FieldItem :label="$t('aggrescan.showChain')">
          <el-select v-model="curChain">
            <el-option
              v-for="item in chains"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </FieldItem>
      </el-col>
      <el-col :span="12">
        <el-checkbox
          v-model="checked"
          :label="$t('aggrescan.showBuriedResidues')"
          size="large"
        />
      </el-col>
    </el-row>
    <!-- <el-row class="ym-margin-default-y"> -->
    <v-chart class="chart" :option="option" :autoresize="true"></v-chart>
    <!-- </el-row> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "AggrescanPlot"
};
</script>

<script setup lang="ts">
import { ref, provide, toRef, watchEffect, computed } from "vue";
import FieldItem from "/@/components/field-item/index.vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent
} from "echarts/components";
import { UniversalTransition } from "echarts/features";
import VChart from "vue-echarts";
import { useChains } from "../index";
import type { Chains } from "../index";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  MarkLineComponent,
  MarkPointComponent,
  UniversalTransition
]);

const checked = ref(false);

interface Props {
  data?: Chains;
}

const props = defineProps<Props>();

const { getConvertedChainScores, chains } = useChains(toRef(props, "data"));

const curChain = ref("");

watchEffect(() => {
  curChain.value = chains.value[0];
});

const scores = getConvertedChainScores(curChain, checked);

const curChainName = computed(() => {
  return `Chain ${curChain.value}`;
});

const option = ref({
  title: {
    text: "Aggrescan3D profile"
  },
  tooltip: {
    trigger: "axis",
    formatter: params => {
      const param = params[0];
      const content = [
        `<tr><td>Score</td><td>${param.data[1]}</td></tr>`,
        `<tr><td>Residue Index</td><td>${param.data[0]}</td></tr>`
      ].join("");
      return `<table class="tooltip"><tr><td colspan="2">${param.seriesName}</td></tr>${content}</table>`;
    }
  },
  legend: {},
  xAxis: {
    type: "value",
    name: "Residue"
  },
  yAxis: {
    type: "value",
    name: "Score"
  },
  series: [
    {
      name: curChainName,
      type: "line",
      data: scores
    }
  ]
});
</script>

<style lang="scss" scoped>
.aggrescan-plot {
  --border1px: 1px solid #333;
  .chart {
    width: 100%;
    height: 400px;
  }
  :deep(.tooltip) {
    // border: var(--border1px);
    // border-collapse: collapse;
    th,
    td {
      // border: var(--border1px);
    }
  }
}
</style>
