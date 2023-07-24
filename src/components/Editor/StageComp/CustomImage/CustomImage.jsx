import { Image, Text, Group, Transformer } from "react-konva";
import useImage from "use-image";
import { useAppState, useActions } from "../../../../overmind";
//css
import classes from "./CustomImage.module.css";
//dummy data
import icons from "../../../../assets/Icons";

const CustomImage = ({ data }) => {
  //overmind
  const actions = useActions();
  const state = useAppState();
  //Edit/Select Mode
  const EditMode = state.editPage.editEnable;
  //Show Edit Handle
  const showEditHandle =
    EditMode && (state.editPage.selectedObjId !== null ? state.editPage.selectedObjId === data.id : false);
  // The dragBoundFunc for restricting drag movement within the stage
  const dragBoundFunc = (pos) => {
    const stageWidth = 1123;
    const stageHeight = 794;
    const x = Math.max(0, Math.min(pos.x, stageWidth - 100));
    const y = Math.max(0, Math.min(pos.y, stageHeight - 100));
    return { x, y };
  };

  //exctract image url
  const url = icons.filter((icon) => icon.id === data.icon)[0].url;
  const [image] = useImage(url);

  return (
    <Group
      onMouseDown={() => actions.setSelectedObjId(data.id)}
      draggable={EditMode ? true : false}
      x={data.canvaspos.x}
      y={data.canvaspos.y}
      dragBoundFunc={dragBoundFunc}>
      <Image width={100} height={100} image={image} />
      <Text fontSize={14} fontStyle='bold' text={`${data.inputno}. ${data.name}`} />
      {showEditHandle && (
        <Text
          onClick={() => alert("implememnt delete")}
          className={classes.deletexbtn}
          id={`obj_${data.id}_remove`}
          fontSize={30}
          text='x'
          x={100}
          y={-30}
        />
      )}
    </Group>
  );
};

export default CustomImage;
