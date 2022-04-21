<template>
  <div class="ym-bg-white">
    <div class="ym-margin-large" style="min-height: 480px">
      <div class="ym-margin-default-y">
        <el-button size="small" type="primary" @click="addChild(node, data)">
          {{ $t("buttons.add") }}
        </el-button>
      </div>
      <div>
        <el-tree
          ref="roleTreeRef"
          :data="menuList"
          :props="defaultProps"
          node-key="path"
          default-expand-all
          :expand-on-click-node="false"
          show-checkbox
        >
          <template #default="{ node, data }">
            <div class="ym-flex ym-flex-jc-sb ym-flex-1">
              <span>{{ $t(node.label) }}</span>
              <span style="margin-right: 20px">
                <el-icon
                  style="margin-right: 10px"
                  color="#1890ff"
                  @click="addChild(node, data)"
                  v-if="data.type !== 2"
                >
                  <plus />
                </el-icon>
                <el-icon style="margin-right: 10px" color="#1890ff">
                  <edit @click="editItem(node, data)" />
                </el-icon>
                <el-icon color="#f56c6c"><delete /></el-icon>
              </span>
            </div>
          </template>
        </el-tree>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="新增菜单" width="50%">
      <div>
        <el-form
          label-width="120px"
          :model="menuItemForm"
          :rules="menuItemFormRules"
          ref="menuItemFormRef"
        >
          <el-form-item label="菜单类型" prop="type">
            <el-radio-group v-model="menuItemForm.type">
              <el-radio :label="0">目录</el-radio>
              <el-radio :label="1">菜单</el-radio>
              <el-radio :label="2">按钮权限</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="按钮类型"
            prop="buttonType"
            v-if="menuItemForm.type === 2"
          >
            <el-radio-group v-model="menuItemForm.buttonType">
              <el-radio label="add">{{ $t("buttons.add") }}</el-radio>
              <el-radio label="edit">{{ $t("buttons.edit") }}</el-radio>
              <el-radio label="save">{{ $t("buttons.save") }}</el-radio>
              <el-radio label="delete">{{ $t("buttons.delete") }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="菜单名" prop="title">
            <el-input
              v-model="menuItemForm.title"
              placeholder="菜单名->例如：用户管理"
            />
          </el-form-item>
          <el-form-item label="Name" prop="name" v-if="menuItemForm.type !== 2">
            <el-col :span="20">
              <el-input v-model="menuItemForm.name" placeholder="Route Name" />
            </el-col>
            <el-col :span="4" class="ym-text-align-center">
              <el-icon class="ym-custor-pointer"><warning /></el-icon>
            </el-col>
          </el-form-item>
          <el-form-item label="路径" prop="path">
            <el-input v-model="menuItemForm.path" placeholder="路径" />
          </el-form-item>
          <el-form-item label="菜单是否显示" prop="showLink">
            <el-radio-group v-model="menuItemForm.showLink">
              <el-radio :label="true">显示</el-radio>
              <el-radio :label="false">隐藏</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
export default {
  name: "system-menus"
};
</script>
<script lang="ts" setup>
import { defineComponent, ref, reactive, nextTick } from "vue";
import { useRoles, useRoutes } from "./../role/useData";

const menuItemFormRef = ref();
const menuItemFormRules = reactive({
  title: {
    required: true,
    message: "label为必填项",
    trigger: "blur"
  },
  name: {
    required: true,
    message: "name为必填项",
    trigger: "blur"
  },
  path: {
    required: true,
    message: "path为必填项",
    trigger: "blur"
  },
  type: {
    required: true,
    message: "type为必选项",
    trigger: "blur"
  },
  showLink: {
    required: true,
    trigger: "blur"
  },
  buttonType: {
    required: true,
    trigger: "blur"
  }
});

const menuItemForm = reactive({
  title: "",
  name: "",
  path: "",
  type: "",
  showLink: true,
  buttonType: ""
});
const dialogVisible = ref(false);
const defaultProps = {
  children: "children",
  label: "title",
  disabled: "disabled"
};
const [menuList] = useRoutes([], () => {
  console.log(112, menuList.value);
});
const currentItem = reactive({});
let actionType = "";
const addChild = (node, data) => {
  actionType = "add";
  dialogVisible.value = true;
  console.log(node);
  console.log(data);
  currentItem.value = data;
  nextTick(() => {
    menuItemFormRef.value.resetFields();
  });
};
const editItem = (node, data) => {
  actionType = "edit";
  currentItem.value = data;
};
const onSubmit = () => {
  menuItemFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      //dialogVisible.value = false;
      try {
        if (actionType === "add") {
          if (!currentItem.children) {
            currentItem.children = [];
          }
          currentItem.children.push({
            ...menuItemForm
          });
          console.log();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
