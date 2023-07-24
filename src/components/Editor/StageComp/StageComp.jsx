import { Stage, Layer, Text } from "react-konva";
//css
import classes from "./StageComp.module.css";
import CustomImage from "./CustomImage/CustomImage";
//dummy data
// import inputs from "../../../assets/inputs";
//overmind
import { useAppState } from "../../../overmind";

const StageComp = () => {
  const state = useAppState();
  const title = `${state.editPage.projSettings.projName}`;
  const copyright = "Created With Plotnik.com - By Ilan Ziv";
  const inputs = state.editPage.lineList.inputs;
  return (
    <Stage className={classes.stage} width={1123} height={794}>
      <Layer>
        <Text x={20} y={20} fontStyle='bold' fontSize={20} text={title} />
        {inputs
          .filter((input) => input.hasIcon)
          .map((input) => {
            return <CustomImage key={input.id} data={input} />;
          })}
        <Text x={870} y={770} fontStyle='bold' fontSize={12} text={copyright} />
      </Layer>
    </Stage>
  );
};

export default StageComp;
