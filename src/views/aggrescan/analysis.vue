<template>
  <div class="page-aggrescan-analysis ym-padding-large ym-bg-white">
    <el-row justify="center">
      <el-col :span="12">
        <el-form label-width="200px">
          <el-form-item :label="$t('aggrescan.localPDBFile')">
            <el-upload
              action=""
              :limit="1"
              accept=".pdb"
              :show-file-list="false"
              :on-success="handleSuccess"
            >
              <el-button type="primary">{{ $t("buttons.browse") }}</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.moleculeID')">
            <el-input></el-input>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.emailAddress')">
            <el-input></el-input>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.analysisMode')">
            <el-select>
              <el-option :label="$t('aggrescan.withoutMutation')" value="1" />
              <el-option :label="$t('aggrescan.manualMutation')" value="2" />
              <el-option :label="$t('aggrescan.automaticMutation')" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.distance')">
            <el-radio-group v-model="distance">
              <el-radio label="5A">5A</el-radio>
              <el-radio label="10A">10A</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('aggrescan.foldX')">
            <el-radio-group v-model="foldX">
              <el-radio :label="1">Yes</el-radio>
              <el-radio :label="0">No</el-radio>
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const distance = ref("5A");
const foldX = ref(1);

const onSubmit = () => {
  router.push({
    name: "aggrescanResult"
  });
};
const handleSuccess = () => {};
</script>

<style lang="scss" scoped></style>
