import { v4 as uuidv4 } from "uuid";
//ui show and hide functions
export const setMainViewMode = ({ state }, viewMode) => {
  state.editPage.mainViewMode = viewMode;
};
//show/hide and update proj settings
export const hideProjSettings = ({ state }) => {
  state.editPage.showProjSettings = false;
};
export const showProjSettings = ({ state }) => {
  state.editPage.showProjSettings = true;
};

export const updateProjSettings = ({ state }, { key, value }) => {
  state.editPage.projSettings[`${key}`] = value;
};

//table tab select
export const setTableTab = ({ state }, tab) => {
  state.editPage.tableTab = tab;
};
//===============================================
//set selected obj
export const setSelectedObj = ({ state, actions }, obj) => {
  state.editPage.selectedObj = { ...obj };
  //selecting an object change table tabs if FollowSelect is true
  if (state.editPage.isFollowSelect) {
    actions.setTableTab(obj.type);
  }
};
//===============================================
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
export const toggleFollowSelect = ({ state }) => {
  state.editPage.isFollowSelect = !state.editPage.isFollowSelect;
};
//===============================================
//canvas object functions
export const deleteCanvasObject = ({ state, actions }, obj) => {
  //write to history first then delete object
  actions.writeHistory();
  const list = state.editPage.lineList[`${obj.type}`];
  state.editPage.lineList[`${obj.type}`] = list.filter((input) => input.id !== obj.id);
  state.editPage.selectedObj = null;
};

export const addCanvasObject = ({ state, actions }, obj) => {
  //write to history first then add object
  actions.writeHistory();
  obj.id = uuidv4();
  const list = state.editPage.lineList[`${obj.type}`];
  //find the last patch number
  const maxInputNum = Math.max(...list.map((input) => input.patchNo), 0);
  obj.patchNo = maxInputNum + 1;
  list.push(obj);
  actions.setTableTab(obj.type);
};

export const updatePostionAfterDrag = ({ state, actions }, { obj, pos }) => {
  //write to history first then add object
  actions.writeHistory();
  const data = state.editPage.lineList[`${obj.type}`];
  const item = data.find((item) => item.id === obj.id);
  if (item) {
    item.canvaspos = { x: pos.x, y: pos.y };
  }
};
export const toggleObjPropety = ({ state, actions }, { obj, propety }) => {
  //write to history first then add object
  actions.writeHistory();
  const data = state.editPage.lineList[`${obj.type}`];
  const item = data.find((item) => item.id === obj.id);
  const bool = item[`${propety}`];
  item[`${propety}`] = !bool;
};

export const changeObjPropety = ({ state, actions }, { propety, value, obj }) => {
  //check if patchNo already exists in array
  const searchPatchNo = (value, data) => {
    for (const i in data) {
      if (+data[i].patchNo === +value) {
        return true;
      }
    }
  };

  //get the line list and the item
  const data = state.editPage.lineList[`${obj.type}`];
  const item = state.editPage.lineList[`${obj.type}`].find((item) => item.id === obj.id);
  //write to history first then add object
  actions.writeHistory();
  //if patchNo exsits dont assgin new value
  if (propety === "patchNo") {
    if (searchPatchNo(value, data) || +value === 0 || isNaN(value)) {
      return;
    }
  }
  if (value === "") {
    return;
  }
  item[`${propety}`] = value;
  //after change set selected obj the last changed item
  state.editPage.selectedObj = { ...item };
};

//===============================================
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

//===============================================
//history functions
export const writeHistory = ({ state }) => {
  state.editPage.history.historyList = state.editPage.history.historyList.slice(0, state.editPage.history.historyStep);
  state.editPage.history.historyList.push(JSON.parse(JSON.stringify(state.editPage.lineList)));
  state.editPage.history.historyStep += 1;
};

export const undoHistory = ({ state, actions }) => {
  //if historyStep is 0 do nothing
  if (state.editPage.history.historyStep === 0) {
    console.log("no steps");
    return;
  }
  //if unsaved changes writeHistory and decreament step
  //(beacause writeHistory auto increament step)
  const current = JSON.stringify(state.editPage.lineList);
  const prev = JSON.stringify(state.editPage.history.historyList[state.editPage.history.historyList.length - 1]);
  if (current !== prev) {
    console.log(JSON.parse(current));
    console.log(JSON.parse(prev));
    actions.writeHistory();
    state.editPage.history.historyStep -= 1;
  }
  //decreament step and set state
  state.editPage.history.historyStep -= 1;
  const snapshot = JSON.parse(JSON.stringify(state.editPage.history.historyList[state.editPage.history.historyStep]));
  state.editPage.lineList = snapshot;
};

export const redoHistory = ({ state }) => {
  //if no more steps
  if (state.editPage.history.historyStep === state.editPage.history.historyList.length - 1) {
    console.log("no steps");
    return;
  }
  //increament history step and set state
  state.editPage.history.historyStep += 1;
  const snapshot = JSON.parse(JSON.stringify(state.editPage.history.historyList[state.editPage.history.historyStep]));
  state.editPage.lineList = snapshot;
};
//========================================

//export functions
