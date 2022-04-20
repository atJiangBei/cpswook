<template>
  <div class="ym-bg-white">
    <div class="ym-margin-large" style="min-height: 480px">
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
          <el-form-item label="菜单名" prop="label">
            <el-input
              v-model="menuItemForm.label"
              placeholder="菜单名->例如：用户管理"
            />
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
import { defineComponent, ref, reactive } from "vue";
import { useRoles, useRoutes } from "./../role/useData";

const menuItemFormRef = ref();
const menuItemFormRules = reactive({
  label: {
    required: true,
    message: "label为必填项",
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
  }
});

const menuItemForm = reactive({
  label: "",
  path: "",
  type: "",
  showLink: true
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
let currentItem = null;
let actionType = "";
const addChild = (node, data) => {
  actionType = "add";
  dialogVisible.value = true;
  console.log(node);
  console.log(data);
  currentItem = data;
};
const editItem = (node, data) => {
  actionType = "edit";
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
