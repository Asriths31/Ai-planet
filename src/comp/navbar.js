import react from "react";
import logo from "./assets/logo.png"
import runLogo from './assets/runLogo.png'
function Navbar(){


    return(
        <div className="navbar">
            <img src={logo}></img>
            <div>
            <button>Deploy</button>
            <button><img src={runLogo}></img> Run</button>
            </div>
        </div>
    
    )
}

export default Navbar