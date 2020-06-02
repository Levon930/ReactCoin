import React from "react";
import "./List.css";
import fetchService from "../../Services/Fetch";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      currencies: [],
      error: null,
    };
  }
  renderChangePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>;
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>;
    } else {
      return <span>{percent}</span>;
    }
  };
  currenciesGeter = async (quantity = 10) => {
    const response = await fetchService.get(
      `cryptocurrencies?page=1&perPage=${quantity}`
    );
    this.setState({
      currencies: response.currencies,
      loading: false,
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

      console.log(sort);
      return {
        currencies: sort,
      };
    });
  };
  SortMany = (data) => {
    this.setState((prevState) => {
      const sort = prevState.currencies.sort((a, b) => {
        return b[data] - a[data];
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
    const { loading, currencies } = this.state;
    if (loading) {
      return <div>loading....</div>;
    }
    return (
      <div className="Table-container">
        <select
          onChange={(e) => {
            this.currenciesGeter(e.target.value);
          }}
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
        <table className="Table">
          <thead className="Table-head">
            <tr>
              <th onClick={this.SortAlphabet}>Cryptocurrency</th>
              <th
                onClick={(e) => {
                  this.SortMany("price");
                }}
              >
                Price
              </th>
              <th
                onClick={(e) => {
                  this.SortMany("marketCap");
                }}
              >
                Market Cap
              </th>
              <th
                onClick={(e) => {
                  this.SortMany("percentChange24h");
                }}
              >
                24H Change
              </th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {currencies.map((currency) => (
              <tr key={currency.id}>
                <td>
                  <span className="Table-rank">{currency.rank}</span>
                  {currency.name}
                </td>
                <td>
                  <span className="Table-dollar">$</span>
                  {currency.price}
                </td>
                <td>
                  <span className="Table-dollar">${currency.marketCap} </span>
                </td>
                <td>{this.renderChangePercent(currency.percentChange24h)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default List;
