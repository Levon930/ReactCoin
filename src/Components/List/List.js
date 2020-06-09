import React from "react";
import "./List.css";
import fetchService from "../../Services/Fetch";
import Pagination from "../Pagination/Pagination";
import Table from "./Table";
import Loading from "../Loading/Loading";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      currencies: [],
      page: 1,
      error: null,
      totalPages: 0,
    };
  }
  handlePaginationClick = (direction) => {
    if (direction === "next") {
      this.setState((prev) => {
        return {
          page: prev.page + 1,
        };
      }, this.currenciesGeter);
    } else {
      this.setState((prev) => {
        return {
          page: prev.page - 1,
        };
      }, this.currenciesGeter);
    }
  };

  currenciesGeter = async () => {
    const response = await fetchService.get(
      `cryptocurrencies?page=${this.state.page}&perPage=20`
    );
    this.setState({
      currencies: response.currencies,
      loading: false,
      totalPages: response.totalPages,
    });
  };
  SortAlphabet = () => {
    this.setState((prevState) => {
      const sort = prevState.currencies.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });

      return {
        currencies: sort,
      };
    });
  };
  SortMany = (data) => {
    this.setState((prevState) => {
      const sort = prevState.currencies.sort((a, b) => {
        return parseInt(b[data]) - parseInt(a[data]);
      });
      return {
        currencies: sort,
      };
    });
  };

  componentDidMount() {
    this.currenciesGeter();
  }

  render() {
    console.log("render");
    const { loading, currencies, totalPages, page } = this.state;
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }
    return (
      <>
        <Table
          currencies={currencies}
          loading={loading}
          currenciesGeter={this.currenciesGeter}
          SortAlphabet={this.SortAlphabet}
          SortMany={this.SortMany}
        />
        <Pagination
          handlePaginationClick={this.handlePaginationClick}
          totalPages={totalPages}
          page={page}
        />
      </>
    );
  }
}
export default List;
