//css
import classes from "./InfoLine.module.css";
//overmind
import { useAppState } from "../../../overmind";

const InfoLine = () => {
  //overmind
  const state = useAppState();
  const selectedObj = state.editPage.selectedObj;

  //func to return "-" if object.propeties is null
  const checkIfNull = (key) => {
    if (selectedObj) {
      if (selectedObj[`${key}`]) {
        return selectedObj[`${key}`];
      } else {
        return "-";
      }
    } else {
      return "-";
    }
  };

  if (selectedObj && selectedObj.type === "inputs") {
    return (
      <div className={classes.infoline}>
        <div className={classes.infobox} id='infoline-no'>
          <div className={classes["line-type"]}>{checkIfNull("type")}</div>
        </div>
        <div className={classes.infobox} id='infoline-no'>
          <div className={classes["info-key"]}>#No</div>
          <div className='info-value'>{checkIfNull("patchNo")}</div>
        </div>
        <div className={classes.infobox} id='infoline-name'>
          <div className={classes["info-key"]}>Name</div>
          <div className='info-value'>{checkIfNull("name")}</div>
        </div>
        <div className={classes.infobox} id='infoline-mic'>
          <div className={classes["info-key"]}>Mic</div>
          <div className='info-value'>{checkIfNull("mic")}</div>
        </div>
        <div className={classes.infobox} id='infoline-stand'>
          <div className={classes["info-key"]}>Stand</div>
          <div className='info-value'>{checkIfNull("stand")}</div>
        </div>
        <div className={classes.infobox} id='infoline-pos'>
          <div className={classes["info-key"]}>Position</div>
          <div className='info-value'>{checkIfNull("pos")}</div>
        </div>
        <div className={classes.infobox} id='infoline-rack'>
          <div className={classes["info-key"]}>Rack</div>
          <div className='info-value'>{checkIfNull("stagebox")}</div>
        </div>
        <div className={classes.infobox} id='infoline-comment'>
          <div className={classes["info-key"]}>Comment</div>
          <div className='info-value'>{checkIfNull("comment")}</div>
        </div>
        <div className={classes.infobox} id='infoline-group'>
          <div className={classes["info-key"]}>Group</div>
          <div className='info-value'>{checkIfNull("group")}</div>
        </div>
      </div>
    );
  } else if (selectedObj && selectedObj.type === "outputs") {
    return (
      <div className={classes.infoline}>
        <div className={classes.infobox} id='infoline-no'>
          <div className={classes["line-type"]}>{checkIfNull("type")}</div>
        </div>
        <div className={classes.infobox} id='infoline-no'>
          <div className={classes["info-key"]}>#No</div>
          <div className='info-value'>{checkIfNull("patchNo")}</div>
        </div>
        <div className={classes.infobox} id='infoline-name'>
          <div className={classes["info-key"]}>Name</div>
          <div className='info-value'>{checkIfNull("name")}</div>
        </div>
        <div className={classes.infobox} id='infoline-mic'>
          <div className={classes["info-key"]}>Device</div>
          <div className='info-value'>{checkIfNull("device")}</div>
        </div>
        <div className={classes.infobox} id='infoline-pos'>
          <div className={classes["info-key"]}>Position</div>
          <div className='info-value'>{checkIfNull("pos")}</div>
        </div>
        <div className={classes.infobox} id='infoline-rack'>
          <div className={classes["info-key"]}>Rack</div>
          <div className='info-value'>{checkIfNull("stagebox")}</div>
        </div>
        <div className={classes.infobox} id='infoline-comment'>
          <div className={classes["info-key"]}>Comment</div>
          <div className='info-value'>{checkIfNull("comment")}</div>
        </div>
      </div>
    );
  }
};

export default InfoLine;
