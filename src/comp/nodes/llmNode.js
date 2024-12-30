// inputNode.js

import { useState } from 'react';

import { Handle,Position } from 'reactflow';
export const LLMNode = ({ id, data }) => {
  // console.log("id",id,"data",data)
  const [inputType, setInputType] = useState(data.inputType || 'Text');
  const[currName,setCurrName]=useState("")

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className='llm-node'>
      <Handle type='target' position={Position.Left}/>
      <Handle type="source" position={Position.Right}/>
      <div className='user-data'>
<h2>LLM</h2>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            placeholder='This is your model'
          />
          
        </label>
       
      </div>

    </div>
  );
}
