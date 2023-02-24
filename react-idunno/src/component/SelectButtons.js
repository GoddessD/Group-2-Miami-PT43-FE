import React from "react";
import "../App.css"
import { useState } from "react";


function SelectButtons ({button,categorySelection}){
    const [active,setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    
    return(
        <div>
        <div><button type="button" className={active ? "myButton2" : "myButton"} onClick={()=> {categorySelection();}} >{button}</button></div>
        </div>
    );
};

export default SelectButtons;


//{active ? "selectedbuttons" : ""}