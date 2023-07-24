import classes from "./EditEnableBtn.module.css";
import Button from "react-bootstrap/Button";

import { useAppState, useActions } from "../../../../overmind";
const EditEnableBtn = () => {
  //overmind
  const actions = useActions();
  const state = useAppState();
  //-------------------------
  const editState = state.editPage.editEnable;
  return (
    <Button
      onClick={() => actions.editEnableToggle()}
      className={editState ? classes.editEnabled : classes.editDisabled}
      variant='secondary'>
      {state.editPage.editEnable ? "Edit Mode" : "Select Mode"}
    </Button>
  );
};

export default EditEnableBtn;
