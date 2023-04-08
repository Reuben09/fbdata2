import React from "react";
import { useState, useEffect } from "react";
import LocationList from "../components/LocationList";
import "../components/keyword.css";


export default function Location() {
  const [location, setLocation] = useState("");
  const [locationList, setLocationList] = useState();

  const fetchLocation = async () => {
    const response = await fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/locations');
    const data = await response.json();
    setLocationList(data.locations);
  };

  const data = {location: location}
  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/locations', {
      method: 'POST',
      headers:{
       "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(function(response){
       return response.json()
    }).then(function(data){
       console.log(data)
       setLocation("");
       setTimeout(window.location.reload(), 2000)
    })
  };

  // const removeItem = itemId => {
  //   const data = {id: itemId}
  //   fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/tags', {
  //     method: 'DELETE',
  //     headers:{
  //      "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data),
  //   }).then(function(response){
  //      return response.json()
  //   }).then(function(data){
  //      console.log(data)
  //      setTimeout(window.location.reload(), 2000)
  //   })
  // };


  useEffect(() => {
    fetchLocation()
  }, []);

  return (
    <div className="App">
      <div className="input-container">
        <div className="overall-input-container">
          <div className="input-container">
            <div className="inner-input-container">
              <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
            <button id="btn-add" type="submit" onClick={handleSubmit}>
              Add Location
            </button>
          </div>
        </div>
      </div>
      <div className="list-container">
        {
          locationList? 
          <>
            <LocationList
          locationList={locationList}
        />
          </>
          :<p>Loading...</p>
        }
      </div>
    </div>
  );
}
