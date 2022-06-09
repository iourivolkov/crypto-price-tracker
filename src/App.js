import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceHero from "./components/PriceHero";
import Top10List from "./components/Top10List";
import { useState } from "react";
import axios from "axios";

function App() {
  const title = "Trackr";
  const subtitle = "Track crypto and NFTs from one spot";
  const titleFooter = "Top 10 Marketcap";
  // manages priceQuery component state (user price search input)
  const [inputText, setInputText] = useState("");
  // manages response from api call for user price search
  const [indivPriceData, setIndivPriceData] = useState();
  // stores id from API call to /api/tickers/ endpoint
  const [validId, setValidId] = useState("");

  // captures user input in price query search
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  // called when user clicks "search" on price query
  const fetchQueryData = (e) => {
    e.preventDefault();
    // console.log("get priceee");

    // PRICING API
    // 1. hit id endpoint, add tokenID to state -> --> loop over data array if token name matches the res.data.name -> setID(res.data.id)
    axios.get("https://api.coinlore.net/api/tickers/").then((res) => {
      const tokenArr = res.data.data;
      tokenArr.map((token) => {
        console.log(token);
      });
    });

    // 2. hit specific token endopoint using the ID set in the previous API call

    // .catch((err) => {
    //   if (err.response) {
    //     console.log(err.response.data);
    //     console.log(err.response.status);
    //     console.log(err.response.headers);
    //   } else if (err.request) {
    //     console.log(err.request);
    //   } else {
    //     console.log("ERROR!", err.message);
    //   }
    // });
  };

  return (
    <div className="App">
      <LandingPage projectName={title} projectSlogan={subtitle} />
      <Navigation projectName={title} />
      <PriceHero inputText={handleInputText} getPrice={fetchQueryData} />
      <Top10List footerTitle={titleFooter} />
    </div>
  );
}

export default App;
