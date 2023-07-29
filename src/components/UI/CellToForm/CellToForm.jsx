//css
import classes from "./CellToForm.module.css";

import { useAppState, useActions } from "../../../overmind";
import { useState, useRef, useEffect } from "react";
import { sortList } from "../../../overmind/actions";

const CellToForm = ({ propety, obj }) => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const globalEdit = state.editPage.editEnable;
  const isAutoSort = state.editPage.isAutoSort;
  const isAutoRenumber = state.editPage.isAutoRenumber;
  const item = state.editPage.lineList[`${obj.type}`].find((item) => item.id === obj.id);

  //is form edit mode
  const [isEdit, setIsEdit] = useState(false);

  //==========================
  //cell width logic
  const [cellWidth, setCellWidth] = useState(0);
  const cellRef = useRef(null);
  // Measure the width of the cell when it mounts
  useEffect(() => {
    if (cellRef.current) {
      setCellWidth(cellRef.current.offsetWidth);
    }
  }, []);
  //==========================

  //autofocus
  const input = useRef();
  useEffect(() => {
    // Auto focus the input element when it shows (isEdit becomes true)
    if (isEdit) {
      input.current.focus();
    }
  }, [isEdit]);
  //==========================

  //change state as typing
  const setNewValue = () => {
    const newvalue = input.current.value;
    actions.changeObjPropety({ propety: propety, value: newvalue, obj: obj });
  };

  const handleDoubleClick = (e) => {
    {
      globalEdit && setIsEdit(true);
      e.target.focus();
    }
  };

  // submit using the enter key
  const handleKeyDownSubmit = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
      setNewValue(e);
      if (isAutoSort) {
        actions.sortList(item.type);
      }
      if (isAutoRenumber) {
        actions.renumberList(item.type);
      }
    }
  };

  //if user clicked anywhere but the input setIsEdit false
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click occurred outside the input element
      if (input.current && !input.current.contains(e.target)) {
        setIsEdit(false);
        setNewValue();
        if (isAutoSort) {
          actions.sortList(item.type);
        }
        if (isAutoRenumber) {
          actions.renumberList(item.type);
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [input]);

  //render
  if (isEdit) {
    return (
      <td className={classes.td} style={{ width: `${cellWidth}px` }}>
        <input
          maxLength={15}
          placeholder={item[`${propety}`]}
          // onChange={handleChange}
          onKeyDown={handleKeyDownSubmit}
          className={classes.input_text}
          type='text'
          ref={input}
          style={{ width: `${cellWidth}px` }}
        />
      </td>
    );
  } else {
    return (
      <td onClick={handleDoubleClick} ref={cellRef}>
        {item[`${propety}`]}
      </td>
    );
  }
};

export default CellToForm;
