import LineTable from "./LineTable";
import "./Sidebar.css";

// fake inputs data
import inputs from "../../../assets/inputs";
import outputs from "../../../assets/outputs";
import groups from "../../../assets/groups";
// ------------------

const Sidebar = () => {
  return (
    <div id='sidebar-wrap'>
      <LineTable inputs={inputs} outputs={outputs} groups={groups} />
    </div>
  );
};

export default Sidebar;
