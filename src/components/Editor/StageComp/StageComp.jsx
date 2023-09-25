import { Stage, Layer, Text, Rect } from "react-konva";
import CustomImage from "./CustomImage/CustomImage";
import { useRef } from "react";
//css
import classes from "./StageComp.module.css";

//overmind
import { useActions, useAppState } from "../../../overmind";

const StageComp = () => {
  const state = useAppState();
  // const actions = useActions();
  const projSettings = state.editPage.projSettings;
  const copyright = "Created With Plotnik.com - By Ilan Ziv";
  const data = state.editPage.lineList;
  const stageRef = useRef(null);

  return (
    <Stage id='mainStage' ref={stageRef} className={classes.stage} width={1123} height={794}>
      <Layer>
        {/* white background */}
        <Rect width={window.innerWidth} height={window.innerHeight} fill='white' />
        {/* project Name */}
        <Text x={20} y={20} fontStyle='bold' fontSize={20} text={projSettings.projName} />
        {/* artist Name */}
        <Text x={20} y={45} fontStyle='bold' fontSize={12} text={projSettings.artistName} />
        <Text x={20} y={770} fontStyle='bold' fontSize={12} text={projSettings.designerName} />
        {/* copyright    */}

        <Text x={890} y={770} fontStyle='bold' fontSize={12} text={copyright} />

        {Object.values(data).map((array) =>
          array
            .filter((item) => item.hasIcon)
            .map((item) => {
              return <CustomImage key={item.id} data={item} />;
            })
        )}
        {/* copyright tag */}
      </Layer>
    </Stage>
  );
};

export default StageComp;
