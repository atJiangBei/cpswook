<template>
  <div class="page-aggrescan-mutate ym-padding-large ym-bg-white">
    <el-row>
      <el-col :span="16" :gutter="20">
        <h2 class="ym-title-h2">{{ $t("aggrescan.whichToMutate") }}</h2>
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
          >{{ $t("aggrescan.chooseSubstitution") }}</InfoTip
        >
      </el-col>
      <el-col :span="8">
        <!-- <ResidueImg></ResidueImg> -->
        <h3 class="ym-title-h3 ym-margin-default-y">
          {{ $t("aggrescan.replacedResidues") }}
        </h3>
        <el-table :data="replacedResidues" style="width: 100%">
          <el-table-column prop="from" :label="$t('aggrescan.residueFrom')" />
          <el-table-column prop="chain" :label="$t('aggrescan.chain')" />
          <el-table-column prop="index" :label="$t('aggrescan.residueIndex')" />
          <el-table-column prop="to" :label="$t('aggrescan.residueTo')" />
        </el-table>
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
    <el-dialog
      v-model="isShowMutateDialog"
      :title="$t('aggrescan.mutateResidue')"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <h2 class="ym-title-h2 ym-color-333">From:</h2>
          <ResidueImg align="left" :residue="curResidue"></ResidueImg>
        </el-col>
        <el-col :span="16">
          <h2 class="ym-title-h2 ym-color-333">To:</h2>
          <div class="residue-items ym-overflow-y-auto">
            <ResidueItem
              class="item ym-border-ddd"
              v-for="(residue, index) in residues"
              :key="index"
              :residue="residue"
              @click.stop="onMutate(residue)"
            ></ResidueItem>
          </div>
        </el-col>
      </el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            type="danger"
            :icon="RefreshLeft"
            @click="isShowMutateDialog = false"
            >{{ $t("buttons.cancel") }}</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Chain from "./_components/Chain.vue";
import ResidueImg, { Residue } from "./_components/ResidueImg.vue";
import ResidueItem from "./_components/ResidueItem.vue";
import { RefreshLeft } from "@element-plus/icons-vue";
import SaveSVG from "/@/assets/svg/save.svg?component";
import InfoTip from "/@/components/info-tip/index.vue";
import { Warning } from "@element-plus/icons-vue";
import {
  requestForward,
  getResidues,
  analysisManualMutate
} from "/@/api/aggrescan";
import {
  useSeqs,
  useResidues,
  useReplacedResidues,
  useChosenResidues
} from "./index";

const {
  query: { dis }
} = useRoute();

const isShowMutateDialog = ref(false);

const { replacedResidues } = useReplacedResidues();

const { chosenResidues } = useChosenResidues(replacedResidues);

const { seqs } = useSeqs();

const { residues, residuesMap } = useResidues();

interface ChainResidue extends Residue {
  chain: string;
}

const curResidue = ref<ChainResidue>();

const onChooseResidue = ({ letter, index, chain }) => {
  isShowMutateDialog.value = true;
  const { name, fullName } = residuesMap.value[letter];
  curResidue.value = {
    letter,
    index,
    name,
    fullName,
    chain
  };
};

const onMutate = ({ letter: toLetter, name: to }) => {
  isShowMutateDialog.value = false;
  const { name: from, chain, index, letter: fromLetter } = curResidue.value;
  replacedResidues.value.push({
    from,
    chain,
    index,
    fromLetter,
    to,
    toLetter
  });
};

const getMutate = (replacedResidues: ReplacedResidue[]) => {
  return replacedResidues.map(({ fromLetter, toLetter, index, chain }) => {
    return fromLetter + toLetter + index + chain;
  });
};

const onUndo = () => {
  replacedResidues.value = [];
};

const onSave = () => {
  // analysisManualMutate
};

const queryData = async () => {
  // const mutatePromise = requestForward({
  //   mutate: JSON.stringify({
  //     request_type: "mutate",
  //     pdb: "/data/xiao_cong/develop/aggrescan3d/data/109_ABlooper.pdb",
  //     chain: "",
  //     dis
  //   })
  // });
  // try {
  //   await mutatePromise;
  // } catch (err) {
  //   console.log(err);
  // }
};
queryData();
</script>

<style lang="scss" scoped>
.page-aggrescan-mutate {
  .residue-items {
    height: 50vh;
    .item {
      margin-bottom: -1px;
    }
  }
}
</style>
