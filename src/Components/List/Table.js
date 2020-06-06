import React from "react";

const Table = ({
  currencies,
  loading,
  currenciesGeter,
  SortAlphabet,
  SortMany,
  renderChangePercent,
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
              <td>{renderChangePercent(currency.percentChange24h)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
