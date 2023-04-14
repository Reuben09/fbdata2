import React from "react";

export default function LocationList({ locationList }) {
  
  return (
    <div className="list-container">
      {locationList.map(item => {
        const { id, name } = item;

        return (
          <div className="good" key={id}>
            <div className="check-container">
              <p>{name}</p>
            </div>
            <div
              className="delete-todo-container"
            >
              Delete
            </div>
          </div>
        );
      })}
    </div>
  );
}
