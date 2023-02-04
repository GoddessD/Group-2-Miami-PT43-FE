import React from "react";
import "../App.css"
import { useState } from "react";


function SelectButtons ({button,categorySelection}){
    const [active,setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    
    return(
    <div><button type="button" className={active ? "selectedbuttons" : ""}  onClick={()=> {categorySelection(); handleClick()}}>{button}</button></div>
    
    );
}

export default SelectButtons;