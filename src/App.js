
import React from "react";
import Navbar from "./components/Navbar/navbar";
import { Introduction } from "./components/Introduction/introduction";
import Skills from "./components/Skills/skills";
import Contacts from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";
import Experience from "./components/Experiences/Experience";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Experience/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;