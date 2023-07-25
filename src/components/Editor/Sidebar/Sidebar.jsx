import LineTable from "./LineTable/LineTable";
import ChangeViewBtn from "./ChangeViewBtn/ChangeViewBtn";
import EditEnableBtn from "./EditEnableBtn/EditEnableBtn";
import LineOptions from "./LineOptions/LineOptions";
//css
import classes from "./Sidebar.module.css";

// fake inputs data
import inputs from "../../../assets/inputs";
import outputs from "../../../assets/outputs";
import groups from "../../../assets/groups";
// ------------------
//overmind
import { useAppState } from "../../../overmind";

const Sidebar = () => {
  //overmind
  const state = useAppState();
  const mainViewMode = state.editPage.mainViewMode;
  return (
    <div>
      <div className={classes.expandlistbtns}>
        <EditEnableBtn />
        <ChangeViewBtn />
      </div>
      {mainViewMode === "plot" && (
        <>
          <LineTable />
          <LineOptions />
        </>
      )}
    </div>
  );
};

export default Sidebar;
