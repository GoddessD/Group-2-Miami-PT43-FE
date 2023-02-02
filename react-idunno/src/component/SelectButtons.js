import React from "react";
import "../App.css"

function SelectButtons ({button,categorySelection}){
    return(
    <div>
    <button className="toggle" class="button-85" role="button" onClick={categorySelection}>{button}</button>
    </div>
    )
}

export default SelectButtons;