export default {
  categoryList: [
    {
      labelList: [
        {
          col: "c28",
          decimal_digit: 0,
          editable: "1",
          label: "Cell Source",
          sort: "1.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1500",
          value: ""
        },
        {
          col: "c31",
          decimal_digit: 0,
          editable: "1",
          label: "Culture Split",
          sort: "4.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Link",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1612",
          value: ""
        }
      ],
      category: "Cell Source"
    },
    {
      labelList: [
        {
          col: "c1",
          decimal_digit: 0,
          editable: "2",
          label: "Sample ID",
          sort: "10.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "500",
          value: ""
        },
        {
          col: "c2",
          decimal_digit: 0,
          editable: "2",
          label: "Sample Time",
          sort: "20.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Date",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "501",
          value: ""
        },
        {
          col: "c24",
          decimal_digit: 0,
          editable: "2",
          label: "Cell Type",
          sort: "21.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1177",
          value: ""
        },
        {
          col: "c3",
          decimal_digit: 2,
          editable: "2",
          label: "Viability(%)",
          sort: "30.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "%",
          linefeed: "2",
          formula: "",
          id: "502",
          value: ""
        },
        {
          col: "c4",
          decimal_digit: 1,
          editable: "2",
          label: "Dilution Factor",
          sort: "40.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "503",
          value: ""
        },
        {
          col: "c5",
          decimal_digit: 3,
          editable: "2",
          label: "Viable Cell Density(10^6/mL)",
          sort: "50.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "10^6/mL",
          linefeed: "2",
          formula: "",
          id: "504",
          value: ""
        },
        {
          col: "c6",
          decimal_digit: 2,
          editable: "2",
          label: "Average Diameter(μm)",
          sort: "60.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "μm",
          linefeed: "2",
          formula: "",
          id: "505",
          value: ""
        },
        {
          col: "c18",
          decimal_digit: 0,
          editable: "1",
          label: "Actual Dilution Factor",
          sort: "62.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "583",
          value: ""
        },
        {
          col: "c19",
          decimal_digit: 3,
          editable: "2",
          label: "Actual Viable Cell Density(10^6/mL)",
          sort: "64.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Formula",
          unit: "10^6/mL",
          linefeed: "2",
          formula:
            "parseFloat($('#504').val())*parseFloat($('#583').val())/parseFloat($('#503').val())",
          id: "584",
          value:
            "parseFloat($('#504').val())*parseFloat($('#583').val())/parseFloat($('#503').val())"
        },
        {
          col: "c35",
          decimal_digit: 0,
          editable: "2",
          label: "IVCD",
          sort: "65.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1935",
          value: ""
        },
        {
          col: "c30",
          decimal_digit: 0,
          editable: "1",
          label: "PBS for Dilution",
          sort: "66.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1543",
          value: ""
        },
        {
          col: "c36",
          decimal_digit: 0,
          editable: "2",
          label: "Materials ID",
          sort: "66.01",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Hidden",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "2148",
          value: ""
        }
      ],
      category: "Vi-Cell Data"
    },
    {
      labelList: [
        {
          col: "c9",
          decimal_digit: 0,
          editable: "1",
          label: "Glucose Concentration(g/L)",
          sort: "66.1",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "g/L",
          linefeed: "2",
          formula: "NA",
          id: "508",
          value: "NA"
        },
        {
          col: "c10",
          decimal_digit: 0,
          editable: "2",
          label: "Glucose Consumption(g/L)",
          sort: "66.2",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "g/L",
          linefeed: "2",
          formula: "",
          id: "509",
          value: ""
        },
        {
          col: "c15",
          decimal_digit: 0,
          editable: "1",
          label: "Lactate Concentration(g/L)",
          sort: "66.3",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "g/L",
          linefeed: "2",
          formula: "",
          id: "516",
          value: ""
        },
        {
          col: "c16",
          decimal_digit: 2,
          editable: "1",
          label: "Osmolarity(mOsm/kg)",
          sort: "66.4",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "mOsm/kg",
          linefeed: "2",
          formula: "",
          id: "517",
          value: ""
        },
        {
          col: "c37",
          decimal_digit: 1,
          editable: "1",
          label: "Octet Titer(mg/L)",
          sort: "66.5",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "mg/L",
          linefeed: "2",
          formula: "",
          id: "2201",
          value: ""
        },
        {
          col: "c38",
          decimal_digit: 1,
          editable: "2",
          label: "Titer Increment(mg/day)",
          sort: "67.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "mg/day",
          linefeed: "2",
          formula: "",
          id: "2410",
          value: ""
        }
      ],
      category: "Metabolites"
    },
    {
      labelList: [
        {
          col: "c7",
          decimal_digit: 0,
          editable: "1",
          label: "Cell ID",
          sort: "70.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Formula",
          unit: null,
          linefeed: "2",
          formula: "$(’#1500’).val()",
          id: "506",
          value: "$(’#1500’).val()"
        },
        {
          col: "c8",
          decimal_digit: 0,
          editable: "1",
          label: "Days Post Inoculation(d)",
          sort: "80.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "d",
          linefeed: "2",
          formula: "",
          id: "507",
          value: ""
        },
        {
          col: "c11",
          decimal_digit: 1,
          editable: "1",
          label: "Culture Volume(mL)",
          sort: "110.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "mL",
          linefeed: "2",
          formula: "",
          id: "510",
          value: ""
        },
        {
          col: "c17",
          decimal_digit: 0,
          editable: "1",
          label: "Feeding Medium",
          sort: "190.0",
          required: "2",
          dropdown_table_value:
            "Feeding Medium,Glucose Concentration(g/L),Feeding Percentage (%),Feeding Volume (mL),Feeding Medium ID",
          wdget: "Table",
          unit: null,
          linefeed: "1",
          formula: "",
          id: "518",
          value:
            '[{"Glucose Concentration(g/L)":"","Feeding Percentage (%)":"","Feeding Medium ID":"","Feeding Volume (mL)":"","Feeding Medium":""}]'
        },
        {
          col: "c40",
          decimal_digit: 0,
          editable: "1",
          label: "fed method",
          sort: "191.5",
          required: "1",
          dropdown_table_value: "by Concentration,by Mass",
          wdget: "Dropdown",
          unit: null,
          linefeed: "1",
          formula: "by Concentration",
          id: "3041664",
          value: "by Concentration"
        },
        {
          col: "c29",
          decimal_digit: 2,
          editable: "2",
          label: "Glucose Concentration Post Feeding(g/L)",
          sort: "192.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "g/L",
          linefeed: "2",
          formula: "",
          id: "1537",
          value: ""
        },
        {
          col: "c34",
          decimal_digit: 0,
          editable: "1",
          label: "Feeding Glucose ID",
          sort: "194.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1690",
          value: ""
        },
        {
          col: "c23",
          decimal_digit: 2,
          editable: "1",
          label: "Feeding Glucose Concentration(g/L)",
          sort: "195.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "g/L",
          linefeed: "2",
          formula: "400",
          id: "877",
          value: "400"
        },
        {
          col: "c14",
          decimal_digit: 0,
          editable: "1",
          label: "Target Glucose Concentration(g/L)",
          sort: "198.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "g/L",
          linefeed: "2",
          formula: "NA",
          id: "514",
          value: "NA"
        },
        {
          col: "c39",
          decimal_digit: 0,
          editable: "1",
          label: "Add Glucose(g)",
          sort: "199.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Text",
          unit: "g",
          linefeed: "2",
          formula: "",
          id: "3041649",
          value: ""
        },
        {
          col: "c21",
          decimal_digit: 4,
          editable: "1",
          label: "Feeding Glucose Volume(mL)",
          sort: "200.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "mL",
          linefeed: "2",
          formula: "",
          id: "875",
          value: ""
        },
        {
          col: "c33",
          decimal_digit: 0,
          editable: "2",
          label: "Total Glucose Added(g/L)",
          sort: "239.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "g/L",
          linefeed: "2",
          formula: "",
          id: "1688",
          value: ""
        },
        {
          col: "c32",
          decimal_digit: 2,
          editable: "1",
          label: "Osmolarity Post Feeding(mOsm/kg)",
          sort: "240.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "mOsm/kg",
          linefeed: "2",
          formula: "",
          id: "1669",
          value: ""
        },
        {
          col: "c12",
          decimal_digit: 1,
          editable: "1",
          label: "Culturing Temperature(˚C)",
          sort: "241.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "˚C",
          linefeed: "2",
          formula: "",
          id: "511",
          value: ""
        },
        {
          col: "c20",
          decimal_digit: 1,
          editable: "1",
          label: "Humidity(%)",
          sort: "242.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "%",
          linefeed: "2",
          formula: "85",
          id: "874",
          value: "85"
        },
        {
          col: "c22",
          decimal_digit: 1,
          editable: "1",
          label: "CO₂(%)",
          sort: "243.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "%",
          linefeed: "2",
          formula: "6",
          id: "876",
          value: "6"
        },
        {
          col: "c13",
          decimal_digit: 0,
          editable: "1",
          label: "Shaking Speed(rpm)",
          sort: "244.0",
          required: "1",
          dropdown_table_value: "null",
          wdget: "Number",
          unit: "rpm",
          linefeed: "1",
          formula: "",
          id: "512",
          value: ""
        }
      ],
      category: "Culture Condition"
    },
    {
      labelList: [
        {
          col: "c25",
          decimal_digit: 0,
          editable: "1",
          label: "Comments",
          sort: "250.0",
          required: "2",
          dropdown_table_value: "null",
          wdget: "Textarea",
          unit: null,
          linefeed: "2",
          formula: "",
          id: "1421",
          value: ""
        }
      ],
      category: "Comments"
    }
  ],
  templateInfoFormMap: {
    created_time: "2019-09-01T15:14:18.000+08:00",
    updated_time: "2021-12-14T09:44:15.000+08:00",
    modulefile: "c28_Cell Source,c24_Cell Type,c3_Viability",
    is_qr_code: 2,
    bu_code: "1008,1100,1700",
    remark:
      "Vi-Cell file naming rule: 1. project folder:WBP0000A . 2.file name:WBP0000A-Pool FB-000000，WBP0000A-Clone FB-000000.",
    creater_userid: "1",
    type: "12,14",
    version: "4470005",
    sample_type: "Cell_Pellet,Supernatant",
    data_source: "",
    pic_name: "fed-batch.png",
    layout: "Standard",
    customize_group: "cellpassage",
    name: "Fed-Batch",
    updater_userid: "1",
    is_del: 0,
    id: 447,
    soplink:
      "https://ecm.wuxibiologics.com/PDFVIEW_Publish/PDFView.aspx?nodeid=1373353;https://ecm.wuxibiologics.com/PDFVIEW_Publish/PDFView.aspx?nodeid=16476824;https://ecm.wuxibiologics.com/PDFVIEW_Publish/PDFView.aspx?nodeid=7567013;https://ecm.wuxibiologics.com/PDFVIEW_Publish/PDFView.aspx?nodeid=7567014;https://ecm.wuxibiologics.com/PDFVIEW_Publish/PDFView.aspx?nodeid=7567015",
    pdisk_path: "//10.248.56.78/chn01/cps01/1.Project/3.Equipment/1.VI-CELL",
    status: "2"
  }
};
