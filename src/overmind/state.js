import inputs from "../assets/inputs";
import outputs from "../assets/outputs";
import groups from "../assets/groups";

export const state = {
  editPage: {
    editEnable: false,
    showProjSettings: false,
    selectedObjType: "input",
    selectedObjId: null,
    infoLineData: null,
    mainViewMode: "plot",
    projSettingsShow: false,
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
