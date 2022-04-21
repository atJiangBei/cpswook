import { watch, ref } from "vue";
import jsonData from "./json";

const getTableData = pageData => {
  const { pageSize, page } = pageData;
  const list = jsonData.data.slice(pageSize * (page - 1), pageSize * page);
  jsonData.list = list;
  return Promise.resolve(jsonData);
};

export const useTableData = pageData => {
  const tableData = ref([]);

  const getData = () => {
    getTableData(pageData).then(res => {
      const { list, total } = res;
      tableData.value = list;
      pageData.total = total;
    });
  };

  watch(() => [pageData.page, pageData.pageSize], getData, {
    immediate: true
  });
  return [tableData, getData];
};
