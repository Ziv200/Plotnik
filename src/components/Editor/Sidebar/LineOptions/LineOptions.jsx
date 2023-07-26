import { Form } from "react-bootstrap";
import { useActions, useAppState } from "../../../../overmind";

//css
import classes from "./LineOptions.module.css";

const LineOptions = () => {
  //overmind
  const state = useAppState();
  //current selected Obj
  const selectedObj = state.editPage.selectedObj;
  return (
    <div className={classes.detailswrap}>
      <h5>Line Options:</h5>
      {/* if not null show Obj Name */}
      {<p className={classes.lineName}>{selectedObj ? `${selectedObj.name}` : ""}</p>}
      {selectedObj && <Form></Form>}
    </div>
  );
};

export default LineOptions;
