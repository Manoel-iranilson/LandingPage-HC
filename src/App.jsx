import React from "react";

import About from "./pages/About";
import BuzzNews from "./pages/BuzzNews";
import Curry from "./pages/Curry";
import Footer from "./pages/Footer";
import Galery from "./pages/Galery";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Percentage from "./pages/Percentage";
import ToStart from "./pages/ToStart";

function App() {
  return (
    <div>
      <Home />
      <About />
      <div style={{ backgroundColor: "#000", height: 50 }}></div>
      <Percentage />
      <Curry />
      <Invest />
      <BuzzNews />
      <ToStart />
      <Galery />
      <Footer />
    </div>
  );
}

export default App;
