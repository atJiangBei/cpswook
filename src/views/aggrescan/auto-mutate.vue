<template>
  <div class="page-aggrescan-mutate ym-padding-large ym-bg-white">
    <el-row>
      <el-col :span="16" :gutter="20">
        <h2 class="ym-title-h2">{{ $t("aggrescan.whichToExclude") }}</h2>
        <Chain
          class="chain ym-margin-large-y"
          v-for="(val, key) in seqs"
          :key="key"
          :chain="key"
          :residues="val"
          :chosen="chosenResidues[key]"
          @choose-residue="onChooseResidue"
        ></Chain>
        <InfoTip
          class="ym-margin-large-y"
          :style="{
            backgroundImage:
              'linear-gradient(to bottom, #fcf8e3 0, #f8efc0 100%)'
          }"
          :icon="Warning"
          icon-color="#8a6d3b"
          color="#8a6d3b"
          >{{ $t("aggrescan.clickToPrevent") }}</InfoTip
        >
      </el-col>
      <el-col :span="8">
        <!-- <ResidueImg></ResidueImg> -->
        <h3 class="ym-title-h3 ym-margin-default-y">
          {{ $t("aggrescan.excludedResidues") }}
        </h3>
        <el-table :data="excludedResidues" style="width: 100%">
          <el-table-column prop="name" :label="$t('aggrescan.residue')" />
          <el-table-column prop="chain" :label="$t('aggrescan.chain')" />
          <el-table-column prop="index" :label="$t('aggrescan.residueIndex')" />
        </el-table>
        <!-- <h3 class="ym-title-h3 ym-margin-default-y">
          {{ $t("aggrescan.addiTionalOptions") }}
        </h3>
        <FieldItem :label="$t('aggrescan.maxNumberOfMutatedResidues')">
          <el-input size="small" type="number" style="width: 50px"></el-input>
        </FieldItem> -->
        <el-row class="ym-margin-large-y">
          <el-button type="primary" :icon="SaveSVG" @click="onSave">{{
            $t("aggrescan.saveAndSubmit")
          }}</el-button>
          <el-button type="danger" :icon="RefreshLeft" @click="onUndo">{{
            $t("aggrescan.undo")
          }}</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import Chain, { ChainChosenResidue } from "./_components/Chain.vue";
import { RefreshLeft } from "@element-plus/icons-vue";
import SaveSVG from "/@/assets/svg/save.svg?component";
import InfoTip from "/@/components/info-tip/index.vue";
import { Warning } from "@element-plus/icons-vue";
import FieldItem from "/@/components/field-item/index.vue";
import { analysisAutoMutate } from "/@/api/aggrescan";
import {
  useSeqs,
  useResidues,
  useExcludedResidues,
  useChosenResidues
} from "./index";

const {
  query: { dis }
} = useRoute();

const { seqs } = useSeqs();

const { residuesMap } = useResidues();

const { excludedResidues } = useExcludedResidues();

const { chosenResidues } = useChosenResidues(excludedResidues);

const onChooseResidue = ({ letter, index, chain }: ChainChosenResidue) => {
  excludedResidues.value.push({
    name: residuesMap.value[letter].name,
    chain,
    index,
    letter
  });
};

const onUndo = () => {
  excludedResidues.value = [];
};

const onSave = () => {
  // analysisManualMutate
};

const queryData = async () => {
  await analysisAutoMutate({
    json: JSON.stringify({
      pid: "2gb1",
      pdb: "/data/xiao_cong/develop/aggrescan3d/data/2gb1.pdb",
      chain: "",
      dis,
      mut: ["1A", "2A"]
    })
  });
};
queryData();
</script>

<style lang="scss" scoped>
.page-aggrescan-mutate {
  .residue-items {
    .item {
      margin-bottom: -1px;
    }
  }
}
</style>
