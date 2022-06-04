import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import PriceHero from "./components/PriceHero";
import Top10List from "./components/Top10List";

function App() {
  const title = "Trackr";
  const subtitle = "For all your crypto pricing needs";
  const titleFooter = "Top 10 Marketcap";

  return (
    <div className="App">
      <LandingPage projectName={title} projectSlogan={subtitle} />
      <Navigation projectName={title} />
      <PriceHero />
      <Top10List footerTitle={titleFooter} />
    </div>
  );
}

export default App;
