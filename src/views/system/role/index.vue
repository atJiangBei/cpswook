<template>
  <div>
    <div class="ym-margin-large ym-bg-white ym-br-large">
      <div>
        <div>
          <!-- v-buttonPermissions="{ route: $route, type: 'edit' }" -->
          <el-button type="primary" @click="addRole">{{
            $t("buttons.hsadd")
          }}</el-button>
        </div>
        <div class="ym-margin-large-y">
          <el-form :inline="true" :model="formInline">
            <el-form-item label="roleName">
              <el-input
                v-model="formInline.username"
                placeholder="Approved by"
              />
            </el-form-item>
            <!-- <el-form-item :label="$tl('label.other')">
              <el-select
                v-model="formInline.region"
                placeholder="Activity zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="onQuery">{{
                $t("buttons.hssearch")
              }}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div>
        <el-table :data="roles" style="width: 100%">
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="description" />
          <el-table-column label="Operations">
            <template #default>
              <el-button type="primary" size="small" @click="dispatchEdit">{{
                $t("buttons.hsupdate")
              }}</el-button>
              <el-button type="danger" size="small">{{
                $t("buttons.hsdelete")
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog v-model="dialogVisible" :title="dialogTitle" width="50%">
        <div>
          <el-form
            label-width="120px"
            :model="roleForm"
            :rules="roleFormRules"
            ref="roleFormRef"
          >
            <el-form-item label="角色名" prop="username">
              <el-input v-model="roleForm.username" placeholder="角色名" />
            </el-form-item>
            <el-form-item label="描述" prop="description">
              <el-input
                type="textarea"
                v-model="roleForm.description"
                placeholder="描述"
              />
            </el-form-item>
            <el-form-item label="菜单列表">
              <el-tree
                ref="roleTreeRef"
                :data="menuList"
                :props="defaultProps"
                node-key="path"
                show-checkbox
              >
                <template #default="{ node, data }">
                  <span>{{ $t(node.label) }}</span>
                </template>
              </el-tree>
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
  </div>
</template>
<script lang="ts">
export default {
  name: "system-role"
};
</script>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref, reactive, nextTick, onActivated, onUnmounted } from "vue";
import { useRoles, useRoutes } from "./useData";

import { generateTree, deepClone } from "./utils";
import { getRoleList } from "/@/api/system/role";
getRoleList().then(res => {
  console.log(res);
});
const routePath = useRoute().path;
console.log(routePath);

const [roles] = useRoles([], function load(value) {
  console.log(roles.value);
});

const formInline = reactive({
  username: "",
  region: ""
});

const onQuery = () => {};

const dialogVisible = ref(false);
const dialogType = ref("Add");
const dialogTitle = dialogType;
const roleFormRef = ref();
const roleTreeRef = ref();
const roleFormRules = reactive({
  username: {
    required: true,
    message: "角色名为必填！",
    trigger: "blur"
  },
  description: {
    required: true,
    message: "描述为必填！",
    trigger: "blur"
  }
});

const roleForm = reactive({
  username: "",
  description: ""
});
const addRole = () => {
  dialogTitle.value = "Add";
  dialogVisible.value = true;
  nextTick(() => {
    roleFormRef.value.resetFields();
  });
};
const dispatchEdit = () => {
  dialogTitle.value = "Edit";
  nextTick(() => {
    dialogVisible.value = true;
  });
};
const defaultProps = {
  children: "children",
  label: "title",
  disabled: "disabled"
};
onActivated(() => {
  console.log("onActivated");
});
onUnmounted(() => {
  console.log("onUnmounted role");
});
const [menuList] = useRoutes([]);
const onSubmit = () => {
  roleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      try {
        const checkedKeys = roleTreeRef.value.getCheckedKeys();
        console.log(checkedKeys);
        const arr = generateTree(deepClone(menuList.value), "/", checkedKeys);
        console.log(arr);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
