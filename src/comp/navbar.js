import React,{createContext,useContex,useState } from "react";
import logo from "./assets/logo.png"
import runLogo from './assets/runLogo.png'



function Navbar({setRun,run}){
    console.log(run)
    function handleClick(){
        setRun(true)
        console.log("clickeddd",run)
    }
    return(
        <div className="navbar">
            <img src={logo}></img>
            <div>
            <button>Deploy</button>
            <button onClick={handleClick}><img src={runLogo}></img> Run</button>
            </div>
        </div>
    
    )
}

export default Navbar