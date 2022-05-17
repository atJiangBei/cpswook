<template>
  <div class="aggrescan-plot">
    <el-row class="ym-margin-default-y" align="middle">
      <el-col :span="12">
        <FieldItem :label="$t('aggrescan.showChain')">
          <el-select></el-select>
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
import { ref, provide } from "vue";
import FieldItem from "../../components/FieldItem.vue";
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
import VChart, { THEME_KEY } from "vue-echarts";

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
provide(THEME_KEY, "dark");
const option = ref({
  title: {
    text: "Temperature Change in the Coming Week"
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar"] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} °C"
    }
  },
  series: [
    {
      name: "Highest",
      type: "line",
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }]
      }
    },
    {
      name: "Lowest",
      type: "line",
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: "average", name: "Avg" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max"
            },
            {
              symbol: "circle",
              label: {
                position: "start",
                formatter: "Max"
              },
              type: "max",
              name: "最高点"
            }
          ]
        ]
      }
    }
  ]
});
</script>

<style lang="scss" scoped>
.aggrescan-plot {
  .chart {
    width: 100%;
    height: 400px;
  }
}
</style>
