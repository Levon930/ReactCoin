import React from "react";
import "./Search.css";
import fetchService from "../../Services/Fetch";
import Loading from "../Loading/Loading";
import { withRouter } from "react-router-dom";
import debounce from "../../Services/src/Helpers/debounce";
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
    this.fetchData(value);
  };
  fetchCur = async (value) => {
    const response = await fetchService.get(
      `autocomplete?searchQuery=${value}`
    );
    this.setState({
      searchResults: response,
      loading: false,
    });
  };
  handleRedirect = (id) => {
    this.setState({
      searchQuery: "",
      searchResults: [],
    });
    this.props.history.push(`/currency/${id}`);
  };
  componentDidMount() {
    this.fetchData = debounce((value) => this.fetchCur(value), 1000);
  }
  renderSearchRes = () => {
    const { searchQuery, loading, searchResults } = this.state;
    if (!searchQuery) {
      return "";
    }
    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="Search-result"
              onClick={() => {
                this.handleRedirect(result.id);
              }}
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      );
    }
    if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">No results found.</div>
        </div>
      );
    }
  };
  render() {
    const { searchQuery, loading, searchResults } = this.state;
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
        {this.renderSearchRes()}
      </div>
    );
  }
}
export default withRouter(Search);
