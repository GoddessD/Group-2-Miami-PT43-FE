import React from "react";
import "../App.css"

function Card({src,title,description,button1,button2}){
    return (
        <div className="card m-5">
          <img class="card-img-top" src={src} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <button type="button" class="btn btn-success">{button1}</button>
            <button type="button" class="btn btn-success">{button2}</button>
          </div>
        </div>

     
    );
  };
  
  

  
  
  export default Card;
    