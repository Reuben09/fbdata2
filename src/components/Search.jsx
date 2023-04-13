
function Search() {
  return (
    <div className="text-center">
      <select id="cars" className="w-1/4 text-center cursor-pointer">
  <option value="volvo">All</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default Search;