import React from "react";
import { withRouter } from "react-router-dom";
import renderChangePercent from "../../Services/src/Helpers/renderChangePercent";
import PropTypes from "prop-types";

const Table = ({
  currencies,
  currenciesGeter,
  SortAlphabet,
  SortMany,

  history,
  ...props
}) => {
  return (
    <div className="Table-container">
      <table className="Table">
        <thead className="Table-head">
          <tr>
            <th onClick={SortAlphabet}>Cryptocurrency</th>
            <th
              onClick={(e) => {
                SortMany("price");
              }}
            >
              Price
            </th>
            <th
              onClick={(e) => {
                SortMany("marketCap");
              }}
            >
              Market Cap
            </th>
            <th
              onClick={(e) => {
                SortMany("percentChange24h");
              }}
            >
              24H Change
            </th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {currencies.map((currency) => (
            <tr
              key={currency.id}
              onClick={() => {
                history.push(`/currency/${currency.id}`);
              }}
            >
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
              <td>{renderChangePercent(currency.percentChange24h)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  currencies: PropTypes.array,
  currenciesGeter: PropTypes.func,
  SortAlphabet: PropTypes.func,
  SortMany: PropTypes.func,
  history: PropTypes.object,
};
export default withRouter(Table);
