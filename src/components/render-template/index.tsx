import { defineComponent, reactive, ref, PropType } from "vue";
import { Plus, Delete } from "@element-plus/icons-vue";
import YmForm from "./components/form/index.vue";
import YmFormItem from "./components/form-item/index.vue";

type TemplateAttr = {
  category: string;
  wdget: string;
  label: string;
  dropdown_table_value: string;
  required: number;
  editable: number;
  newLine: boolean;
  value: any;
};
type PreviewItem = {
  category: "Info";
  labelList: Array<TemplateAttr>;
};
type PreviewDataType = PreviewItem[];
export default defineComponent({
  name: "ym-render-template",
  props: {
    previewData: {
      type: Array as PropType<PreviewDataType>,
      default: () => []
    }
  },
  setup(props) {
    const formRef = ref();
    const onSave = () => {
      formRef.value.validate(function (valid, msgData) {
        console.log(props.previewData);
        if (valid) {
          console.log("验证通过");
        } else {
          console.log(msgData);
        }
      });
    };

    return () => {
      const { previewData } = props;
      return (
        <div class="ym-render-template">
          <YmForm labelWidth="100px" ref={el => (formRef.value = el)}>
            {previewData.map(item => {
              return (
                <div class="ym-render-template-item">
                  <div class="ym-padding-large ym-flex ym-flex-jc-sb ym-flex-ai-center ym-bg-blue">
                    <span class="ym-color-white">{item.category}</span>
                    <el-icon>
                      <Delete color="#fff" />
                    </el-icon>
                  </div>
                  <div class="ym-padding-large">
                    {item.labelList.map(templateAttr => {
                      return renderComponent(templateAttr);
                    })}
                  </div>
                </div>
              );
            })}
          </YmForm>
          <div class="ym-padding-large">
            <el-button size="small" onClick={onSave}>
              save
            </el-button>
          </div>
        </div>
      );
    };
  }
});

function createTable(data: TemplateAttr) {
  const tableRef = ref();
  const { dropdown_table_value } = data;
  const keys = dropdown_table_value.split(",");
  const addColumn = () => {
    const tableData = data.value;
    const aData = {};
    keys.forEach(key => (aData[key] = ""));
    tableData.push(aData);
    tableRef.value.reloadData(tableData);
  };
  return (
    <>
      <div class="ym-padding-default-y">
        <el-icon class="ym-custor-pointer" onClick={addColumn}>
          <el-button type="primary" icon={Plus} size="small" />
        </el-icon>
      </div>
      <vxe-table data={data.value} ref={el => (tableRef.value = el)}>
        <vxe-column type="seq" width="60"></vxe-column>
        {keys.map(val => {
          return (
            <vxe-column key={val} field={val} title={val}>
              {{
                default: ({ row }) => {
                  return <el-input v-model={row[val]}></el-input>;
                }
              }}
            </vxe-column>
          );
        })}
      </vxe-table>
    </>
  );
}

function renderComponent(data: TemplateAttr) {
  const { wdget, dropdown_table_value, label, required, newLine } = data;
  const keys = dropdown_table_value.split(",");
  let content = null;
  switch (wdget) {
    case "Image":
      content = <img src={dropdown_table_value} />;
      break;
    case "Link":
      content = (
        <el-link type="primary" href={dropdown_table_value} target="_blank">
          {label}
        </el-link>
      );
      break;
    case "Input":
      content = <el-input type="text" v-model={data.value}></el-input>;
      break;
    case "Textarea":
      content = <el-input type="textarea" v-model={data.value}></el-input>;
      break;
    case "Checkbox":
      content = (
        <el-checkbox-group v-model={data.value}>
          {keys.map(val => {
            return <el-checkbox label={val} />;
          })}
        </el-checkbox-group>
      );
      break;
    case "Radio":
      content = (
        <el-radio-group v-model={data.value}>
          {keys.map(val => {
            return <el-radio label={val} />;
          })}
        </el-radio-group>
      );
      break;
    case "Number":
      content = <el-input-number v-model={data.value} />;
      break;
    case "Button":
      content = (
        <el-button type="primary" placeholder="Pick a day">
          {dropdown_table_value + ""}
        </el-button>
      );
      break;
    case "DateTime":
      content = (
        <el-date-picker
          type="datetime"
          placeholder="Pick a day"
          v-model={data.value}
        />
      );
      break;
    case "Date":
      content = (
        <el-date-picker
          type="date"
          placeholder="Pick a day"
          v-model={data.value}
        />
      );
      break;
    case "Select":
      content = (
        <el-select v-model={data.value} filterable clearable>
          {keys.map(val => {
            return <el-option label={val} key={val} value={val}></el-option>;
          })}
        </el-select>
      );
      break;
    case "Table":
      return createTable(data);
    default:
      break;
  }
  return (
    <YmFormItem
      block={newLine}
      label={label}
      value={data.value}
      rule={{ required: required == 1 }}>
      {content}
    </YmFormItem>
  );
}
