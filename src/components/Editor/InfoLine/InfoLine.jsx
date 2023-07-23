//css
import classes from "./InfoLine.module.css";

const InfoLine = () => {
  return (
    <div className={classes.infoline}>
      <div className={classes.infobox} id='infoline-no'>
        <div className={classes["info-key"]}>#No</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-name'>
        <div className={classes["info-key"]}>Name</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-mic'>
        <div className={classes["info-key"]}>Mic</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-stand'>
        <div className={classes["info-key"]}>Stand</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-pos'>
        <div className={classes["info-key"]}>Position</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-rack'>
        <div className={classes["info-key"]}>Rack</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-comment'>
        <div className={classes["info-key"]}>Comment</div>
        <div className='info-value'>2</div>
      </div>
      <div className={classes.infobox} id='infoline-group'>
        <div className={classes["info-key"]}>Group</div>
        <div className='info-value'>2</div>
      </div>
    </div>
  );
};

export default InfoLine;
