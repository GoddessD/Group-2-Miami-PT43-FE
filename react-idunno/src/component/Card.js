import React from "react";
import "../App.css"
import SelectButtons from "./SelectButtons";

function Card({src,title,description,button1,button2,saveIt,generate,display,secondButtonPressed,firstButtonPressed}){
   

    
  
  
    return (
        <div className="card m-5 cardwidth">
          <img class="card-img-top" src={src} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <button type="button" class="btn btn-success" onClick={()=> {generate();secondButtonPressed();}} disabled={!firstButtonPressed}>{button1}</button>
            <button type="button" style={{display:display}} class= "btn btn-success" onClick={saveIt}>{button2}</button>
            
            
          </div>
        </div>

     
    );
  };
  
  

  
  
  export default Card;
    