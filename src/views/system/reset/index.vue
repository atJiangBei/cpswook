<template>
  <div style="background-color: #fff">
    <RadioGroup></RadioGroup>
    <div class="ym-padding-default unified">
      <div class="ym-padding-default">
        <div class="ym-padding-small-y">
          <el-button type="primary">primary</el-button>
          <el-button type="success">success</el-button>
          <el-button type="warning">warning</el-button>
        </div>
        <div class="ym-padding-small-y">
          <el-button type="primary" :icon="Edit">primary</el-button>
          <el-button type="success" :icon="Edit">success</el-button>
          <el-button type="warning" :icon="Edit">warning</el-button>
        </div>
        <div class="ym-padding-small-y">
          <el-button type="primary" disabled>primary</el-button>
          <el-button type="success" disabled>success</el-button>
          <el-button type="warning" disabled>warning</el-button>
        </div>
      </div>
      <el-form :model="formModel" :rules="formRules" label-width="120px">
        <el-form-item prop="username" label="user name">
          <el-input
            placeholder="user name"
            v-model="formModel.username"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="password">
          <el-input
            v-model="formModel.password"
            placeholder="password"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="describe" label="describe">
          <el-input
            v-model="formModel.describe"
            type="textarea"
            placeholder="describe"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="radio1" label="单选框">
          <el-radio-group v-model="formModel.radio1">
            <el-radio label="0">未选中项</el-radio>
            <el-radio label="1">未选悬停项</el-radio>
            <el-radio label="2">选中项</el-radio>
            <el-radio label="3" disabled>未选禁用项</el-radio>
            <el-radio label="4" disabled>选中禁用项</el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item prop="checkout1" label="复选框">
          <el-checkbox-group v-model="formModel.checkout1">
            <el-checkbox label="0">未选中项</el-checkbox>
            <el-checkbox label="1">未选悬停项</el-checkbox>
            <el-checkbox label="2">选中项</el-checkbox>
            <el-checkbox label="3" disabled>未选禁用项</el-checkbox>
            <el-checkbox label="4" disabled>选中禁用项</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item prop="year" label="年份选择">
          <el-date-picker
            v-model="formModel.year"
            type="year"
            placeholder="Pick a year"
          />
        </el-form-item>
        <el-form-item prop="month" label="月份选择">
          <el-date-picker
            v-model="formModel.month"
            type="month"
            placeholder="Pick a month"
          />
        </el-form-item>
        <el-form-item prop="daterange" label="日区间">
          <el-date-picker
            v-model="formModel.daterange"
            type="daterange"
            range-separator="-"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>
        <el-form-item prop="datetimerange" label="日区间-时间">
          <el-date-picker
            v-model="formModel.datetimerange"
            type="datetimerange"
            range-separator="-"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>
        <el-form-item prop="dates" label="日期时间选择">
          <el-date-picker
            v-model="formModel.date"
            type="date"
            range-separator="-"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>
        <el-form-item prop="time" label="时间选择">
          <el-time-picker
            v-model="formModel.time"
            placeholder="Arbitrary time"
          />
        </el-form-item>
        <el-form-item prop="selectSingle" label="单选选择器">
          <el-select v-model="formModel.selectSingle" placeholder="Select">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              {{ item.label }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="selectMultiple" label="多选选择器">
          <el-select
            v-model="formModel.selectMultiple"
            multiple
            placeholder="Select"
          >
            <el-option
              v-for="item in cities2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="groupSelector" label="分组选择器">
          <el-select v-model="formModel.groupSelector" placeholder="Select">
            <el-option-group
              v-for="group in groupSelectorOptions"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-option-group>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
import { Edit } from "@element-plus/icons-vue";
import RadioGroup from "./radio-group.vue";
const formModel = reactive({
  username: "",
  password: "",
  describe: "",
  radio1: "4",
  checkout1: ["4"],
  year: "",
  month: "",
  daterange: "",
  datetimerange: "",
  date: "",
  time: "",
  selectSingle: "",
  selectMultiple: "",
  groupSelector: ""
});
const formRules = reactive({
  username: {
    required: true
  },
  password: {
    required: true
  },
  describe: {
    required: true
  }
});
const cities = [
  {
    value: "Beijing",
    label: "Beijing"
  },
  {
    value: "Shanghai",
    label: "Shanghai"
  },
  {
    value: "Nanjing",
    label: "Nanjing"
  }
];
const cities2 = [
  {
    value: "Beijing",
    label: "Beijing"
  },
  {
    value: "Shanghai",
    label: "Shanghai"
  },
  {
    value: "Nanjing",
    label: "Nanjing"
  }
];
const groupSelectorOptions = [
  {
    label: "Popular cities",
    options: [
      {
        value: "Shanghai",
        label: "Shanghai"
      },
      {
        value: "Beijing",
        label: "Beijing"
      }
    ]
  },
  {
    label: "City name",
    options: [
      {
        value: "Chengdu",
        label: "Chengdu"
      },
      {
        value: "Shenzhen",
        label: "Shenzhen"
      },
      {
        value: "Guangzhou",
        label: "Guangzhou"
      },
      {
        value: "Dalian",
        label: "Dalian"
      }
    ]
  }
];
</script>
<style lang="scss">
@import "./index.scss";
</style>
