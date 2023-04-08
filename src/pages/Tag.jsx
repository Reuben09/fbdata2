import React from "react";
import { useState, useEffect } from "react";
import TagList from "../components/TagList";
import "../components/keyword.css";


export default function Tag() {
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState();

  const fetchTags = async () => {
    const response = await fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/tags');
    const data = await response.json();
    setTagList(data.tags);
  };

  const data = {tag: tag}
  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/tags', {
      method: 'POST',
      headers:{
       "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(function(response){
       return response.json()
    }).then(function(data){
       console.log(data)
       setTag("");
       setTimeout(window.location.reload(), 2000)
    })
  };

  const removeItem = itemId => {
    const data = {id: itemId}
    fetch('http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/tags', {
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
    fetchTags()
  }, []);

  return (
    <div className="App">
      <div className="input-container">
        <div className="overall-input-container">
          <div className="input-container">
            <div className="inner-input-container">
              <input
                type="text"
                value={tag}
                onChange={e => setTag(e.target.value)}
              />
            </div>
            <button id="btn-add" type="submit" onClick={handleSubmit}>
              Add Tag
            </button>
          </div>
        </div>
      </div>
      <div className="list-container">
        {
          tagList? 
          <>
            <TagList
          tagList={tagList}
          removeItem={removeItem}
        />
          </>
          :<p>Loading...</p>
        }
      </div>
    </div>
  );
}
