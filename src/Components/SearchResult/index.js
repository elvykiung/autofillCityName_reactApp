import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(place => (
        <div key={place.latitude}>
          <li>
            {place.city}, {place.state}
          </li>
          <li>Population is : {props.numberWithCommas(place.population)}</li>
        </div>
      ))}
    </ul>
  );
}

export default SearchResults;
