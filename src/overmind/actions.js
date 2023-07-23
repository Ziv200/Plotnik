export const setMainViewMode = ({ state }, viewMode) => {
  state.editPage.mainViewMode = viewMode;
};

export const hideProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = false;
};
export const showProjSettings = ({ state }) => {
  state.editPage.projSettingsShow = true;
};

export const setSelectedObjId = ({ state }, id) => {
  state.editPage.selectedObjId = id;
};
