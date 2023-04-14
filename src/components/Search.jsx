import { useEffect } from "react";

function Search({ locationList }) {
  useEffect(()=> {
    console.log(locationList);
  },[])
  return (
    <div className="text-center">
      <select id="cars" className="w-1/4 text-center cursor-pointer py-2">
      {locationList.map(item => {
        const { id, name } = item;

        return (
          <option value={name} className="cursor-pointer">{name}</option>
        );
      })}
      </select>
    </div>
  );
}

export default Search;