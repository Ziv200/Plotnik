import { Image, Text, Group, Transformer } from "react-konva";
import useImage from "use-image";
import { useAppState, useActions } from "../../../../overmind";
//css
import classes from "./CustomImage.module.css";

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
  // update position state after object drag
  const handleDragEnd = (e) => {
    const endPosition = e.target.position();
    actions.updatePostionAfterDrag({ obj: data, pos: endPosition });
  };

  //exctract image url
  // const url = icons.filter((icon) => icon.id === data.icon)[0].url;
  const url = data.icon;
  const [image] = useImage(url);

  return (
    <Group
      onMouseDown={() => actions.setSelectedObjId(data)}
      draggable={EditMode ? true : false}
      x={data.canvaspos.x}
      y={data.canvaspos.y}
      dragBoundFunc={dragBoundFunc}
      onDragEnd={handleDragEnd}>
      <Image width={175} height={175} image={image} />
      {data.showPatchNo && <Text x={80} y={165} fontSize={15} fontStyle='bold' text={data.inputno || ""} />}
      {data.showLabel && <Text x={60} y={165} fontSize={15} fontStyle='bold' text={data.name} />}
      {showEditHandle && (
        <Text
          onClick={() => actions.deleteCanvasObject(data)}
          className={classes.deletexbtn}
          id={`obj_${data.id}_remove`}
          fontSize={30}
          text='x'
          x={0}
          y={0}
        />
      )}
    </Group>
  );
};

export default CustomImage;
