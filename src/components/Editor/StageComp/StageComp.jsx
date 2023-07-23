import React from "react";
import { Stage, Layer } from "react-konva";

//css
import classes from "./StageComp.module.css";

const StageComp = () => {
  return (
    <div className={classes.stage}>
      <Stage width={1123} height={794}>
        <Layer></Layer>
      </Stage>
    </div>
  );
};

export default StageComp;
