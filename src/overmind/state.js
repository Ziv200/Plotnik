export const state = {
  editPage: {
    //global pref
    editEnable: false,
    isAutoRenumber: false,
    isAutoSort: true,
    //UI
    tableTab: "inputs",
    showProjSettings: false,
    selectedObj: null,
    infoLineData: null,
    mainViewMode: "plot",
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
