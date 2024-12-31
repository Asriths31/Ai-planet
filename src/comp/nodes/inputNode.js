// inputNode.js

import { useState,useEffect } from 'react';
import { Handle,Position } from 'reactflow';
import inputLogo from '../assets/customInput.png'


export const InputNode = ({ id, data }) => {

  console.log("id",id,"data",data.run)
   const[input,setInput]=useState("")
   const[err,setErr]=useState(false)
  function handleChange(e){ 
    setInput(e.target.value)
  }
  
 useEffect(()=>{
  if(data.run==='true'){
  if(input===""){
    setErr(true)  
    console.log("error detected")
    
  }
  else{
    setErr(false)
    console.log("ksehfkseg")
  }}
  console.log("kddj")
 },[input])
   return (
    <div className='input-node' style={err?{border:"1px solid #ff5353"}:{border:"none"}}>
        <div className='right-handle'>
          <span>LLM Engine</span>
        <Handle type='source' position={Position.Right} style={{backgroundColor:"#ffffff",border:"1px solid #7d5ac7"}}></Handle>
        </div>
      <div className='header'>
        <div className='header-info'>
           <img src={inputLogo}></img>
           <span>INPUT</span>
        </div>
        <div className='status' style={err?{backgroundColor:"#ff5353"}:{backgroundColor:"#666666"}}>

        </div>
        {err?
           <div className='err-msg'>
                <p>Please fill All the boxes</p>
                <div className='arrow'></div>
           </div>:<span className="err-span"></span>}
      </div>
      <div className='node-des'>
           <p>Write the input/ question you want to ask</p>
      </div>
      <div className='node-details'>
          <p>Input</p>
          <input placeholder='Type Something...' onChange={handleChange}></input>
      </div>

    </div>
  );
}
