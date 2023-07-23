import classes from "./ChangeViewBtn.module.css";
import Button from "react-bootstrap/Button";

import { useAppState, useActions } from "../../../../overmind";
const ChangeViewBtn = () => {
  //overmind
  const actions = useActions();
  const state = useAppState();
  //-------------------------
  const changeViewFunc = () => {
    if (state.editPage.mainViewMode === "plot") {
      return actions.setMainViewMode("list");
    } else {
      return actions.setMainViewMode("plot");
    }
  };
  return (
    <Button onClick={() => changeViewFunc()} className={classes.expandlistbtn} variant='secondary'>
      {state.editPage.mainViewMode === "plot" ? "Expand Table" : "Back To Plot View"}
    </Button>
  );
};

export default ChangeViewBtn;
