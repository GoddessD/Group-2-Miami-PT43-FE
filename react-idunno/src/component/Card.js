import React from "react";
import "../App.css"
import SelectButtons from "./SelectButtons";

function Card({src,title,description,button1,button2,button3,saveIt,generate,generate2,display,secondButtonPressed,firstButtonPressed,}){
   

    
  
  
    return (
        <div className="card m-5 cardwidth">
          <img class="card-img-top" src={src} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <button type="button" class="myButton3" onClick={()=> {generate();}}>{button1}</button>
            <button type="button" style={{display:display}} class="tryAgain" onClick={()=> {generate2();}}>{button3}</button>
            <a href="https://www.opentable.com/" target= "_blank">
            <button type="button" style={{display:display}} class= "booknow m-3" onClick={saveIt}>{button2}</button>
            </a>
          </div>
        </div>
    

     
    );
  };
  
  

  
  
  export default Card;
    
