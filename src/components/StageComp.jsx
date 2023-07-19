//imports
import { Stage, Layer, Text } from 'react-konva';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
//css
import './StageComp.css';

const StageComp = () => {

  return (
    <div id='stagewrap'>
      <Stage width={1123} height={794}>
        <Layer>
          <Text text='some text' fontSize={30} draggable/>
        </Layer>
      </Stage>

      <Button onClick={() => Stage.clear()}>il</Button>
    </div>
  )
}

export default StageComp