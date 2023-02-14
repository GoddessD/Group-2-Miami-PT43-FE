import React, { useEffect, useState } from "react";
import "../App.css"
import Card from "../component/Card";
import SelectButtons from "../component/SelectButtons";
import axios from "axios";



const Generator = () => {
  const [restaurantSaveButton, setRestaurantSaveButton] = useState('Save it')
  const [restaurantButton, setRestaurantButton] = useState('Find Restaurant')
  const [restaurantDescription, setRestaurantDescription] = useState('Description')
  const [restaurantTitle, setRestaurantTitle] = useState('Restaurant')
  const [restaurantPicture, seRestaurantPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [activitySaveButton, setActivitySaveButton] = useState('Save it')
  const [activityButton, setActivityButton] = useState('Find Activity')
  const [activityDescription, setActivityDescription] = useState('Description')
  const [activityTitle, setActivityTitle] = useState('Activity')
  const [activityPicture, setActivityPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [eventSaveButton, setSaveButton] = useState('Save it')
  const [eventButton, setEventButton] = useState('Find Event')
  const [eventDescription, setEventDescription] = useState('Description')
  const [eventTitle, setEventTitle] = useState('Event')
  const [eventPicture, setEventPicture] = useState('https://cdn3.vectorstock.com/i/1000x1000/63/82/person-silhouette-with-question-mark-vector-13296382.jpg')

  const [display, setDisplay] = useState('none')
  const [display2, setDisplay2] = useState('none')
  const [display3, setDisplay3] = useState('none')

  const [items, setItems] = useState('test')

  console.log("first", items)

  const test = async () => {
    const data = await axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=usa`,
        {
          headers: {
            Authorization: `Bearer VbkokAqv7FIuyGQyAIzby2k7N_x7jEpphENuKFAlXtvmMUaeggk1o0DSgPyaK8zSlmswYjx8ZKbnlgtOKCQ733_91mOP-WwQsFpOB7dRkTL_Tlt6tkEFwKLXYkvkY3Yx`,
          },
          params: {
            term: 'restaurants',
          },
        },
      )

      .then(json => {
        setItems({ items: json.data.businesses });
      })
      .catch(err => {
        console.log(err);
      });
  };




  const eventSaveIt = () => {
    console.log('Event has been saved')
  }

  const activitySaveIt = () => {
    console.log('Activity has been saved')
  }

  const restaurantSaveIt = () => {
    console.log('Restaurant  has been saved')
  }

  const restaurantGenerate = () => {
    setDisplay(false)
    console.log('Restaurant has been generated')
  }

  const activityGenerate = () => {
    setDisplay2(false)
    test();
    console.log('Activity has been generated')
  }

  const eventGenerate = () => {
    setDisplay3(false)
    console.log('Event has been generated')
  }

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

  return (
    <div>
      <h1 className="Decide">Let us decide</h1>
      <h2 className="Select">
        Step 1: Select perfered category
      </h2>
      <div className="SelectButtons">
        <SelectButtons button={'Family'} categorySelection={familyCategory} />
        <SelectButtons button={'Friends'} categorySelection={friendsCategory} />
        <SelectButtons button={'Date Night'} categorySelection={dateNightCategory} />
        <SelectButtons button={'Rolling Solo'} categorySelection={rollingSoloCategory} />
      </div>
      <h2 className="Select">
        Step 2: Select your adventure!
      </h2>
      <div className="Card">
        <Card src={restaurantPicture} title={restaurantTitle} description={restaurantDescription} button1={restaurantButton} generate={restaurantGenerate} display={display} button2={restaurantSaveButton} saveIt={restaurantSaveIt} />
        <Card display={display2} src={activityPicture} title={activityTitle} description={activityDescription} button1={activityButton} generate={activityGenerate} button2={activitySaveButton} saveIt={activitySaveIt} />
        <Card display={display3} src={eventPicture} title={eventTitle} description={eventDescription} button1={eventButton} generate={eventGenerate} button2={eventSaveButton} saveIt={eventSaveIt} />
      </div>
    </div>
  );
};

export default Generator;