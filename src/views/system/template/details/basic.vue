<template>
  <div>
    <div>
      <div>Template Head</div>
      <div class="ym-padding-default ym-margin-default-y">
        <el-form
          :mode="basicForm"
          :inline="true"
          :rules="basicFormRules"
          label-width="120px"
          size="small"
        >
          <el-form-item prop="name" label="Template Name">
            <el-input v-model="basicForm.name" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item prop="bu_code" label="Bu Code">
            <el-select
              style="width: 150px"
              multiple
              v-model="basicForm.bu_code"
            >
              <el-option
                v-for="item in buCodeList"
                :key="item.dicId"
                :label="item.dicTxt"
                :value="item.dicId"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="type" label="Template Type">
            <el-select style="width: 150px" multiple v-model="basicForm.type">
              <el-option
                v-for="item in templateTypeList"
                :key="item.dicTxt"
                :label="item.dicTxt"
                :value="item.dictTypeId"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="version" label="Version">
            <el-input
              style="width: 150px"
              v-model="basicForm.version"
            ></el-input>
          </el-form-item>
          <el-form-item prop="layout" label="Layout">
            <el-select style="width: 150px" v-model="basicForm.layout">
              <el-option label="Standard" value="Standard" />
              <el-option label="Customized" value="Customized" />
            </el-select>
          </el-form-item>
          <el-form-item prop="modulefile" label="Barcode Label">
            <el-input
              style="width: 150px"
              v-model="basicForm.modulefile"
            ></el-input>
          </el-form-item>
          <el-form-item prop="customize_group" label="Custom Group">
            <el-input
              style="width: 150px"
              v-model="basicForm.customize_group"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pdisk_path" label="Pdisk Path">
            <el-input
              style="width: 150px"
              v-model="basicForm.pdisk_path"
            ></el-input>
          </el-form-item>
          <el-form-item prop="soplink" label="SOP Link">
            <el-input
              style="width: 150px"
              v-model="basicForm.soplink"
            ></el-input>
          </el-form-item>
          <el-form-item prop="sample_type" label="Sample Type">
            <el-input
              style="width: 150px"
              v-model="basicForm.sample_type"
            ></el-input>
          </el-form-item>
          <el-form-item prop="is_qr_code" label="Need Barcode Code">
            <el-select style="width: 150px" v-model="basicForm.is_qr_code">
              <el-option label="QR code" value="QR code" />
              <el-option label="Barcode" value="2" />
              <el-option label="QR and Barcode" value="QR and Barcode" />
            </el-select>
          </el-form-item>
          <el-form-item prop="abbreviation" label="abbreviation">
            <el-input
              style="width: 150px"
              v-model="basicForm.abbreviation"
            ></el-input>
          </el-form-item>
          <el-form-item prop="category" label="Category">
            <el-input
              style="width: 150px"
              v-model="basicForm.category"
            ></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="Comments">
            <el-input
              style="width: 150px"
              type="textarea"
              v-model="basicForm.remark"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="ym-padding-default-x ym-flex ym-flex-jc-end">
        <el-button size="small">{{ $t("buttons.cancel") }}</el-button>
        <el-button size="small" type="primary">{{
          $t("buttons.save")
        }}</el-button>
      </div>
    </div>
    <div>
      <div>Template Details</div>
      <div style="height: 1000px"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useBuCodeList, useTemplateTypeList } from "./useData";

export default defineComponent({
  setup() {
    const basicForm = reactive({
      name: "",
      bu_code: [],
      type: [],
      version: "",
      layout: "",
      modulefile: "",
      customize_group: "",
      pdisk_path: "",
      soplink: "",
      sample_type: "",
      is_qr_code: "",
      abbreviation: "",
      category: "",
      remark: ""
    });
    const basicFormRules = reactive({
      name: {
        required: true,
        message: "角色名为必填！",
        trigger: "blur"
      },
      bu_code: {
        required: true,
        message: "角色名为必填！",
        trigger: "blur"
      },
      type: {
        required: true,
        message: "模板类型为必填！",
        trigger: "blur"
      },
      version: {
        required: true,
        message: "版本号为必填！",
        trigger: "blur"
      },
      layout: {
        required: true,
        message: "layout为必填！",
        trigger: "blur"
      }
    });
    const [buCodeList] = useBuCodeList();
    const [templateTypeList] = useTemplateTypeList();
    return {
      basicForm,
      basicFormRules,
      buCodeList,
      templateTypeList
    };
  }
});
</script>
