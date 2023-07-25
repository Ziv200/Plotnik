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
  inputno: null,
  comment: "",
  hasIcon: true,
  showLabel: true,
  icon: "src/images/icons/default.png",
  canvaspos: {
    x: 250,
    y: 250,
  },
  group: null,
};
const AccordionItem = ({ obj = dummyObject }) => {
  const actions = useActions();
  return (
    <div className={classes.icon}>
      <div onClick={() => actions.addCanvasObject(obj)} className={classes.iconimgwrap}>
        <img src={obj.icon}></img>
      </div>
      <div className={classes.label}>{obj.name}</div>
    </div>
  );
};

export default AccordionItem;
