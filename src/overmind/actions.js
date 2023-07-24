import { v4 as uuidv4 } from "uuid";

export const setMainViewMode = ({ state }, viewMode) => {
  state.editPage.mainViewMode = viewMode;
};

export const hideProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = false;
};
export const showProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = true;
};

export const setSelectedObjId = ({ state }, obj) => {
  state.editPage.selectedObjId = obj.id;
  state.editPage.selectedObjType = obj.type;
};

export const editEnableToggle = ({ state }) => {
  state.editPage.editEnable = !state.editPage.editEnable;
};

//

export const deleteCanvasObject = ({ state }, obj) => {
  const list = state.editPage.lineList;
  list.inputs = list.inputs = list.inputs.filter((input) => input.id !== obj.id);
};

export const addCanvasObject = ({ state }, obj) => {
  obj.id = uuidv4();
  const list = state.editPage.lineList;
  list.inputs.push(obj);
};

export const updatePostionAfterDrag = ({ state }, { obj, pos }) => {
  const data = state.editPage.lineList[`${obj.type}s`];
  const item = data.find((item) => item.id === obj.id);
  if (item) {
    item.canvaspos = { x: pos.x, y: pos.y };
  }
};
