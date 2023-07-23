import { Stage, Layer, Label } from "react-konva";
//css
import classes from "./StageComp.module.css";
import CustomImage from "./CustomImage/CustomImage";
import inputs from "../../../assets/inputs";

const StageComp = () => {
  return (
    <Stage className={classes.stage} width={1123} height={794}>
      <Layer>
        {inputs.map((input) => (
          <CustomImage data={input} url='src/assets/gtr.png' />
        ))}
        <Label />
      </Layer>
    </Stage>
  );
};

export default StageComp;
