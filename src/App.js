import './App.css';
import './index.css';
import HeroSection from "./Components/HeroSection";
import SideMenu from "./Components/SideMenu";
import DetailsSection from "./Components/DetailsSection";
import ImgDiagramSection from "./Components/ImgDiagramSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <SideMenu/>
      <DetailsSection/>
      <ImgDiagramSection/>
      <Footer/>
    </div>
  );
}

export default App;
