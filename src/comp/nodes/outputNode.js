// outputNode.js

import { useState,useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import outputLogo from '../assets/customOutput.png'
export const OutputNode = ({ id, data }) => {
  // console.log("id",id,"data",data)
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
    <div  className='output-node' style={err?{border:"1px solid #ff5353"}:{border:"none"}}>
            

      <div className='left-handle'>
           <Handle type='target' position={Position.Left} style={{backgroundColor:"#ffffff",border:"1px solid #7d5ac7"}}></Handle>
           <p>LLM Engine</p>
      </div>
      <div className='header'>
        <div className='header-info'>
           <img src={outputLogo}></img>
           <span>OUTPUT</span>
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
          <p>Output Response</p>
          <input placeholder='Output Response will be shown here' onChange={handleChange}></input>
      </div>
    </div>
  );
}
