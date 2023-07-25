import classes from "./AccordionItem.module.css";
import { useActions } from "../../../../overmind";

//dummy object (if no props were passed)
const dummyObject = {
  type: "input",
  name: "Example",
  mic: "",
  stand: "Long",
  pos: null,
  stagebox: null,
  patchNo: null,
  comment: "",
  hasIcon: true,
  showLabel: true,
  showPatchNo: true,
  icon: "src/images/icons/default.png",
  canvaspos: {
    x: 250,
    y: 250,
  },
  group: null,
};
const AccordionItem = ({ obj = dummyObject }) => {
  //overmind
  const actions = useActions();
  //handleAddItem
  const handleAddItem = (obj) => {
    actions.addCanvasObject(obj);
  };
  return (
    <div className={classes.icon}>
      <div onClick={() => handleAddItem(obj)} className={classes.iconimgwrap}>
        <img src={obj.icon}></img>
      </div>
      <div className={classes.label}>{obj.name}</div>
    </div>
  );
};

export default AccordionItem;
