import classes from "./RenumberBtns.module.css";
import { useAppState, useActions } from "../../../../overmind";
import { Button } from "react-bootstrap";

const RenumberBtns = () => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const isAutoRenumber = state.editPage.isAutoRenumber;
  const isAutoSort = state.editPage.isAutoSort;

  return (
    <div className={classes.expandlistbtns}>
      <div>
        <Button
          onClick={() => actions.toggleAutoSort()}
          variant='secondary'
          className={isAutoSort ? classes.renumberEnabled : classes.renumberDisabled}>
          Auto
        </Button>
        <Button className={classes.expandlistbtn} variant='secondary' onClick={() => actions.sortList()}>
          Sort
        </Button>
      </div>
      <div className={classes.expandlistbtns}>
        <Button
          onClick={() => actions.toggleAutoRenumber()}
          variant='secondary'
          className={isAutoRenumber ? classes.renumberEnabled : classes.renumberDisabled}>
          Auto
        </Button>
        <Button className={classes.expandlistbtn} variant='secondary' onClick={() => actions.renumberList()}>
          Renumber
        </Button>
      </div>
    </div>
  );
};

export default RenumberBtns;
