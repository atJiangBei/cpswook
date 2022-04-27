<template>
  <div class="ym-flex ym-flex-fd-column" style="height: 100%">
    <div>
      <div>
        <div>Template Head</div>
        <div class="ym-padding-default ym-margin-default-y">
          <el-form
            ref="basicFormRef"
            :model="basicForm"
            :inline="true"
            :rules="basicFormRules"
            label-width="120px"
            size="small"
          >
            <el-form-item prop="name" label="Template Name">
              <el-input
                v-model="basicForm.name"
                style="width: 150px"
              ></el-input>
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
                  :value="item.dicId"
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
          <el-button size="small" @click="$emit('cancel')">
            {{ $t("buttons.cancel") }}
          </el-button>
          <el-button size="small" type="primary" @click="saveBasicInfo">{{
            $t("buttons.save")
          }}</el-button>
        </div>
      </div>
      <div>
        <div>Template Details</div>
        <div>
          <div class="ym-padding-small-y">
            <el-button
              type="primary"
              size="small"
              @click="ctContainerVisible = true"
            >
              {{ $t("buttons.add") }}
            </el-button>
            <el-button type="info" size="small"> 预览 </el-button>
          </div>
          <div class="ym-border-basic" style="border-bottom: 0">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="number" width="180">
                <template #default="{ $index }">
                  {{ pageData.pageSize * (pageData.page - 1) + $index + 1 }}
                </template>
              </el-table-column>
              <el-table-column prop="id" label="id" width="180" />
              <el-table-column prop="category" label="Category" width="180" />
              <el-table-column prop="label" label="Item Name" />
              <el-table-column prop="wdget" label="Wdget" />
              <el-table-column fixed="right" label="Operations" width="120">
                <template #default>
                  <el-button type="text" size="small">Detail</el-button>
                  <el-button type="text" size="small">Edit</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="ym-padding-default-y">
            <el-pagination
              background
              layout="total,prev, pager, next,jumper,sizes"
              :total="pageData.total"
              v-model:current-page="pageData.page"
              v-model:page-size="pageData.pageSize"
            />
          </div>
          <div class="ym-padding-default ym-flex ym-flex-jc-end">
            <el-button size="small" @click="$emit('cancel')">
              {{ $t("buttons.cancel") }}
            </el-button>
            <el-button size="small" type="primary" @click="saveBasicInfo">{{
              $t("buttons.save")
            }}</el-button>
          </div>
        </div>
      </div>
    </div>
    <ym-popup-container
      :inside="false"
      title="add"
      v-model="ctContainerVisible"
    >
      <create-component
        @cancel="ctContainerVisible = false"
        @confirm="onSaveComponent"
      ></create-component>
    </ym-popup-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useBuCodeList, useTemplateTypeList } from "./../useData";
import { useTableData } from "./../utils";
import CreateComponent from "./create-component";
export default defineComponent({
  components: {
    CreateComponent
  },
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
    const basicFormRef = ref();
    const saveBasicInfo = () => {
      basicFormRef.value.validate((valid, fields) => {
        if (valid) {
          try {
            console.log("submit!");
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    const pageData = reactive({
      page: 1,
      pageSize: 10,
      total: 10
    });
    // const [tableData, search] = useTableData(pageData);
    const initInfo = [
      {
        category: "Info",
        wdget: "Dropdown",
        label: "test2",
        dropdown_table_value: "yue,no",
        required: 1,
        editable: 1
      },
      {
        category: "Info",
        wdget: "DateTime",
        label: "test2",
        dropdown_table_value: "yue,no",
        required: 1,
        editable: 1
      },
      {
        category: "Sample Information",
        wdget: "Table",
        label: "Sample Information",
        dropdown_table_value:
          "Sample ID,Concentration(mg/mL),Volume(mL),Amount(mg)",
        required: 1,
        editable: 1
      }
    ];

    const tableData = reactive(initInfo);
    const ctContainerVisible = ref(false);
    const onSaveComponent = componentForm => {
      console.log(componentForm);
      tableData.push(componentForm);
    };
    return {
      basicForm,
      basicFormRules,
      buCodeList,
      templateTypeList,
      saveBasicInfo,
      basicFormRef,
      pageData,
      tableData,
      ctContainerVisible,
      onSaveComponent
    };
  }
});
</script>
