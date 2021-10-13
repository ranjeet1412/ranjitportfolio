import Topbar from "./componets/topbar/Topbar";
import Intro from "./componets/intro/Intro";
import Portfolio from "./componets/portfolio/Portfolio";
import Works from "./componets/works/Works";
import Testimonial from "./componets/testimonial/Testimonial";
import Contact from "./componets/contact/Contact";
import Menu from "./componets/menu/Menu";

import "./componets/app.scss";
import { useState } from "react";

function App() {
   const [menuOpen, setMenuOpen] = useState(false) 
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
