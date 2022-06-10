import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceHero from "./components/PriceHero";
import Top10List from "./components/Top10List";
import { useState } from "react";
import axios from "axios";
import PriceDataCard from "./components/PriceDataCard";

function App() {
  const title = "Trackr";
  const subtitle = "Track crypto and NFTs from one spot";
  const titleFooter = "Top 10 Marketcap";
  const [isPriceVisible, setIsPriceVisible] = useState(false);
  // manages priceQuery component state (user price search input)
  const [inputText, setInputText] = useState("");
  // manages response from api call for user price search
  const [priceData, setPriceData] = useState();

  // captures user input in price query search
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  // called when user clicks "search" on price query
  const fetchQueryData = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get("https://api.coinlore.net/api/tickers/", config)
      .then((res) => {
        const priceResponse = res.data.data;
        // get arr of objects [{}, {}, {}...]

        priceResponse.filter((el) => {
          if (el.name === inputText) {
            console.log(el);
            setPriceData(el);
            setIsPriceVisible(true);
            // setIndivPriceData(el);
            // return (
            //   <PriceDataCard
            //     tokenName={el.name}
            //     tokenSymbol={el.symbol}
            //     tokenPrice={el.price_usd}
            //     priceChange={el.percent_change_24h}
            //     marketCap={el.market_cap_usd}
            //     dailyVol={el.volume24}
            //   />
            // );
          }
        });
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
  };

  return (
    <div className="App">
      {/* <LandingPage projectName={title} projectSlogan={subtitle} /> */}
      <Navigation projectName={title} />
      <PriceHero
        inputText={handleInputText}
        getPrice={fetchQueryData}
        priceQueryData={priceData}
        displayPriceData={isPriceVisible}
      />
      {/* <Top10List footerTitle={titleFooter} /> */}
    </div>
  );
}

export default App;
