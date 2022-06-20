import { useEffect } from "react";
import axios from "axios";

const PriceChart = ({ inputPrice }) => {
  axios.get(
    `https://api.coingecko.com/api/v3/coins/${inputPrice}/market_chart?vs_currency=usd&days=1&interval=1m`
  );
  return <div></div>;
};

export default PriceChart;
