//css
import classes from "./CellToForm.module.css";

import { useAppState, useActions } from "../../../overmind";
import { useState } from "react";
import { BsCheckLg, BsPencilFill } from "react-icons/bs";

const CellToForm = ({ propety, obj }) => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const globalEdit = state.editPage.editEnable;
  const item = state.editPage.lineList[`${obj.type}`].find((item) => item.id === obj.id);
  //is form edit mode
  const [isEdit, setIsEdit] = useState(false);

  //change state as typing
  const handleChange = (e) => {
    const newvalue = e.target.value;
    actions.changeObjPropety({ propety: propety, value: newvalue, obj: obj });
  };

  const handleDoubleClick = () => {
    {
      globalEdit && setIsEdit(true);
    }
  };

  // submit using the enter key
  const handleKeyDownSubmit = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };

  if (isEdit) {
    return (
      <td lassName={classes.td}>
        <input
          maxLength={18}
          value={item[`${propety}`]}
          onChange={handleChange}
          onKeyDown={handleKeyDownSubmit}
          className={classes.input_text}
          type='text'
        />
      </td>
    );
  } else {
    return (
      <td c onDoubleClick={handleDoubleClick}>
        {item[`${propety}`]}
      </td>
    );
  }
};

export default CellToForm;
