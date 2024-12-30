// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import outputLogo from './assets/customOutput.png'
export const OutputNode = ({ id, data }) => {
  // console.log("id",id,"data",data)

  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  const[currName,setCurrName]=useState("")
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div  className='output-node'>
            

      <div className='left-handle'>
           <Handle type='source'></Handle>
           <p>LLM Engine</p>
      </div>
      <div className='header'>
        <div className='header-info'>
           <img src={outputLogo}></img>
           <span>OUTPUT</span>
        </div>
        <div className='status'>

        </div>
      </div>
      <div className='node-des'>
           <p>Lorem ipsum sic dolar amet</p>
      </div>
      <div className='node-details'>
          <p>Output Response</p>
          <input placeholder='Output Response will be shown here'></input>
      </div>
    </div>
  );
}
