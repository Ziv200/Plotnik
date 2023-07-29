import { v4 as uuidv4 } from "uuid";
//ui show and hide functions
export const setMainViewMode = ({ state }, viewMode) => {
  state.editPage.mainViewMode = viewMode;
};
//show/hide and update proj settings
export const hideProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = false;
};
export const showProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = true;
};

export const updateProjSettings = ({ state }, { key, value }) => {
  state.editPage.projSettings[`${key}`] = value;
};

//table tab select
export const setTableTab = ({ state }, tab) => {
  state.editPage.tableTab = tab;
};
//set selected obj
export const setSelectedObj = ({ state }, obj) => {
  state.editPage.selectedObj = { ...obj };
};

//edit functions
export const editEnableToggle = ({ state }) => {
  state.editPage.editEnable = !state.editPage.editEnable;
};

export const toggleAutoRenumber = ({ state }) => {
  state.editPage.isAutoRenumber = !state.editPage.isAutoRenumber;
};
export const toggleAutoSort = ({ state }) => {
  state.editPage.isAutoSort = !state.editPage.isAutoSort;
};

//canvas object functions
export const deleteCanvasObject = ({ state }, obj) => {
  const list = state.editPage.lineList[`${obj.type}`];
  state.editPage.lineList[`${obj.type}`] = list.filter((input) => input.id !== obj.id);
  state.editPage.selectedObj = null;
};

export const addCanvasObject = ({ state }, obj) => {
  obj.id = uuidv4();
  const list = state.editPage.lineList[`${obj.type}`];
  //find the last patch number
  const maxInputNum = Math.max(...list.map((input) => input.patchNo), 0);
  obj.patchNo = maxInputNum + 1;
  list.push(obj);
};

export const updatePostionAfterDrag = ({ state }, { obj, pos }) => {
  const data = state.editPage.lineList[`${obj.type}`];
  const item = data.find((item) => item.id === obj.id);
  if (item) {
    item.canvaspos = { x: pos.x, y: pos.y };
  }
};
export const toggleObjPropety = ({ state }, { obj, propety }) => {
  const data = state.editPage.lineList[`${obj.type}`];
  const item = data.find((item) => item.id === obj.id);
  const bool = item[`${propety}`];
  item[`${propety}`] = !bool;
};

export const changeObjPropety = ({ state }, { propety, value, obj }) => {
  //check if patchNo already exists in array
  const searchPatchNo = (value, data) => {
    for (const i in data) {
      if (+data[i].patchNo === +value) {
        console.log("Same");
      }
    }
  };

  const data = state.editPage.lineList[`${obj.type}`];
  const item = state.editPage.lineList[`${obj.type}`].find((item) => item.id === obj.id);
  //if patchNo exsits dont assgin new value
  if (propety === "patchNo") {
    searchPatchNo(value, data);
  }
  item[`${propety}`] = value;
};

//list function
export const renumberList = ({ state }, type = state.editPage.tableTab) => {
  //if type not provided type set to selected object type
  const list = state.editPage.lineList[`${type}`];
  list.forEach((input, index) => {
    input.patchNo = index + 1; // Index starts from 0, so we add 1 to make it start from 1
  });
};

export const sortList = ({ state }, type = state.editPage.tableTab) => {
  //if type not provided type set to selected object type
  const list = state.editPage.lineList[`${type}`];
  list.sort((a, b) => a.patchNo - b.patchNo);
};
