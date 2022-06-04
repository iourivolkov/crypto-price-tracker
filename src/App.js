import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceQueryCard from "./components/PriceQueryCard";

function App() {
  const title = "Trackr";
  const subtitle = "For all your crypto pricing needs";
  const cryptoPriceQuery = "What's the price of..";
  return (
    <div className="App">
      {/* <LandingPage projectName={title} projectSlogan={subtitle} /> */}
      <Navigation projectName={title} />
      <PriceQueryCard queryTitle={cryptoPriceQuery} />
    </div>
  );
}

export default App;
