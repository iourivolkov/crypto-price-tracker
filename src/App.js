import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceHero from "./components/PriceHero";
import Top10List from "./components/Top10List";
import { useState, useEffect } from "react";
import axios from "axios";
import PriceChart from "./components/PriceChart";
import PriceList from "./components/PriceList";

function App() {
  const title = "Trackr";
  const subtitle = "Track crypto and NFTs from one spot";
  const titleFooter = "Top 100";
  const [isPriceVisible, setIsPriceVisible] = useState(false);
  // manages priceQuery component state (user price search input)
  const [inputText, setInputText] = useState("");
  // manages response from api call for user price search
  const [priceData, setPriceData] = useState();

  // captures asset symbol, to be used in market data API call
  const [tokenSymbol, setTokenSymbol] = useState("");

  // captures user input in price query search
  const handleInputText = (e) => {
    setInputText(e.target.value);
    // @todo -> add logic to uppercase the first letter of input string - otherwise API will not return result
    // inputText.charAt(0).toUpperCase();
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
        // data comes back as arr of objects [{}, {}, {}...]

        priceResponse?.filter((el) => {
          if (el.name === inputText) {
            console.log(el.symbol);
            setTokenSymbol(el.symbol);
            setPriceData(el);
            setIsPriceVisible(true);
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

  const fetchTopData = (e) => {
    e.preventDefault();

    // @todo - make an axios API call to get price data for top 100 cryptos
  };

  // @todo - refactor -> remove useState hooks and use Context instead

  return (
    <div className="App">
      {/* <LandingPage projectName={title} projectSlogan={subtitle} /> */}
      <Navigation projectName={title} />
      <PriceHero
        inputText={handleInputText}
        getPrice={fetchQueryData}
        priceQueryData={priceData}
        displayPriceData={isPriceVisible}
        inputPrice={inputText}
        tokenSymbol={tokenSymbol}
      />
      <PriceList />

      {/* <Top10List footerTitle={titleFooter} /> */}
    </div>
  );
}

export default App;
