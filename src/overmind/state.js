import inputs from "../assets/inputs";
import outputs from "../assets/outputs";
import groups from "../assets/groups";

export const state = {
  editPage: {
    editEnable: false,
    showProjSettings: false,
    selectedObj: null,
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
