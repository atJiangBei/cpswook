import { watch, ref } from "vue";
import jsonData from "./json";

import { getTemplateList } from "/@/api/system/template";

const getTableData = async pageData => {
  const { pageSize, page } = pageData;
  // const list = jsonData.data.slice(pageSize * (page - 1), pageSize * page);
  // jsonData.list = list;
  // return Promise.resolve(jsonData);
  return await getTemplateList({
    is_del: 0,
    limit: pageSize,
    page: page
  }).then((res: any) => {
    console.log(res);
    const { data } = res;
    return {
      list: data.data,
      total: data.total
    };
  });
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
