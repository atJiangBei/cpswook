<script lang="tsx">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "ym-render-template",
  props: {
    previewData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const tableRef = ref();
    const addTableColumn = (tableData, keys) => {
      const aData = {};
      keys.forEach(key => (aData[key] = ""));
      tableData.push(aData);
      tableRef.value.reloadData(tableData);
      console.log(tableData);
    };
    const renderComponent = data => {
      const { wdget, dropdown_table_value, label } = data;
      const options = dropdown_table_value.split(",");
      switch (wdget) {
        case "DateTime":
          return (
            <>
              <label>{label}</label>
              <el-date-picker
                type="datetime"
                placeholder="Pick a day"
                v-model={data.value}
              />
              ;
            </>
          );
        case "Date":
          return (
            <>
              <label>{label}</label>
              <el-date-picker
                type="date"
                placeholder="Pick a day"
                v-model={data.value}
              />
              ;
            </>
          );
        case "Dropdown":
          return (
            <>
              <label>{label}</label>
              <el-select v-model={data.value}>
                {options.map(val => {
                  return (
                    <el-option label={val} key={val} value={val}></el-option>
                  );
                })}
              </el-select>
            </>
          );
        case "Table":
          return (
            <>
              <div class="ym-padding-default-y">
                <el-icon
                  class="ym-custor-pointer"
                  onClick={() => {
                    addTableColumn(data.value, options);
                  }}>
                  <Plus />
                </el-icon>
              </div>
              <vxe-table data={data.value} ref={el => (tableRef.value = el)}>
                <vxe-column type="seq" width="60"></vxe-column>
                {options.map(val => {
                  return (
                    <vxe-column field={val} key={val} title={val}></vxe-column>
                  );
                })}
              </vxe-table>
            </>
          );
        default:
          break;
      }
    };
    return () => {
      const { previewData } = props;
      return (
        <div class="ym-render-template">
          {previewData.map(item => {
            return (
              <div class="ym-render-template-item">
                <div class="ym-padding-default ym-flex ym-flex-jc-sb ym-flex-ai-center ym-bg-blue">
                  <span class="ym-color-white">{item.category}</span>
                  <el-icon>
                    <Delete color="#fff" />
                  </el-icon>
                </div>
                <div class="ym-padding-default">
                  {item.labelList.map(item2 => {
                    return renderComponent(item2);
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  }
});
</script>
