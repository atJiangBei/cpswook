<template>
  <div class="aggrescan-score">
    <el-row class="ym-margin-default-y">
      <el-col :span="12">
        <el-descriptions :column="1">
          <el-descriptions-item
            v-for="(val, key) in scores"
            :key="key"
            :label="key"
            >{{ val }}</el-descriptions-item
          >
        </el-descriptions>
      </el-col>
      <el-col :span="12">
        <el-button type="primary">{{
          $t("aggrescan.downloadTable")
        }}</el-button>
      </el-col>
    </el-row>
    <el-row class="ym-margin-default-y">
      <h4>
        The table below lists A3D score for protein residues. Residues with A3D
        score > 0.0000 are marked by yellow rows.
      </h4>
      <!-- <el-form-item label="show chain">
        <el-select></el-select>
      </el-form-item> -->
    </el-row>
    <el-row class="ym-margin-default-y">
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
    </el-row>
    <el-row>
      <el-table :data="residues" :row-class-name="rowClassName">
        <el-table-column
          prop="0"
          align="center"
          label="residue index"
          width="180"
        />
        <el-table-column
          prop="1"
          align="center"
          label="residue name"
          width="180"
        />
        <el-table-column prop="2" align="center" label="chain" width="180" />
        <el-table-column prop="3" align="center" label="Aggrescan 3D score" />
      </el-table>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: "AggrescanScore"
};
</script>

<script setup lang="ts">
import { ref, computed, toRef } from "vue";
import FieldItem from "/@/components/field-item/index.vue";
import { useChains } from "../index";
import type { Chains } from "../index";

interface Props {
  data: Chains;
}
const props = defineProps<Props>();
const { chains } = useChains(toRef(props, "data"));
const curChain = ref("");
const scores = computed(() => {
  return chains.value.length > 0 ? props.data[chains.value[0]]?.stat : {};
});
const allResidues = computed(() => {
  return [].concat(...Object.values(props.data).map(item => item.content));
});
const residues = computed(() => {
  return curChain.value
    ? props.data[curChain.value]?.content
    : allResidues.value;
});
const rowClassName = ({ row }) => {
  return +row[3] > 0 ? "high-light" : "";
};
</script>

<style lang="scss" scoped>
.aggrescan-score {
  --high-light-color: #fcf8e3;
  :deep(.el-descriptions__label) {
    display: inline-block;
    width: 200px;
    font-weight: bold;
  }
  :deep(.high-light) {
    background-color: var(--high-light-color);
  }
}
</style>
