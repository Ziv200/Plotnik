import classes from "./RenumberBtns.module.css";
import { useAppState, useActions } from "../../../../overmind";
import { Button } from "react-bootstrap";
const RenumberBtns = () => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const isAutoRenumber = state.editPage.isAutoRenumber;

  return (
    <div className={classes.expandlistbtns}>
      <Button
        onClick={() => actions.toggleAutoRenumber()}
        variant='secondary'
        className={isAutoRenumber ? classes.renumberEnabled : classes.renumberDisabled}>
        Auto
      </Button>
      <Button variant='secondary' className={classes.smallbtn} onClick={() => actions.sortList("inputs")}>
        Renumber
      </Button>
    </div>
  );
};

export default RenumberBtns;
