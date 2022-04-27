<template>
  <div>
    <div class="ym-padding-default ym-margin-default-y">
      <el-form
        ref="componentFormRef"
        :model="componentForm"
        :inline="true"
        :rules="componentFormRules"
        label-width="120px"
        size="small"
      >
        <el-form-item prop="category" label="Category">
          <el-input
            v-model="componentForm.category"
            style="width: 150px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="label" label="Item Name">
          <el-input
            v-model="componentForm.label"
            style="width: 150px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="unit" label="Unit">
          <el-input
            v-model="componentForm.unit"
            style="width: 150px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="value" label="Item Value">
          <el-input
            v-model="componentForm.value"
            style="width: 150px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="wdget" label="Wdget">
          <el-select style="width: 150px" v-model="componentForm.wdget">
            <el-option
              v-for="item in componentTypeList"
              :key="item.dicTxt"
              :label="item.dicTxt"
              :value="item.dicId"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="dropdown_table_value" label="Version">
          <el-input
            style="width: 150px"
            v-model="componentForm.dropdown_table_value"
          ></el-input>
        </el-form-item>
        <el-form-item prop="required" label="Required">
          <el-select style="width: 150px" v-model="componentForm.required">
            <el-option label="Yes" value="1" />
            <el-option label="No" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item prop="editable" label="Editable">
          <el-select style="width: 150px" v-model="componentForm.editable">
            <el-option label="Yes" value="1" />
            <el-option label="No" value="0" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="ym-flex ym-flex-jc-end">
      <el-button size="small" @click="$emit('cancel')">取消</el-button>
      <el-button type="primary" size="small" @click="onSave">保存</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useComponentTypeList } from "./../useData";
export default defineComponent({
  emits: ["cancel", "confirm"],
  setup(props, { emit }) {
    const componentForm = reactive({
      category: "",
      label: "",
      unit: "",
      value: "",
      wdget: "",
      dropdown_table_value: "",
      required: "",
      editable: ""
    });
    const componentFormRules = reactive({
      category: {
        required: true,
        message: "category为必填！",
        trigger: "blur"
      },
      label: {
        required: true,
        message: "label为必填！",
        trigger: "blur"
      },
      wdget: {
        required: true,
        message: "wdget为必填！",
        trigger: "blur"
      },
      dropdown_table_value: {
        required: true,
        message: "dropdown_table_value为必填！",
        trigger: "blur"
      },
      required: {
        required: true,
        message: "required为必填！",
        trigger: "blur"
      },
      editable: {
        required: true,
        message: "editable为必填！",
        trigger: "blur"
      }
    });

    const componentFormRef = ref();

    const [componentTypeList] = useComponentTypeList();
    const onSave = () => {
      componentFormRef.value.validate((valid, fields) => {
        if (valid) {
          try {
            console.log("submit!");
            emit("confirm", componentForm);
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    return {
      componentForm,
      componentFormRules,
      componentFormRef,
      componentTypeList,
      onSave
    };
  }
});
</script>
