export const state = {
  editPage: {
    //global pref
    editEnable: false,
    isAutoRenumber: false,
    isAutoSort: true,
    isFollowSelect: true,
    //UI
    tableTab: "inputs",
    showProjSettings: false,
    selectedObj: null,
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
