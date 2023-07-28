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
    EditMode && (state.editPage.selectedObj !== null ? state.editPage.selectedObj.id === data.id : false);
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

  const handleDelete = (data) => {
    actions.deleteCanvasObject(data);
    if (state.editPage.isAutoRenumber) {
      actions.renumberList(`${data.type}`);
    }
  };

  //exctract image url
  const url = data.icon;
  const [image] = useImage(url);

  return (
    <Group
      onMouseDown={() => actions.setSelectedObj(data)}
      draggable={EditMode ? true : false}
      x={data.canvaspos.x}
      y={data.canvaspos.y}
      dragBoundFunc={dragBoundFunc}
      onDragEnd={handleDragEnd}>
      <Image width={150} height={150} image={image} />
      {data.showPatchNo && <Text x={20} y={150} fontSize={18} fontStyle='bold' text={`${data.patchNo}.` || ""} />}
      {data.showLabel && <Text x={50} y={150} fontSize={18} text={data.name} />}
      {showEditHandle && (
        <Text
          onClick={() => handleDelete(data)}
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
