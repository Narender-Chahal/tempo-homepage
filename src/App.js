import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AboutSection from "./components/AboutSection";
import Mynav from "./components/Mynav";
import HeroSection from "./components/HeroSection";
import Story from "./components/Story";

function App() {
  return (
    <>
      {/* <AboutSection /> */}
      <div className="header_bg vh_100_xl d-flex flex-column">
        <Mynav />
          <HeroSection />
      </div>
      <Story/>
    </>
  );
}

export default App;
