import classes from "./ProjectName.module.css";
import { useAppState, useActions } from "../../../../overmind";
import { useState, useRef } from "react";
import { BsCheckLg, BsPencilFill } from "react-icons/bs";

const ProjectName = () => {
  //ref to form
  const formRef = useRef();
  //overmind
  const state = useAppState();
  const actions = useActions();
  //is form edit mode
  const [isEdit, setIsEdit] = useState(false);

  //edit project name btn
  const handleEditBtn = () => {
    setIsEdit(true);
  };
  //end edit project name
  const handleCheckBtn = () => {
    setIsEdit(false);
  };
  //change state as typing
  const handleChange = (e) => {
    const value = e.target.value;
    actions.updateProjSettings({ key: "projName", value: value });
  };
  // submit using the enter key
  const handleKeyDownSubmit = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };
  //prevent default submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //
  if (isEdit) {
    return (
      <span>
        <form onSubmit={handleSubmit} ref={formRef} className={classes.form}>
          <input
            name='name'
            maxLength={20}
            onChange={handleChange}
            value={state.editPage.projSettings.projName}
            type='text'
            onKeyDown={handleKeyDownSubmit}
          />
          <BsCheckLg type='submit' onClick={handleCheckBtn} className={classes.checkbtn} />
        </form>
      </span>
    );
  } else {
    return (
      <span className={classes.projectName}>
        {state.editPage.projSettings.projName}
        <BsPencilFill onClick={handleEditBtn} className={classes.editbtn} />
      </span>
    );
  }
};

export default ProjectName;
