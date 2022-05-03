<template>
  <div class="ym-bg-white">
    <div class="ym-margin-large" style="min-height: 480px">
      <div class="ym-margin-default-y">
        <el-button size="small" type="primary" @click="addChild(null, null)">
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
                <el-popconfirm
                  :title="`${$t('buttons.delete')}?`"
                  @confirm="deleteItem(node, data)"
                >
                  <template #reference>
                    <el-icon color="#f56c6c">
                      <delete />
                    </el-icon>
                  </template>
                </el-popconfirm>
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
              <el-radio :label="1" v-if="!!currentItem">菜单</el-radio>
              <el-radio
                :label="2"
                v-if="!!currentItem && currentItem.type === 1"
                >按钮权限</el-radio
              >
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
              <el-radio label="confirm">{{ $t("buttons.confirm") }}</el-radio>
              <el-radio label="delete">{{ $t("buttons.delete") }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Title" prop="title">
            <el-input
              v-model="menuItemForm.title"
              placeholder="For example：Templatele"
            />
          </el-form-item>
          <el-form-item label="Name" prop="name" v-if="menuItemForm.type !== 2">
            <!-- <el-col :span="20">
              <el-input
                v-model="menuItemForm.name"
                placeholder="For example：system-template"
              />
            </el-col>
            <el-col :span="4" class="ym-text-align-center">
              <el-icon class="ym-custor-pointer"><warning /></el-icon>
            </el-col> -->
            <el-input
              v-model="menuItemForm.name"
              placeholder="For example：system-template"
            />
          </el-form-item>
          <el-form-item label="Path" prop="path">
            <el-input
              v-model="menuItemForm.path"
              placeholder="For example：/system/template/index"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="dialogVisible = false">
              {{ $t("buttons.cancel") }}
            </el-button>
            <el-button type="primary" @click="onSubmit">
              {{ $t("buttons.confirm") }}
            </el-button>
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
    message: "Title is required",
    trigger: "blur"
  },
  name: {
    required: true,
    message: "Name is required",
    trigger: "blur"
  },
  path: {
    required: true,
    message: "Path is required",
    trigger: "blur"
  },
  type: {
    required: true,
    message: "Type is required",
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
const currentItem = ref(null);
let actionType = "";
const addChild = (node, data) => {
  dialogVisible.value = true;
  actionType = "add";
  currentItem.value = data;
  console.log(data);
  nextTick(() => {
    menuItemFormRef.value.resetFields();
  });
};
const editItem = (node, data) => {
  dialogVisible.value = true;
  actionType = "edit";
  currentItem.value = data;
};
const deleteItem = (node, data) => {
  console.log("delete", data);
};
const onSubmit = () => {
  menuItemFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      //dialogVisible.value = false;
      try {
        if (actionType === "add") {
          if (!currentItem.value) {
            return;
          }
          if (!currentItem.children) {
            currentItem.children = [];
          }
          currentItem.children.push({
            ...menuItemForm
          });
          console.log(menuItemForm);
          return;
        }
        if (actionType === "edit") {
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
};
</script>
