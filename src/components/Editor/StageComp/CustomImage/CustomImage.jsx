import { Image, Text, Group } from "react-konva";
import useImage from "use-image";

//dummy data
import icons from "../../../../assets/Icons";

const CustomImage = ({ data }) => {
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
  console.log(url);
  const [image] = useImage(url);

  return (
    <Group draggable x={data.canvaspos.x} y={data.canvaspos.y} dragBoundFunc={dragBoundFunc}>
      <Image width={100} height={100} image={image} />
      <Text fontSize={14} fontStyle='bold' text={`${data.inputno}. ${data.name}`} />
    </Group>
  );
};

export default CustomImage;
