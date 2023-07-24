import classes from "./ProjectName.module.css";
import { useAppState, useActions } from "../../../../overmind";
import { useState, useRef } from "react";

const ProjectName = () => {
  //ref to form
  const formRef = useRef();
  //overmind
  const state = useAppState();
  const actions = useActions();
  //is form edit mode
  const [isEdit, setIsEdit] = useState(false);

  const handleDoubleClick = () => {
    setIsEdit(true);
  };
  // if while edit press enter submit form
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      formRef.current.submit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    alert("Form submitted:", e.target.elements.name.value);
  };
  if (isEdit) {
    return (
      <span>
        <form ref={formRef} onSubmit={handleSubmit} className={classes.form}>
          <input onKeyDown={handleKeyDown} value={state.editPage.projSettings.projName} type='text' />
        </form>
      </span>
    );
  } else {
    return (
      <span onDoubleClick={handleDoubleClick} className={classes.projectName}>
        {state.editPage.projSettings.projName}
      </span>
    );
  }
};

export default ProjectName;
