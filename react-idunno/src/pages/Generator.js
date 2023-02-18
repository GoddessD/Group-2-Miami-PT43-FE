import React, { useEffect, useState } from "react";
import "../App.css"
import Card from "../component/Card";
import SelectButtons from "../component/SelectButtons";
import axios from "axios";



const Generator = () => {
  const [restaurantSaveButton, setRestaurantSaveButton] = useState('Book Now') // change to book now
  const [restaurantButton, setRestaurantButton] = useState('Lets Grab a Bite')
  const [restaurantDescription, setRestaurantDescription] = useState()
  const [restaurantTitle, setRestaurantTitle] = useState()
  const [restaurantPicture, setRestaurantPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [activitySaveButton, setActivitySaveButton] = useState('Book Now') //change to book now
  const [activityButton, setActivityButton] = useState('Lets Have Some Fun')
  const [activityDescription, setActivityDescription] = useState()
  const [activityTitle, setActivityTitle] = useState()
  const [activityPicture, setActivityPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  // const [eventSaveButton, setSaveButton] = useState('Save it') //change to book now 
  // const [eventButton, setEventButton] = useState('Find Event')
  // const [eventDescription, setEventDescription] = useState('Description')
  // const [eventTitle, setEventTitle] = useState('Event')
  // const [eventPicture, setEventPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [display, setDisplay] = useState('none')
  const [display2, setDisplay2] = useState('none')
  // const [display3, setDisplay3] = useState('none')

  const [items, setItems] = useState('test')

  console.log("first", items)

  const randomNumber = Math.floor(Math.random() * 3)


  const fetchRequest = async () => { //restaurant card
  const options = {
  method: 'GET',
  url: 'https://local-business-data.p.rapidapi.com/search-nearby',
  params: {
    query: 'Restaurant',
    lat: '25.79',
    lng: ' -80.13',
    limit: '3',
    language: 'en',
    region: 'us'
  },
  headers: {
    'X-RapidAPI-Key': '60e54d8e53msh1fcd4f2bc4a0dcep180d96jsnd5c814068d8b',
    'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com',
    'Access-Control-Allow-Origin': '*'
  }
};


    axios.request(options) //restaurant card
    .then(function (response) {
      console.log(response.data);
      const res= Object.values(response.data)
      const res2= res[2]
      console.log('res',res)
      console.log('res2',res2)
      setRestaurantTitle(res2[randomNumber].name)
      setRestaurantDescription(res2[randomNumber].type) //add booking link use state to provide more info
      setRestaurantPicture(res2[randomNumber].photos_sample[0].photo_url)
      console.log('restaurant description', restaurantDescription)
      console.log('restaurant photo', restaurantPicture)
    })
    
    .catch((error) => {
      console.error(error);
    });
  };

  const fetchRequest2 = async () => { //activity card
    const options2 = {
    method: 'GET',
    url: 'https://local-business-data.p.rapidapi.com/search-nearby',
    params: {
      query: 'fun activity',
      lat: '25.79',
      lng: ' -80.13',
      limit: '3',
      language: 'en',
      region: 'us'
    },
    headers: {
      'X-RapidAPI-Key': '60e54d8e53msh1fcd4f2bc4a0dcep180d96jsnd5c814068d8b',
      'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com',
      'Access-Control-Allow-Origin': '*'
    }
  };

  axios.request(options2) //activity card
    .then(function (response) {
      console.log(response.data);
      const res= Object.values(response.data)
      const res2= res[2]
      console.log('res',res)
      console.log('res2',res2)
      setActivityTitle(res2[randomNumber].name)
      setActivityDescription(res2[randomNumber].type)
      setActivityPicture(res2[randomNumber].photos_sample[0].photo_url)
      // setRestaurantButton(res2[randomNumber].website)
      console.log('activity description', restaurantDescription)
      console.log('activity photo', restaurantPicture)
    })
    
    .catch((error) => {
      console.error(error);
    });
  };




  // const eventSaveIt = () => {
  //   console.log('Event has been saved')
  // }

  const activitySaveIt = () => {
    console.log('Activity has been saved')
  }

  const restaurantSaveIt = () => {
    console.log('Restaurant  has been saved')
  }

  const restaurantGenerate = () => {
    setDisplay(false)
    fetchRequest(); //changes the query fetch request 
    console.log('Restaurant has been generated')
  }

  const activityGenerate = () => {
    setDisplay2(false)
    fetchRequest2(); //changes the query fetch request
    console.log('Activity has been generated')
  }

  // const eventGenerate = () => {
  //   setDisplay3(false)
  //   console.log('Event has been generated')
  // }

  const familyCategory = () => {
    console.log('Family category has been selected')
  }

  const friendsCategory = () => {
    console.log('Friends category has been selected')
  }

  const dateNightCategory = () => {
    console.log('Date Night category has been selected')
  }

  const rollingSoloCategory = () => {
    console.log('Rolling Solo category has been selected')
  }

  // if category button is not selected 
  // then card button is false 

  // if category button is selected
  // then card button is true

  const [firstButtonPressed, setFirstButtonPressed] = useState(false);
  const [secondButtonPressed, setSecondButtonPressed] = useState(false);

  const handleFirstButtonClick = () => {
    setFirstButtonPressed(true);
    // alert('First button click.');
  }

  const handleSecondButtonClick = () => {
    if (firstButtonPressed) {
      setSecondButtonPressed(true);
    } else {
      alert("Please select a category first.");
    }

  }

  return (
    <div>
      <h1 className="Decide">Let us decide</h1>
      <h2 className="Select">
        Step 1: Select perfered category
      </h2>
      <div className="SelectButtons">
        <SelectButtons button={'Family'} categorySelection={familyCategory} firstButtonPressed={handleFirstButtonClick} />
        <SelectButtons button={'Friends'} categorySelection={friendsCategory} firstButtonPressed={handleFirstButtonClick} />
        <SelectButtons button={'Date Night'} categorySelection={dateNightCategory} firstButtonPressed={handleFirstButtonClick} />
        <SelectButtons button={'Rolling Solo'} categorySelection={rollingSoloCategory} firstButtonPressed={handleFirstButtonClick} />
      </div>
      

      
      <h2 className="Select">
        Step 2: Select your adventure!
      </h2>
      <div className="Card">
        <Card src={restaurantPicture} title={restaurantTitle} description={restaurantDescription} button1={restaurantButton} generate={restaurantGenerate} display={display} button2={restaurantSaveButton} saveIt={restaurantSaveIt} secondButtonPressed ={handleSecondButtonClick} />
        <Card display={display2} src={activityPicture} title={activityTitle} description={activityDescription} button1={activityButton} generate={activityGenerate} button2={activitySaveButton} saveIt={activitySaveIt} secondButtonPressed ={handleSecondButtonClick} />
        {/* <Card display={display3} src={eventPicture} title={eventTitle} description={eventDescription} button1={eventButton} generate={eventGenerate} button2={eventSaveButton} saveIt={eventSaveIt} /> */}
      </div>
    </div>
  );
};



export default Generator;