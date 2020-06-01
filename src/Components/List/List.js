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
  currenciesGeter = async () => {
    const response = await fetchService.get(
      "cryptocurrencies?page=1&perPage=20"
    );
    this.setState({
      currencies: response.currencies,
      loading: false,
    });
  };

  componentDidMount() {
    this.currenciesGeter();
  }

  render() {
    const { loading, currencies } = this.state;
    if (loading) {
      return <div>loading....</div>;
    }
    return (
      <div className="Table-container">
        <table className="Table">
          <thead className="Table-head">
            <tr>
              <th>Cryptocurrency</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24H Change</th>
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
