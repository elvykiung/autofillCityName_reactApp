import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search search-form">
      <div className="form-group">
        <label htmlFor="city">City Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="cities"
          list="cities"
          type="text"
          className="form-control"
          placeholder="Type in a city"
          id="city"
        />
        <datalist id="cities">
          {props.cities.map(city => (
            <option value={city.city} key={city.latitude} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
