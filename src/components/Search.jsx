// import SearchIcon from "@mui/icons-material";

function Search() {
  return (
    <div className="overall-input-container">
      <div className="input-container">
        <div className="inner-input-container">
          {/* <SearchIcon className="search-icon" /> */}
          <input type="text" placeholder="search location" />
        </div>

        <button>search</button>
      </div>
    </div>
  );
}

export default Search;