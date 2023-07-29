export const state = {
  editPage: {
    editEnable: false,
    showProjSettings: false,
    selectedObj: null,
    infoLineData: null,
    mainViewMode: "plot",
    projSettingsShow: false,
    isAutoRenumber: false,
    isAutoSort: true,
    tableTab: "inputs",
    projSettings: {
      projName: "Untitled",
      artistName: "",
      designerName: "",
      comment: "",
    },
    lineList: {
      inputs: [],
      outputs: [],
      groups: [],
    },
  },
};
