import { Form } from "react-bootstrap";
import { useAppState, useActions } from "../../../../../overmind";
//css
import classes from "./CheckBoxWithLabel";
const CheckBoxWithLabel = ({ label, propety }) => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const editEnabled = state.editPage.editEnable;
  const selectedObj = state.editPage.selectedObj;
  const item = state.editPage.lineList[`${selectedObj.type}`].find((line) => line.id === selectedObj.id);

  //handle toggle
  const handleToggle = () => {
    actions.toggleObjPropety({ obj: selectedObj, propety: propety });
  };
  return (
    <div>
      {item && (
        <Form.Check>
          <Form.Check.Input onChange={() => handleToggle()} checked={item[`${propety}`]} type='checkbox' />
          <Form.Check.Label onClick={() => handleToggle()}>{label}</Form.Check.Label>
        </Form.Check>
      )}
    </div>
  );
};

export default CheckBoxWithLabel;
