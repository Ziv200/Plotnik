//css
import classes from "./InfoLine.module.css";
//overmind
import { useAppState } from "../../../overmind";

const InfoLine = () => {
  const state = useAppState();
  const selectedId = state.editPage.selectedObjId;
  const selectedType = state.editPage.selectedObjType;
  const inputs = state.editPage.lineList.inputs;

  const selectedLine = inputs.filter((input) => input.id === selectedId)[0];
  return (
    <div className={classes.infoline}>
      <div className={classes.infobox} id='infoline-no'>
        <div className={classes["line-type"]}>{selectedType}</div>
      </div>
      <div className={classes.infobox} id='infoline-no'>
        <div className={classes["info-key"]}>#No</div>
        <div className='info-value'>{selectedLine ? selectedLine.patchNo : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-name'>
        <div className={classes["info-key"]}>Name</div>
        <div className='info-value'>{selectedLine ? selectedLine.name : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-mic'>
        <div className={classes["info-key"]}>Mic</div>
        <div className='info-value'>{selectedLine ? selectedLine.mic : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-stand'>
        <div className={classes["info-key"]}>Stand</div>
        <div className='info-value'>{selectedLine ? selectedLine.stand : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-pos'>
        <div className={classes["info-key"]}>Position</div>
        <div className='info-value'>{selectedLine ? selectedLine.pos : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-rack'>
        <div className={classes["info-key"]}>Rack</div>
        <div className='info-value'>{selectedLine ? selectedLine.stagebox : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-comment'>
        <div className={classes["info-key"]}>Comment</div>
        <div className='info-value'>{selectedLine ? (selectedLine.comment ? selectedLine.comment : "-") : "-"}</div>
      </div>
      <div className={classes.infobox} id='infoline-group'>
        <div className={classes["info-key"]}>Group</div>
        <div className='info-value'>{selectedLine ? (selectedLine.group ? selectedLine.group : "-") : "-"}</div>
      </div>
    </div>
  );
};

export default InfoLine;
