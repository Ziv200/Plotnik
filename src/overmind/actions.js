import { v4 as uuidv4 } from "uuid";
//ui show and hide functions
export const setMainViewMode = ({ state }, viewMode) => {
  state.editPage.mainViewMode = viewMode;
};

export const hideProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = false;
};
export const showProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = true;
};

export const updateProjSettings = ({ state }, { key, value }) => {
  state.editPage.projSettings[`${key}`] = value;
};

export const setSelectedObj = ({ state }, obj) => {
  state.editPage.selectedObj = { ...obj };
  console.log(state.editPage.selectedObj);
};

export const editEnableToggle = ({ state }) => {
  state.editPage.editEnable = !state.editPage.editEnable;
};

//canvas object functions
export const deleteCanvasObject = ({ state }, obj) => {
  const list = state.editPage.lineList[`${obj.type}`];
  state.editPage.lineList[`${obj.type}`] = list.filter((input) => input.id !== obj.id);
};

export const addCanvasObject = ({ state }, obj) => {
  obj.id = uuidv4();
  const list = state.editPage.lineList[`${obj.type}`];
  //find the last patch number
  list.push(obj);
};

export const updatePostionAfterDrag = ({ state }, { obj, pos }) => {
  const data = state.editPage.lineList[`${obj.type}`];
  const item = data.find((item) => item.id === obj.id);
  if (item) {
    item.canvaspos = { x: pos.x, y: pos.y };
  }
};
