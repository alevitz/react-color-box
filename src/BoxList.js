import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { useState } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';

function BoxList(){
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return(
      <div>
      {boxes.map(box => {
        console.log(box)
        return(
        <Box 
        key={box.id}  
        backgroundColor={box.backgroundColor}
        width={box.width}
        height={box.height}
        />
        )    
      })}
      </div>
    )
  }

  const addBox = box => {
    let newBox = {...box, id: v4() };
    setBoxes(boxes => [...boxes, newBox]);
  };

return(
  <div>
  <NewBoxForm addBox={addBox}/>
  {renderBoxes()}
  </div>
);
}

export default BoxList;