<template>
  <div class="radio-test-0">
    <div class="ym-padding-default">
      <el-radio-group v-model="radio0">
        <el-radio label="0">未选中项</el-radio>
        <el-radio label="1">未选悬停项</el-radio>
        <el-radio label="2">选中项</el-radio>
        <el-radio label="3" disabled>未选禁用项</el-radio>
        <el-radio label="4" disabled>选中禁用项</el-radio>
      </el-radio-group>
    </div>
    <div class="ym-padding-default radio-test-1">
      <el-radio-group v-model="radio1">
        <el-radio-button label="选项一" />
        <el-radio-button label="选项二" />
        <el-radio-button label="选项三" />
        <el-radio-button label="选项四" disabled />
        <el-radio-button label="选项五" disabled />
      </el-radio-group>
    </div>
    <div class="ym-padding-default radio-test-2">
      <el-radio-group v-model="radio2">
        <el-radio-button label="选项一" />
        <el-radio-button label="选项二" />
        <el-radio-button label="选项三" />
        <el-radio-button label="选项四" />
        <el-radio-button label="选项五" disabled />
      </el-radio-group>
    </div>
    <div class="ym-padding-default radio-test-3">
      <el-radio-group v-model="radio3">
        <el-radio-button label="选项一" />
        <el-radio-button label="选项二" />
        <el-radio-button label="选项三" />
        <el-radio-button label="选项四" />
        <el-radio-button label="选项五" disabled />
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const radio0 = ref("4");
const radio1 = ref("选项五");
const radio2 = ref("选项五");
const radio3 = ref("选项五");
</script>

<style lang="scss">
.radio-test-0 {
  .el-radio {
    --el-radio-font-size: var(--el-font-size-base);
    --el-radio-text-color: rgba(0, 0, 0, 0.9);
    --el-radio-font-weight: 400;
    --el-radio-input-height: 16px;
    --el-radio-input-width: 16px;
    --el-radio-input-bg-color: var(--el-color-white);
    --el-radio-input-border: 1px solid #dcdcdc;
    --el-radio-input-border-color: #dcdcdc;
    --el-radio-input-border-color-hover: #0052d9;
  }
  .el-radio__inner {
    width: 16px;
    height: 16px;
  }
  .el-radio__inner::after {
    width: 8px;
    height: 8px;
    background-color: #0052d9;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #0052d9;
    background: rgba(255, 255, 255, 0.9);
  }

  .el-radio__input.is-disabled .el-radio__inner {
    background-color: #eeeeee;
    border-color: #dcdcdc;
  }
  .el-radio__input.is-disabled.is-checked .el-radio__inner::after {
    background-color: rgba(0, 0, 0, 0.26);
  }
  .el-radio__input.is-disabled + span.el-radio__label {
    color: rgba(0, 0, 0, 0.26);
  }
  .radio-test-1 {
    .el-radio-button__original-radio:checked + .el-radio-button__inner {
      color: #0052d9;
      background-color: #fff;
      border-color: #0052d9;
      box-shadow: -0.5px 0 0 0 #0052d9;
    }
    .el-radio-button:first-child .el-radio-button__inner {
      border-left: 1px solid #dcdcdc;
      border-radius: 3px 0 0 3px;
      box-shadow: none !important;
    }
    .el-radio-button__inner {
      color: rgba(0, 0, 0, 0.6);
      border: 1px solid #dcdcdc;
      background-color: #fff;
      &:hover {
        color: #0052d9;
      }
    }
    .el-radio-button__original-radio:disabled + .el-radio-button__inner {
      color: rgba(0, 0, 0, 0.6);
      background-image: none;
      background-color: #eeeeee;
      border-color: #dcdcdc;
      box-shadow: none;
    }
    .el-radio-button {
      &.is-active {
        .el-radio-button__original-radio:checked + .el-radio-button__inner {
          color: #0052d9;
          background-color: #fff;
          border-color: #0052d9;
          box-shadow: -0.5px 0 0 0 #0052d9;
        }
      }
      &.is-active.is-disabled {
        .el-radio-button__original-radio:checked + .el-radio-button__inner {
          color: #bbd3fb;
          background-color: #fff;
          border-color: #d4e3fc;
          box-shadow: -0.5px 0 0 0 #d4e3fc;
        }
      }
    }
    .el-radio-button:last-child .el-radio-button__inner {
      border-radius: 0 3px 3px 0;
    }
  }
}
</style>
