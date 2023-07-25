import { Form } from "react-bootstrap";
import { useActions, useAppState } from "../../../../overmind";

//css
import classes from "./LineDetails.module.css";

const LineDetails = () => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const line = state.editPage.lineList.return(
    <div>
      <h5>Line Details:</h5>
      <p>{state}</p>
      <Form></Form>
    </div>
  );
};

export default LineDetails;
