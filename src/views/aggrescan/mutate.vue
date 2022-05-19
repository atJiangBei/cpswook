<template>
  <div class="page-aggrescan-mutate ym-padding-large ym-bg-white">
    <el-row>
      <el-col :span="16">
        <h2 class="ym-title-h2">{{ $t("aggrescan.whichToMutate") }}</h2>
        <h3 class="ym-title-h3">Chain A</h3>
        <Chain @choose-residue="mutateDialogVisible = true"></Chain>
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
        <ResidueImg></ResidueImg>
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
          <el-button type="primary" :icon="SaveSVG">{{
            $t("aggrescan.saveAndSubmit")
          }}</el-button>
          <el-button type="danger" :icon="RefreshLeft">{{
            $t("aggrescan.undo")
          }}</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
      v-model="mutateDialogVisible"
      :title="$t('aggrescan.mutateResidue')"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <h2 class="ym-title-h2 ym-color-333">From:</h2>
          <ResidueImg align="left"></ResidueImg>
        </el-col>
        <el-col :span="16">
          <h2 class="ym-title-h2 ym-color-333">To:</h2>
          <div class="residue-items">
            <ResidueItem class="item ym-border-ddd"></ResidueItem>
          </div>
        </el-col>
      </el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            type="danger"
            :icon="RefreshLeft"
            @click="mutateDialogVisible = false"
            >{{ $t("aggrescan.undo") }}</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Chain from "./_components/Chain.vue";
import ResidueImg from "./_components/ResidueImg.vue";
import ResidueItem from "./_components/ResidueItem.vue";
import { RefreshLeft } from "@element-plus/icons-vue";
import SaveSVG from "/@/assets/svg/save.svg?component";
import InfoTip from "/@/components/info-tip/index.vue";
import { Warning } from "@element-plus/icons-vue";

const mutateDialogVisible = ref(false);

const replacedResidues = ref([
  {
    from: "ARG",
    chain: "A",
    index: 17,
    to: "GLU"
  }
]);
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
