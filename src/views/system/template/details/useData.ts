import { ref } from "vue";
const buCodeList = [
  { dicTxt: "CLD", dicId: "1008" },
  { dicTxt: "PS", dicId: "1100" },
  { dicTxt: "CCPD", dicId: "1200" },
  { dicTxt: "DSPD", dicId: "1300" },
  { dicTxt: "TPD", dicId: "1400" },
  { dicTxt: "NPP", dicId: "1500" },
  { dicTxt: "DPD", dicId: "1600" },
  { dicTxt: "WXCPS", dicId: "1700" },
  { dicTxt: "AS", dicId: "1800" },
  { dicTxt: "WSW", dicId: "2000" },
  { dicTxt: "QA", dicId: "2001" },
  { dicTxt: "PMS", dicId: "2002" },
  { dicTxt: "Other", dicId: "3000" },
  { dicTxt: "CB", dicId: "6204" },
  { dicTxt: "CB GMP", dicId: "6205" }
];

export function useBuCodeList() {
  const list = ref([]);
  list.value = buCodeList;
  return [list];
}

const templateTypeList = [
  {
    dicDesc: "12",
    itemId: "20002908",
    dictTypeId: "748",
    dicTxt: "Molecule",
    dicId: "1"
  },
  {
    dicDesc: "100",
    itemId: "300031915",
    dictTypeId: "748",
    itemCode: "100",
    dicTxt: "Plasmid Build",
    dicId: "100"
  },
  {
    dicDesc: "",
    itemId: "300031916",
    dictTypeId: "748",
    itemCode: "Bacteria",
    dicTxt: "Bacteria",
    dicId: "101"
  },
  {
    dicDesc: "",
    itemId: "20002948",
    dictTypeId: "748",
    dicTxt: "Insect Cell Expression",
    dicId: "11"
  },
  {
    dicDesc: "",
    itemId: "20002972",
    dictTypeId: "748",
    dicTxt: "PS Mammalian Cell Expression",
    dicId: "12"
  },
  {
    dicDesc: "",
    itemId: "20003076",
    dictTypeId: "748",
    dicTxt: "Biotest",
    dicId: "13"
  },
  {
    dicDesc: "",
    itemId: "20003077",
    dictTypeId: "748",
    dicTxt: "CLD Mammalian Cell Expression",
    dicId: "14"
  },
  {
    dicDesc: "Non-GMP CB",
    itemId: "200031294",
    dictTypeId: "748",
    itemCode: "Non-GMP CB",
    dicTxt: "Non-GMP CB",
    dicId: "17"
  },
  {
    dicDesc: "",
    itemId: "200031428",
    dictTypeId: "748",
    dicTxt: "Reservation",
    dicId: "19"
  },
  {
    dicDesc: "",
    itemId: "200031429",
    dictTypeId: "748",
    dicTxt: "PS QC",
    dicId: "20"
  },
  {
    dicDesc: "",
    itemId: "300031983",
    dictTypeId: "748",
    dicTxt: "PS_Harvest",
    dicId: "200"
  },
  {
    dicDesc: "",
    itemId: "300031984",
    dictTypeId: "748",
    dicTxt: "PS_Purification",
    dicId: "201"
  },
  {
    dicDesc: "",
    itemId: "300013537",
    dictTypeId: "748",
    dicTxt: "IPT Small Scale Purification",
    dicId: "22"
  },
  {
    dicDesc: "",
    itemId: "300031424",
    dictTypeId: "748",
    dicTxt: "Medium Preparation",
    dicId: "23"
  },
  {
    dicDesc: "",
    itemId: "300031719",
    dictTypeId: "748",
    itemCode: "Plasmid",
    dicTxt: "Plasmid",
    dicId: "25"
  },
  {
    dicDesc: "",
    itemId: "300031754",
    dictTypeId: "748",
    dicTxt: "Fermentation",
    dicId: "30"
  },
  {
    dicDesc: "",
    itemId: "300031985",
    dictTypeId: "748",
    dicTxt: "Report",
    dicId: "300"
  },
  {
    dicDesc: "",
    itemId: "300031770",
    dictTypeId: "748",
    itemCode: "31",
    dicTxt: "Molecule QC",
    dicId: "31"
  },
  {
    dicDesc: "",
    itemId: "300031834",
    dictTypeId: "748",
    dicTxt: "NGS-SVA",
    dicId: "32"
  },
  {
    dicDesc: "",
    itemId: "300031877",
    dictTypeId: "748",
    dicTxt: "Octet",
    dicId: "33"
  },
  {
    dicDesc: "",
    itemId: "300032479",
    dictTypeId: "748",
    dicTxt: "Large Extraction",
    dicId: "41"
  },
  {
    dicDesc: "",
    itemId: "300032161",
    dictTypeId: "748",
    dicTxt: "Request MGT",
    dicId: "500"
  },
  {
    dicDesc: "",
    itemId: "400032863",
    dictTypeId: "748",
    itemCode: "Pipline",
    dicTxt: "Pipeline",
    dicId: "600"
  },
  {
    dicDesc: "",
    itemId: "20002914",
    dictTypeId: "748",
    dicTxt: "E.coli Expression",
    dicId: "7"
  },
  {
    dicDesc: "",
    itemId: "300031954",
    dictTypeId: "748",
    dicTxt: "None",
    dicId: "88"
  },
  {
    dicDesc: "",
    itemId: "20002916",
    dictTypeId: "748",
    dicTxt: "Purification",
    dicId: "9"
  },
  {
    dicDesc: "",
    itemId: "300032403",
    dictTypeId: "748",
    dicTxt: "Yeast",
    dicId: "999"
  }
];

export function useTemplateTypeList() {
  const list = ref([]);
  list.value = templateTypeList;
  return [list];
}
