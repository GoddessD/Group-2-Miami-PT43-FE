import React, { useState } from "react";
import "../App.css"
import Card from "../component/Card";
import SelectButtons from "../component/SelectButtons";



// use state for resturant etc everything that updates after clicking submit button 
// hidden button for save 

const Generator = () => {
  
  const [restaurantSaveButton,setRestaurantSaveButton] = useState('Save it lol')
  const [restaurantButton,setRestaurantButton] = useState('Find your Restaurant Lol')
  const [restaurantDescription,setRestaurantDescription] = useState('Description')
  const [restaurantTitle,setRestaurantTitle] = useState('Restaurant')
  const [restaurantPicture,seRestaurantPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [activitySaveButton,setActivitySaveButton] = useState('Save it lol')
  const [activityButton,setActivityButton] = useState('Find your Activity')
  const [activityDescription,setActivityDescription] = useState('Description')
  const [activityTitle,setActivityTitle] = useState('Activity')
  const [activityPicture,setActivityPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [eventSaveButton,setSaveButton] = useState('Save it lol')
  const [eventButton,setEventButton] = useState('Find your Event')
  const [eventDescription,setEventDescription] = useState('Description')
  const [eventTitle,setEventTitle] = useState('Event')
  const [eventPicture,setEventPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  return (
    <div>
      <h1 className="Decide">Let us decide</h1>
      <h2 className="Select">
        Step 1: Select perfered category
      </h2>
      <div className="SelectButtons">
      <SelectButtons button ={'Family'} />
      <SelectButtons button ={'Friends'} />
      <SelectButtons button ={'DateNight'} />
      <SelectButtons button ={'Ringing Solo'} />
      </div>
      <h2 className="Select">
        Step 2: Select your adventure!
      </h2>
      <div className="Card">
      <Card src={restaurantPicture} title = {restaurantTitle} description = {restaurantDescription} button1 = {restaurantButton} button2= {restaurantSaveButton} />
      <Card src={activityPicture} title = {activityTitle} description = {activityDescription} button = {activityButton} button2= {activitySaveButton}/> 
      <Card src={eventPicture} title = {eventTitle} description = {eventDescription} button = {eventButton} button2= {eventSaveButton} /> 
      </div>
    </div>
  );
};

export default Generator;