import LineTable from "./LineTable";
import ChangeViewBtn from "./ChangeViewBtn/ChangeViewBtn";
import EditEnableBtn from "./EditEnableBtn/EditEnableBtn";
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
      {mainViewMode === "plot" && <LineTable inputs={inputs} outputs={outputs} groups={groups} />}
    </div>
  );
};

export default Sidebar;
