import React from "react";
import CurrencyContext from "../context/currencies";

const withCurrencies = (Component) => {
  return () => {
    return (
      <CurrencyContext.Consumer>
        {(currencies) => {
          return <Component currencies={currencies} />;
        }}
      </CurrencyContext.Consumer>
    );
  };
};
export default withCurrencies;
