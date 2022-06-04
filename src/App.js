import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceQueryCard from "./components/PriceQueryCard";
import PriceHero from "./components/PriceHero";

function App() {
  const title = "Trackr";
  const subtitle = "For all your crypto pricing needs";

  return (
    <div className="App">
      {/* <LandingPage projectName={title} projectSlogan={subtitle} /> */}
      <Navigation projectName={title} />
      <PriceHero />
    </div>
  );
}

export default App;
