import React from "react";
import { withRouter } from "react-router-dom";
import renderChangePercent from "../../Services/src/Helpers/renderChangePercent";
import PropTypes from "prop-types";
import TableBody from "./TableBody";

const Table = ({
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
        <TableBody />
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
export default Table;
