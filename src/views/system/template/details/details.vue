<template>
  <div>
    <div>
      <div>Template Details</div>
      <div class="ym-padding-default ym-margin-default-y">
        <el-form :mode="basicForm" :inline="true" label-width="120px">
          <el-form-item prop="templateName" label="Template Name">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="BuCode" label="Bu Code">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="TemplateType" label="Template Type">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="Version" label="Version">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="Layout" label="Layout">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="BarcodeLabel" label="Barcode Label">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="CustomGroup" label="Custom Group">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="PdiskPath" label="Pdisk Path">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="SOPLink" label="SOP Link">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="SampleType" label="Sample Type">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="NeedBarcodeCode" label="Need Barcode Code">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="abbreviation" label="abbreviation">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
          <el-form-item prop="category" label="Category">
            <el-input v-model="basicForm.templateName"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const basicForm = reactive({
      templateName: ""
    });
    return {
      basicForm
    };
  }
});
</script>
