<template>
  <div>
    <div class="ym-margin-large ym-bg-white ym-br-large">
      <div>
        <div class="ym-margin-default-y">
          <el-form
            :inline="true"
            :model="formInline"
            size="small"
            ref="searchFormRef"
          >
            <el-form-item label="Role Name" prop="name">
              <el-input v-model="formInline.name" placeholder="Role Name" />
            </el-form-item>
            <el-form-item label="Role Code" prop="rolekey">
              <el-input placeholder="Role Code" v-model="formInline.rolekey" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="onQuery">{{
                $t("buttons.search")
              }}</el-button>
              <el-button type="primary" size="small" @click="onReset">{{
                $t("buttons.reset")
              }}</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <!-- v-buttonPermissions="{ route: $route, type: 'edit' }" -->
          <el-button type="primary" size="small" @click="addRole">{{
            $t("buttons.hsadd")
          }}</el-button>
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
            <el-form-item label="Role Name" prop="name">
              <el-input v-model="roleForm.name" placeholder="Role Name" />
            </el-form-item>
            <el-form-item label="Role Code" prop="rolekey">
              <el-input v-model="roleForm.rolekey" placeholder="Role Code" />
            </el-form-item>
            <el-form-item label="description" prop="description">
              <el-input
                type="textarea"
                v-model="roleForm.description"
                placeholder=""
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
import { ref, reactive, nextTick } from "vue";
import { useRoles, useRoutes } from "./useData";
import { generateTree, deepClone } from "./utils";

const [roles] = useRoles([], function load(value) {
  console.log(roles);
});

const searchFormRef = ref();
const formInline = reactive({
  name: "",
  rolekey: ""
});
const onReset = () => {
  searchFormRef.value.resetFields();
};
const onQuery = () => {};

const dialogVisible = ref(false);
const dialogType = ref("Add");
const dialogTitle = dialogType;
const roleFormRef = ref();
const roleTreeRef = ref();
const roleFormRules = reactive({
  name: {
    required: true,
    message: "Role Name is required",
    trigger: "blur"
  },
  rolekey: {
    required: true,
    message: "Role Key is required",
    trigger: "blur"
  }
});

const roleForm = reactive({
  name: "",
  rolekey: "",
  description: ""
});
const addRole = () => {
  dialogTitle.value = "Add";
  dialogVisible.value = true;
  nextTick(() => {
    roleTreeRef.value.setCheckedKeys([]);
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

const [menuList] = useRoutes([]);
const onSubmit = () => {
  roleFormRef.value.validate((valid, fields) => {
    if (valid) {
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
