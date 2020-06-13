import React from "react";
import CurrencyContext from "../context/currencies";
import { withRouter } from "react-router-dom";
import renderChangePercent from "../../Services/src/Helpers/renderChangePercent";
import withCurrencies from "../HOC/withCurrencies";

const TableBody = ({ history, currencies }) => {
  return (
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
  );
};
export default withCurrencies(withRouter(TableBody));
