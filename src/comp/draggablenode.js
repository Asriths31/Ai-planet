// draggableNode.js
import customInput from "./assets/customInput.png"
import customOutput from "./assets/customOutput.png"
import LLM from "./assets/LLM.png"
import menu from "./assets/menu.png"

export const DraggableNode = ({ type, label,inputs,outputs,inputType }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType,inputs,outputs,inputType }
      // console.log(appData)
      // console.log("event :",event,"nodetype :",nodeType)
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  console.log("type",type)
    return ( 
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
     
        }} 
        draggable
      >
          <div className="draggableNode">     
             <div>
            {type==="customInput"?<img src={customInput}></img>:(type==="customOutput"?<img src={customOutput}></img>:<img src={LLM}></img>)}
             <span>{label}</span>
              </div>
            <img src={menu}></img>
          </div>
      </div>
    );
  };
  