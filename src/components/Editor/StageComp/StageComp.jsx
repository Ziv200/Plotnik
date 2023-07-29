import { Stage, Layer, Text } from "react-konva";
import CustomImage from "./CustomImage/CustomImage";

//css
import classes from "./StageComp.module.css";

//overmind
import { useAppState } from "../../../overmind";

const StageComp = () => {
  const state = useAppState();
  const projSettings = state.editPage.projSettings;
  const copyright = "Created With Plotnik.com - By Ilan Ziv";
  const data = state.editPage.lineList;
  return (
    <Stage className={classes.stage} width={1123} height={794}>
      <Layer>
        {/* project Name */}
        <Text x={20} y={20} fontStyle='bold' fontSize={20} text={projSettings.projName} />
        {/* artist Name */}
        <Text x={20} y={45} fontStyle='bold' fontSize={12} text={projSettings.artistName} />
        {/* designer Name */}
        <Text x={20} y={770} fontStyle='bold' fontSize={12} text={projSettings.designerName} />
        {Object.values(data).map((array) =>
          array
            .filter((item) => item.hasIcon)
            .map((item) => {
              return <CustomImage key={item.id} data={item} />;
            })
        )}
        {/* copyright tag */}
        <Text x={890} y={770} fontStyle='bold' fontSize={12} text={copyright} />
      </Layer>
    </Stage>
  );
};

export default StageComp;
