import { Form } from "react-bootstrap";
import { useActions, useAppState } from "../../../../overmind";

//css
import classes from "./LineOptions.module.css";

const LineOptions = () => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const selectedObj = state.editPage.selectedObj;
  return (
    <div className={classes.detailswrap}>
      <h5>Line Options:</h5>
      {<p>{selectedObj ? `${selectedObj.name}` : ""}</p>}
      {selectedObj && (
        <Form>
          <Form.Group className='mb-3'>
            <Form.Check checked={selectedObj.showLabel} label='Show Line Name' />
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default LineOptions;
