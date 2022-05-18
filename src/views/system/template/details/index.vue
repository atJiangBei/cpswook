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
          <el-button @click="$emit('cancel')">
            {{ $t("buttons.cancel") }}
          </el-button>
          <el-button type="primary" @click="saveBasicInfo">{{
            $t("buttons.save")
          }}</el-button>
        </div>
      </div>
      <div>
        <div>Template Details</div>
        <div>
          <div class="ym-padding-small-y">
            <el-button type="primary" @click="ctContainerVisible = true">
              {{ $t("buttons.add") }}
            </el-button>
            <el-button type="success" @click="onPreview"> 预览 </el-button>
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
                  <el-button type="primary" text>Detail</el-button>
                  <el-button type="primary" text>Edit</el-button>
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
            <el-button @click="$emit('cancel')">
              {{ $t("buttons.cancel") }}
            </el-button>
            <el-button type="primary" @click="saveBasicInfo">{{
              $t("buttons.save")
            }}</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- <ym-render-template :previewData="previewData"></ym-render-template> -->
    <ym-popup-container
      :inside="false"
      title="preview"
      v-model="previewVisible"
    >
      <ym-render-template :previewData="previewData"></ym-render-template>
    </ym-popup-container>
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
import CreateComponent from "./create-component.vue";
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
        wdget: "Input",
        label: "Input",
        dropdown_table_value: "",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "Textarea",
        label: "Textarea",
        dropdown_table_value: "",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "Select",
        label: "Select",
        dropdown_table_value: "yes,no",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "DateTime",
        label: "Start Time",
        dropdown_table_value: "yes,no",
        required: 1,
        editable: 1,
        value: "",
        newLine: false
      },
      {
        category: "Info",
        wdget: "Date",
        label: "Start Date",
        dropdown_table_value: "yes,no",
        required: 1,
        editable: 1,
        value: "",
        newLine: false
      },
      {
        category: "Info",
        wdget: "DateTimeRange",
        label: "DateTimeRange",
        dropdown_table_value: "yes,no",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "TimePicker",
        label: "TimePicker",
        dropdown_table_value: "yes,no",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "Checkbox",
        label: "Type",
        dropdown_table_value: "选项一,选项二,选项三",
        required: 1,
        editable: 1,
        value: ["选项二"],
        newLine: true
      },
      {
        category: "Info",
        wdget: "Number",
        label: "Input Number",
        dropdown_table_value: "",
        required: 1,
        editable: 1,
        value: 0,
        newLine: true
      },
      {
        category: "Info",
        wdget: "Radio",
        label: "Radio",
        dropdown_table_value: "选项一,选项二,选项三",
        required: 1,
        editable: 1,
        value: "选项二",
        newLine: true
      },
      {
        category: "Info",
        wdget: "RadioButton",
        label: "RadioButton",
        dropdown_table_value: "选项一,选项二,选项三",
        required: 1,
        editable: 1,
        value: "选项四",
        newLine: true
      },
      {
        category: "Info",
        wdget: "Link",
        label: "Link",
        dropdown_table_value: "https://element.eleme.io",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "Image",
        label: "Image",
        dropdown_table_value: "https://element-plus.org/images/jnpfsoft.jpg",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Info",
        wdget: "Button",
        label: "",
        dropdown_table_value: "测试",
        required: 1,
        editable: 1,
        value: "",
        newLine: true
      },
      {
        category: "Sample Information",
        wdget: "Table",
        label: "Sample Information",
        dropdown_table_value: "SampleID,Concentration,Volume,Amount",
        required: 1,
        editable: 1,
        value: [
          {
            SampleID: "a",
            Concentration: "b",
            Volume: "c",
            Amount: "d"
          }
        ]
      }
    ];
    const previewVisible = ref(false);
    const tableData = reactive(initInfo);
    const ctContainerVisible = ref(false);
    const onSaveComponent = componentForm => {
      console.log(componentForm);
      tableData.push(componentForm);
    };
    const previewData = ref([]);
    const onPreview = () => {
      const newArr = [];
      tableData.forEach(item => {
        if (!newArr.length) {
          const firstCategory: { category: string; labelList: any[] } = {
            category: "",
            labelList: []
          };
          newArr.push(firstCategory);
          firstCategory.category = item.category;
          firstCategory.labelList = [item];
          return;
        }

        const index = newArr.findIndex(
          newItem => newItem.category === item.category
        );

        if (index === -1) {
          const itemCategory: { category: string; labelList: any[] } = {
            category: "",
            labelList: []
          };
          newArr.push(itemCategory);
          itemCategory.category = item.category;
          itemCategory.labelList = [item];
        } else {
          const itemCategory = newArr[index];
          itemCategory.labelList.push(item);
        }
      });
      previewData.value = newArr;
      previewVisible.value = true;
      console.log(newArr);
    };
    //onPreview();
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
      onSaveComponent,
      onPreview,
      previewData,
      previewVisible
    };
  }
});
</script>
