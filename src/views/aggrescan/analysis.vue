<template>
  <div class="page-aggrescan-analysis ym-padding-large ym-bg-white">
    <el-row justify="center">
      <el-col :span="12">
        <el-form
          label-width="200px"
          :model="analysisForm"
          ref="analysisFormRef"
        >
          <el-form-item :label="$t('aggrescan.localPDBFile')">
            <el-upload
              :action="uploadApi"
              :limit="1"
              accept=".pdb"
              :show-file-list="false"
              :on-success="handleSuccess"
            >
              <el-button type="primary">{{ $t("buttons.browse") }}</el-button>
            </el-upload>
          </el-form-item>
          <!-- <el-form-item :label="$t('aggrescan.moleculeID')">
            <el-input v-model="analysisForm.id"></el-input>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.emailAddress')">
            <el-input type="email" v-model="analysisForm.email"></el-input>
          </el-form-item> -->
          <el-form-item :label="$t('aggrescan.analysisMode')">
            <el-select v-model="analysisForm.mode">
              <el-option
                :label="$t('aggrescan.withoutMutation')"
                :value="AnalysisMode.WithoutMutation"
              />
              <el-option
                :label="$t('aggrescan.manualMutation')"
                :value="AnalysisMode.ManualMutation"
              />
              <el-option
                :label="$t('aggrescan.automaticMutation')"
                :value="AnalysisMode.AutomaticMutation"
              />
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.distance')">
            <el-radio-group v-model="analysisForm.dis">
              <el-radio :label="Distance.FiveA">5A</el-radio>
              <el-radio :label="Distance.TenA">10A</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            v-if="analysisForm.mode === AnalysisMode.WithoutMutation"
            :label="$t('aggrescan.foldX')"
          >
            <el-radio-group v-model="analysisForm.usefoldx">
              <el-radio :label="FoldX.Yes">Yes</el-radio>
              <el-radio :label="FoldX.No">No</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">{{
              $t("buttons.submit")
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { getSeq } from "/@/api/aggrescan";
import { AnalysisMode, Distance, FoldX } from "/@/consts/aggrescan";
import { useUploadApi } from "./index";

const router = useRouter();

const { uploadApi } = useUploadApi();

const analysisFormRef = ref<FormInstance>();
const analysisForm = reactive({
  id: "",
  email: "",
  mode: AnalysisMode.WithoutMutation,
  dis: Distance.FiveA,
  usefoldx: FoldX.Yes
});
// const distance = ref("5A");
// const foldX = ref(1);

const onSubmit = () => {
  if (analysisForm.mode === AnalysisMode.WithoutMutation) {
    router.push({
      name: "aggrescanResult",
      query: {
        dis: analysisForm.dis,
        usefoldx: analysisForm.usefoldx
      }
    });
  } else if (analysisForm.mode === AnalysisMode.ManualMutation) {
    router.push({
      name: "aggrescanMutate",
      query: {
        dis: analysisForm.dis
      }
    });
  } else {
    router.push({
      name: "aggrescanAutoMutate",
      query: {
        dis: analysisForm.dis
      }
    });
  }
};
const handleSuccess = () => {};
</script>

<style lang="scss" scoped></style>
