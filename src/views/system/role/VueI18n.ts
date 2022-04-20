import { ref, Ref } from "vue";

type langType = "zh" | "en";
type LangItemType = {
  [key: string]: string | LangItemType;
};
type LangListType = {
  [key in langType]: LangItemType;
};

type VueL18nOption = {
  lang: langType;
  langList: LangListType;
};
class VueI18n {
  lang: Ref<langType>;
  langList: LangListType;
  constructor(option: VueL18nOption) {
    this.lang = ref(option.lang);
    this.langList = option.langList;
  }
  $tl(keyStr: string) {
    try {
      const lang = this.lang.value;
      const langItem = this.langList[lang];
      return keyStr.split(".").reduce((o, k) => o[k], langItem);
    } catch (err) {
      console.log(err);
    }
    return "";
  }
  addLang(langList: LangListType) {
    this.mergeLangList(langList);
  }
  mergeLangList(langList: LangListType) {
    const { zh: currentZh, en: currentEn } = this.langList;
    const { zh, en } = langList;
    this.langList = langList;
  }
}

const initLang = "zh";

const langList = {
  zh: {
    button: {
      yes: "确定",
      no: "取消",
      add: "新增",
      query: "查询",
      edit: "编辑",
      delete: "删除"
    },
    label: {
      other: "其它",
      roleName: "角色名"
    }
  },
  en: {
    button: {
      yes: "Yes",
      no: "No",
      add: "Add",
      query: "Query",
      edit: "Edit",
      delete: "Delete"
    },
    label: {
      other: "Other",
      roleName: "Role name"
    }
  }
};
const vL18n = new VueI18n({
  lang: initLang,
  langList: langList
});

export default vL18n;

function mergeLangMap(sourceLangMap, newLangMap) {
  for (let k in newLangMap) {
    const val = sourceLangMap[k];
    if (val) {
    }
  }
}
