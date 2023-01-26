import React from "react";
import "../App.css"
import Card from "../component/Card";

//Add class names 
//Level 1: Family, Friends,Date Night - 1 selection
//Level 2: Resturant, Event, Activity - on/off Toggle select individual or multiple refer to street light project 
//Submit button sends post request to backend/api with selections 
//
//Use buttons of for roulette style
//

const Generator = () => {
  return (
    <div>
      <h1>Let us decide</h1>
      <h2>Step 1: Select perfered category</h2>
      <button type="button" class="btn btn-primary btn-lg m-2">Family</button>
      <button type="button" class="btn btn-primary btn-lg m-2">Friends</button>
      <button type="button" class="btn btn-primary btn-lg m-2">Date Night</button>
      <button type="button" class="btn btn-primary btn-lg m-2">Rolling Solo</button>
      <h2>
        Step 2: Select your adventure! !
      </h2>
      <div className="Card">
      <Card src={'https://picsum.photos/300/200'} title = {'Resturant'} />
      <Card src={'https://cdn.techmadeplain.com/img/2014/300x200.png'} /> 
      <Card />
      </div>
    </div>
  );
};

export default Generator;