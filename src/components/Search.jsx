import { useEffect, useState } from "react";

function Search({ locationList, selectedLocation, onLocationChange }) {

  useEffect(()=> {
    console.log(locationList);
  },[])
  return (
    <div className="text-center">
      <select onChange={onLocationChange} value={selectedLocation} className="w-1/4 text-center cursor-pointer py-2">
      {locationList.map(item => {
        const { id, name } = item;
        return (
          <option key={id} value={id} className="cursor-pointer">{name}</option>
        );
      })}
      </select>
    </div>
  );
}

export default Search;