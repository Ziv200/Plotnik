import { Stage, Layer, Label } from "react-konva";
//css
import classes from "./StageComp.module.css";
import CustomImage from "./CustomImage/CustomImage";
//dummy data
import inputs from "../../../assets/inputs";

const StageComp = () => {
  return (
    <Stage className={classes.stage} width={1123} height={794}>
      <Layer>
        {inputs
          .filter((input) => input.hasIcon)
          .map((input) => {
            return <CustomImage key={input.id} data={input} />;
          })}
        <Label />
      </Layer>
    </Stage>
  );
};

export default StageComp;
