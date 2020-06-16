import React, { useState, useEffect, memo } from "react";
import "./Detalis.css";
import fetchService from "../../Services/Fetch";
import Loading from "../Loading/Loading";
import renderChangePercent from "../../Services/src/Helpers/renderChangePercent";
const Details = (props) => {
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(true);

  const getCurrency = async () => {
    const curID = props.match.params.id;

    const response = await fetchService.get(`cryptocurrencies/${curID}`);
    setCurrency(response);
    setLoading(false);
  };
  useEffect(() => {
    getCurrency();
    console.log(currency);
  }, []);
  useEffect(() => {
    getCurrency();
  }, [props.match.params.id]);

  if (loading) {
    return (
      <div className={"loading-container"}>
        {" "}
        <Loading />
      </div>
    );
  }
  console.log("render");

  return (
    <div className="Detail">
      <h1 className="Detail-heading">
        {currency.name} ({currency.symbol})
      </h1>
      <div className="Detail-container">
        <div className="Detail-item">
          Price <span className="Detail-value">$ {currency.price}</span>
        </div>
        <div className="Detail-item">
          Rank <span className="Detail-value">{currency.rank}</span>
        </div>
        <div className="Detail-item">
          24H Change
          <span className="Detail-value">
            {renderChangePercent(currency.percentChange24h)}
          </span>
        </div>
        <div className="Detail-item">
          <span className="Detail-title">Market cap</span>
          <span className="Detail-dollar">$</span>
          {currency.marketCap}
        </div>
        <div className="Detail-item">
          <span className="Detail-title">24H Volume</span>
          <span className="Detail-dollar">$</span>
          {currency.volume24h}
        </div>
        <div className="Detail-item">
          <span className="Detail-title">Total supply</span>
          {currency.totalSupply}
        </div>
      </div>
    </div>
  );
};

export default memo(Details);
