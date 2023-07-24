import icons from "../../../../assets/icons";
import classes from "./AccordionItem.module.css";
const AccordionItem = (url) => {
  return (
    <div className={classes.icon}>
      <div className={classes.iconimgwrap}>
        <img src={"src/assets/gtr.png"}></img>
      </div>
      <div className={classes.label}>text</div>
    </div>
  );
};

export default AccordionItem;
