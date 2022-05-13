import { defineComponent, reactive, ref, PropType } from "vue";
import { i18n } from "/@/plugins/i18n";
import { Plus, Delete, Bottom, Cloudy } from "@element-plus/icons-vue";
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
    const deleteItem = (index: number) => {
      props.previewData.splice(index, 1);
    };
    return () => {
      const { previewData } = props;
      console.log("render");
      return (
        <div class="ym-render-template">
          <YmForm labelWidth="120px" ref={el => (formRef.value = el)}>
            {previewData.map((item, index) => {
              return (
                <div class="ym-render-template-item">
                  <div class="ym-padding-large ym-flex ym-flex-jc-sb ym-flex-ai-center ym-bg-primary">
                    <span class="ym-color-white">{item.category}</span>
                    <el-popconfirm
                      title={`${i18n.global.t("buttons.delete")}?`}
                      onConfirm={() => deleteItem(index)}>
                      {{
                        reference: () => (
                          <el-icon>
                            <Delete color="#fff" />
                          </el-icon>
                        )
                      }}
                    </el-popconfirm>
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

const CustomTable = defineComponent({
  props: {
    data: {
      type: Object as PropType<TemplateAttr>,
      required: true
    }
  },
  setup(props) {
    const tableRef = ref();
    const selectedIndexs = reactive([]);
    const { dropdown_table_value } = props.data;
    const keys = dropdown_table_value.split(",");
    const addColumn = () => {
      const tableData = props.data.value;
      const aData = {};
      keys.forEach(key => (aData[key] = ""));
      tableData.push(aData);
      tableRef.value.reloadData(tableData);
    };
    const deleteColumn = () => {
      const tableData = props.data.value;
      selectedIndexs.forEach((item: number) => {
        tableData.splice(item, 1);
      });
      selectedIndexs.length = 0;
      tableRef.value.reloadData(tableData);
    };
    const selectChangeEvent = ({ rowIndex }) => {
      const index = selectedIndexs.indexOf(rowIndex);
      if (index === -1) {
        selectedIndexs.push(rowIndex);
      } else {
        selectedIndexs.splice(index, 1);
      }
    };
    return () => {
      const { data } = props;
      return (
        <>
          <div class="ym-padding-default-y">
            <el-button
              type="primary"
              icon={Plus}
              size="small"
              class="ym-custor-pointer"
              onClick={addColumn}
            />
            <el-button
              type="danger"
              icon={Delete}
              size="small"
              class="ym-custor-pointer"
              disabled={!selectedIndexs.length}
              onClick={deleteColumn}>
              {JSON.stringify(selectedIndexs)}
            </el-button>
            <el-button
              type="primary"
              icon={Bottom}
              size="small"
              class="ym-custor-pointer"
            />
            <el-button
              type="info"
              icon={Cloudy}
              size="small"
              class="ym-custor-pointer"
            />
          </div>
          <vxe-table
            data={data.value}
            ref={el => (tableRef.value = el)}
            onCheckboxChange={selectChangeEvent}>
            <vxe-column type="checkbox" width="60"></vxe-column>
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
    };
  }
});

function getSelectOptions() {
  return new Promise(res => {
    res({
      data: [
        {
          label: "yes",
          value: 1
        },
        {
          label: "no",
          value: 0
        }
      ]
    });
  });
}
function useSelectOptions() {
  const options = ref([]);
  getSelectOptions().then((res: { data: Array<any> }) => {
    options.value = res.data;
  });
  return options;
}
function renderComponent(data: TemplateAttr) {
  const { wdget, dropdown_table_value, label, required, newLine } = data;
  const keys = dropdown_table_value.split(",");
  let isRequired = required == 1;
  let content = null;
  switch (wdget) {
    case "Image":
      isRequired = false;
      content = <img src={dropdown_table_value} />;
      break;
    case "Link":
      isRequired = false;
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
    case "RadioButton":
      content = (
        <el-radio-group v-model={data.value}>
          {keys.map(val => {
            return <el-radio-button label={val} />;
          })}
        </el-radio-group>
      );
      break;
    case "Number":
      content = <el-input-number v-model={data.value} />;
      break;
    case "Button":
      isRequired = false;
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
    case "DateTimeRange":
      content = (
        <el-date-picker
          type="datetimerange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          placeholder="Pick a day"
          v-model={data.value}
        />
      );
      break;
    case "TimePicker":
      content = (
        <el-time-picker
          is-range
          arrow-control
          placeholder="Pick a day"
          v-model={data.value}
        />
      );
      break;
    case "Select":
      const options = useSelectOptions();
      console.log(219, options);
      content = (
        <el-select v-model={data.value} filterable clearable>
          {keys.map(val => {
            return <el-option label={val} key={val} value={val}></el-option>;
          })}
        </el-select>
      );
      break;
    case "Table":
      return <CustomTable data={data} />;
    default:
      break;
  }
  return (
    <YmFormItem
      block={newLine}
      label={label}
      value={data.value}
      rule={{ required: isRequired }}>
      {content}
    </YmFormItem>
  );
}

function createTable(data: TemplateAttr) {
  const tableRef = ref();
  const selectedIndexs = reactive([]);
  console.log(90, selectedIndexs);
  const { dropdown_table_value } = data;
  const keys = dropdown_table_value.split(",");
  const addColumn = () => {
    const tableData = data.value;
    const aData = {};
    keys.forEach(key => (aData[key] = ""));
    tableData.push(aData);
    tableRef.value.reloadData(tableData);
  };
  const deleteColumn = () => {
    const tableData = data.value;
    selectedIndexs.forEach((item: number) => {
      tableData.splice(item, 1);
    });
    selectedIndexs.length = 0;
    tableRef.value.reloadData(tableData);
    console.log(selectedIndexs);
  };
  const selectChangeEvent = ({ rowIndex }) => {
    selectedIndexs.push(rowIndex);

    setTimeout(() => {
      console.log(selectedIndexs);
    }, 1000);
  };
  return (
    <>
      <div class="ym-padding-default-y">
        <el-button
          type="primary"
          icon={Plus}
          size="small"
          class="ym-custor-pointer"
          onClick={addColumn}
        />
        <el-button
          type="danger"
          icon={Delete}
          size="small"
          class="ym-custor-pointer"
          disabled={!selectedIndexs.length}
          onClick={deleteColumn}>
          {JSON.stringify(selectedIndexs)}
        </el-button>
        <el-button
          type="primary"
          icon={Bottom}
          size="small"
          class="ym-custor-pointer"
        />
        <el-button
          type="info"
          icon={Cloudy}
          size="small"
          class="ym-custor-pointer"
        />
      </div>
      <vxe-table
        data={data.value}
        ref={el => (tableRef.value = el)}
        onCheckboxChange={selectChangeEvent}>
        <vxe-column type="checkbox" width="60"></vxe-column>
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
