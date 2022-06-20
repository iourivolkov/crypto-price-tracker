import { useEffect, useState } from "react";
import axios from "axios";

const PriceChart = ({ inputPrice, tokenSymbol }) => {
  const [marketData, setMarketData] = useState();
  const marketDataAPI = process.env.REACT_APP_MARKET_DATA_KEY;
  axios
    .get(
      `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=USD&apikey=${marketDataAPI}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("ERROR!", err.message);
      }
    });
  return <div></div>;
};

export default PriceChart;

// @first API requires a capital first letter, coingecko API requires all letters to be lowercase?
