// inputNode.js

import { useState } from 'react';

import { Handle,Position } from 'reactflow';
import llmLogo from '../assets/LLM.png'

export const LLMNode = ({ id, data }) => {
  // console.log("id",id,"data",data)
 

  return (
    <div className='llm-node'>
      <div className='right-handle'>
          <span>Output</span>
          <Handle type='source' position={Position.Right} style={{backgroundColor:"#ffffff",border:"1px solid #7d5ac7"}}></Handle>
      </div>
      <div className='left-handle'>
           <Handle type='target' position={Position.Left} style={{backgroundColor:"#ffffff",border:"1px solid #7d5ac7"}}></Handle>
           <p>Input</p>
      </div>
      <div className='header'>
        <div className='header-info'>
           <img src={llmLogo}></img>
           <span>LLM ENGINE</span>
        </div>
        <div className='status'>

        </div>
      </div>
      <div className='node-des'>
           <p>Lorem ipsum sic dolar amet</p>
      </div>
      <div className='node-details'>
          <div>
            <p>Model Name</p>
            <select>
              <option value="gpt-3.5">gpt-3.5</option>
            </select>
          </div>
          <div>
            <p>OpenAI API Base</p>
            <input placeholder='type something...'></input>

          </div>
          <div>
            <p>OpenAI Key</p>
            <input placeholder='type something...'></input>

          </div>
          <div>
            <p>Max Tokens</p>
            <input placeholder='type something...'></input>
          </div>
          <div>
            <p>Temperature</p>
            <input type='number'></input>
          </div>
          
      </div>

    </div>
  );
}
