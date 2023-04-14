import React from "react";
import { useState, useEffect } from "react";
import List from "../../components/List";
import "../../components/keyword.css";


export default function Keyword() {
  const [name, setName] = useState("");
  const [list, setList] = useState();

  const fetchKeywords = async () => {
    const response = await fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/keywords');
    const data = await response.json();
    setList(data.keywords);
  };

  const data = {keyword: name}
  const handleSubmit = e => {
    e.preventDefault();

     fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/keywords', {
       method: 'POST',
       headers:{
        "Content-Type": "application/json"
       },
       body: JSON.stringify(data),
     }).then(function(response){
        return response.json()
     }).then(function(data){
        console.log(data)
        setName("");
        setTimeout(window.location.reload(), 2000)
     })
 };

  const removeItem = itemId => {
    const data = {id: itemId}
    fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/keywords', {
      method: 'DELETE',
      headers:{
       "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(function(response){
       return response.json()
    }).then(function(data){
       console.log(data)
       setTimeout(window.location.reload(), 2000)
    })
  };

  useEffect(() => {
    fetchKeywords();
  }, []);

  return (
    <div className="App">
      <div className="input-container">
        <div className="overall-input-container">
          <div className="input-container">
            <div className="inner-input-container">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <button id="btn-add" type="submit" onClick={handleSubmit}>
              Add Keyword
            </button>
          </div>
        </div>
      </div>
      <div className="list-container">
        {
            list?
         <>
         <List
            list={list}
            removeItem={removeItem}
          />
  
         </> :
            <p className="text-center">Loading...</p>
        }
      </div>
    </div>
  );
}
