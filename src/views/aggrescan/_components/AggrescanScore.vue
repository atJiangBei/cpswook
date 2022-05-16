<template>
  <div class="aggrescan-score">
    <el-row class="ym-margin-default-y">
      <el-col :span="12">
        <el-descriptions :column="1">
          <el-descriptions-item label="Username"
            >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="Telephone"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
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
        <el-select></el-select>
      </FieldItem>
    </el-row>
    <el-row>
      <el-table :data="residues">
        <el-table-column prop="index" label="residue index" width="180" />
        <el-table-column prop="name" label="residue name" width="180" />
        <el-table-column prop="chain" label="chain" width="180" />
        <el-table-column prop="score" label="Aggrescan 3D score" />
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
import { ref } from "vue";
import FieldItem from "../../components/FieldItem.vue";
const residues = ref([]);
residues.value = [
  {
    index: 5,
    name: "A",
    chain: "A",
    score: "-0.6162"
  },
  {
    index: 5,
    name: "A",
    chain: "A",
    score: "-0.6162"
  },
  {
    index: 5,
    name: "A",
    chain: "A",
    score: "-0.6162"
  }
];
</script>

<style lang="scss" scoped>
.aggrescan-score {
  :deep(.el-descriptions__label) {
    display: inline-block;
    width: 200px;
  }
}
</style>
