// inputNode.js

import { useState } from 'react';
import { Handle,Position } from 'reactflow';
import inputLogo from '../assets/customInput.png'


export const InputNode = ({ id, data }) => {
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
    <div className='input-node'>
        <div className='right-handle'>
          <span>LLM Engine</span>
        <Handle type='source' position={Position.Right}></Handle>
        </div>
      <div className='header'>
        <div className='header-info'>
           <img src={inputLogo}></img>
           <span>INPUT</span>
        </div>
        <div className='status'>

        </div>
      </div>
      <div className='node-des'>
           <p>Write the input/ question you want to ask</p>
      </div>
      <div className='node-details'>
          <p>Input</p>
          <input placeholder='Type Something...'></input>
      </div>

    </div>
  );
}
