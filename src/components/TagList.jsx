import React from "react";

export default function TagList({ tagList, removeItem }) {
  
  return (
    <div className="list-container">
      {tagList.map(item => {
        const { id, text } = item;

        return (
          <div className="good" key={id}>
            <div className="check-container">
              <p>{text}</p>
            </div>
            <div
              className="delete-todo-container"
              onClick={() => removeItem(id)}
            >
              Delete
            </div>
          </div>
        );
      })}
    </div>
  );
}
