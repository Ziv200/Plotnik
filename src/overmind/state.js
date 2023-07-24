import inputs from "../assets/inputs";
import outputs from "../assets/outputs";
import groups from "../assets/groups";

export const state = {
  editPage: {
    editEnable: false,
    showProjSettings: false,
    selectedObjId: null,
    mainViewMode: "plot",
    projSettingsShow: false,
    projSettings: {
      projName: "Kapaim Band",
      artistName: "",
      designerName: "",
      comment: "",
    },
    lineList: {
      inputs: inputs,
      outputs: outputs,
      groups: groups,
    },
  },
};
