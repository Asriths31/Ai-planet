// inputNode.js

import { useState,useEffect } from 'react';

import { Handle,Position } from 'reactflow';
import llmLogo from '../assets/LLM.png'

export const LLMNode = ({ id, data }) => {
  // console.log("id",id,"data",data)
  const[input1,setInput1]=useState("")
  const[input2,setInput2]=useState("")
  const[input3,setInput3]=useState("")
  const[input4,setInput4]=useState("")
  const[err,setErr]=useState(false)
  function handleChange1(e){ 
    setInput1(e.target.value)
  }
  function handleChange2(e){ 
    setInput2(e.target.value)
  }
  function handleChange3(e){ 
    setInput3(e.target.value)
  }
  function handleChange4(e){ 
    setInput4(e.target.value)
  }
 
useEffect(()=>{
 if(data.run==='true'){
 if(input1==="" || input2==="" || input3==="" || input4===""){
   setErr(true)  
   console.log("error detected")
   
 }
 else{
   setErr(false)
   console.log("ksehfkseg")
 }}
 console.log("kddj")
},[input1,input2,input3,input4])

  return (
    <div className='llm-node' style={err?{border:"1px solid #ff5353"}:{border:"none"}}>
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
        <div className='status' style={err?{backgroundColor:"#ff5353"}:{backgroundColor:"#666666"}}>
        
        </div>
        {err?
           <div className='err-msg'>
                <p>Please fill All the boxes</p>
                <div className='arrow'></div>

           </div>:<span className='err-span'></span>}
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
            <input placeholder='type something...' onChange={handleChange1}></input>

          </div>
          <div>
            <p>OpenAI Key</p>
            <input placeholder='type something...' onChange={handleChange2} type='password'></input>

          </div>
          <div>
            <p>Max Tokens</p>
            <input placeholder='type something...' onChange={handleChange3}></input>
          </div>
          <div>
            <p>Temperature</p>
            <input type='number' onChange={handleChange4}></input>
          </div>
          
      </div>

    </div>
  );
}
