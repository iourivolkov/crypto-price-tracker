import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  const title = "Trackr";
  const subtitle = "For all your crypto pricing needs";
  return (
    <div className="App">
      <LandingPage projectName={title} projectSlogan={subtitle} />
    </div>
  );
}

export default App;
