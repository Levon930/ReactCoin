import React from "react";
import "./Search.css";
import fetchService from "../../Services/Fetch";
import Loading from "../Loading/Loading";
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchResults: [],
      loading: false,
    };
  }
  handleChange = async (e) => {
    const { value } = e.target;
    this.setState({
      searchQuery: value,
    });
    if (!value) {
      return "";
    }
    this.setState({
      loading: true,
    });
    const response = await fetchService.get(
      `autocomplete?searchQuery=${value}`
    );
    this.setState({
      searchResults: response,
      loading: false,
    });
  };
  renderSearchRes = () => {};
  render() {
    const { searchQuery, loading } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          value={searchQuery}
          placeholder="Currency name"
          onChange={this.handleChange}
        />
        {loading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
      </div>
    );
  }
}
export default Search;
