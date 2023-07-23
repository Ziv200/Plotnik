import { Image, Text, Group } from "react-konva";
import useImage from "use-image";

const CustomImage = ({ url, x = 100, y = 100, width = 100, height = 100 }) => {
  // The dragBoundFunc for restricting drag movement within the stage
  const dragBoundFunc = (pos) => {
    const stageWidth = 1123;
    const stageHeight = 794;
    const x = Math.max(0, Math.min(pos.x, stageWidth - width));
    const y = Math.max(0, Math.min(pos.y, stageHeight - height));
    return { x, y };
  };

  const [image] = useImage(url);
  return (
    <Group draggable x={x} y={y} dragBoundFunc={dragBoundFunc}>
      <Image width={width} height={100} image={image} />
      <Text text='example text' />
    </Group>
  );
};

export default CustomImage;
