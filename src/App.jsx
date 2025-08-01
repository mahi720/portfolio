import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Eduction from "./components/Eduction/Eduction";
// import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Skill from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import BlurBlob from "./BlurBlob";

const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob position={{'top': '35%', 'left': '20%'}} size={{"width": "30%", "height": "40%"}}></BlurBlob>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">  </div>
        <div className="relative pt-20">          
        <Navbar />
        <About />
        <Skill />
        {/* <Experience /> */}
        <Work />
        <Eduction />
        <Contact />
        <Footer />
        </div>
      </div>
  );
};

export default App;
