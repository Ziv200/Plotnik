import classes from "./FollowSelectBtn.module.css";
import Button from "react-bootstrap/Button";

import { useAppState, useActions } from "../../../../overmind";
const FollowSelectBtn = () => {
  //overmind
  const actions = useActions();
  const state = useAppState();
  //-------------------------
  const FollowState = state.editPage.isFollowSelect;
  return (
    <Button
      onClick={() => actions.toggleFollowSelect()}
      className={FollowState ? classes.followEnabled : classes.followDisabled}
      variant='secondary'>
      Follow Select
    </Button>
  );
};

export default FollowSelectBtn;
