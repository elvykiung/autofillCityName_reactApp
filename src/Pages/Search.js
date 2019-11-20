import React, { Component } from "react";
import "./style.css";
import SearchForm from "../Components/SearchForm";
import API from "../utils/API";
import SearchResults from "../Components/SearchResult";

class Search extends Component {
  state = {
    search: "",
    cities: [],
    results: []
  };

  componentDidMount() {
    API.getData()
      .then(res => {
        this.setState({
          cities: res.data.map(place => {
            return place;
          })
        });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, "gi");

      return place.city.match(regex);
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const matchResult = this.findMatches(this.state.search, this.state.cities);

    this.setState({
      results: matchResult
    });
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div>
        <h1> Let's Search your City Population</h1>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          cities={this.state.cities}
          search={this.state.search}
        ></SearchForm>
        <h1>Search Result</h1>
        <SearchResults
          results={this.state.results}
          numberWithCommas={this.numberWithCommas}
        />
      </div>
    );
  }
}

export default Search;
