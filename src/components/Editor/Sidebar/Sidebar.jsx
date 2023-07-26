import LineTable from "./LineTable/LineTable";
import ChangeViewBtn from "./ChangeViewBtn/ChangeViewBtn";
import EditEnableBtn from "./EditEnableBtn/EditEnableBtn";
import LineOptions from "./LineOptions/LineOptions";
import RenumberBtns from "./RenumberBtns/RenumberBtns";
//css
import classes from "./Sidebar.module.css";

// ------------------
//overmind
import { useActions, useAppState } from "../../../overmind";

const Sidebar = () => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const mainViewMode = state.editPage.mainViewMode;
  return (
    <div>
      <div className={classes.expandlistbtns}>
        <ChangeViewBtn />
        <EditEnableBtn />
      </div>
      {mainViewMode === "plot" && (
        <>
          <LineTable />
          <RenumberBtns />
          <LineOptions />
        </>
      )}
    </div>
  );
};

export default Sidebar;
