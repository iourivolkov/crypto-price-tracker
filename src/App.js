import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceHero from "./components/PriceHero";
import Top10List from "./components/Top10List";
import { useState } from "react";
import { axios } from "axios";

function App() {
  const title = "Trackr";
  const subtitle = "Track crypto and NFTs from one spot";
  const titleFooter = "Top 10 Marketcap";
  const [inputText, setInputText] = useState("");
  const [indivPriceData, setIndivPriceData] = useState();

  const handleInputText = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const fetchQueryData = (e) => {
    e.preventDefault();
    // console.log("get priceee");
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
