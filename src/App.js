import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AboutSection from "./components/AboutSection";
import WatchSection from "./components/WatchSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSection from "./components/SliderSection";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <>
      <AboutSection />
      <WatchSection />
      <SliderSection />
      <div className="faq_bg vh-100">
        <FaqSection />
      </div>
    </>
  );
}

export default App;
