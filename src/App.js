import React from "react";
import Analytics from "./components/analytics";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import NewsLetter from "./components/newsLetter";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
