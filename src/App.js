import { React } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Cards from "./componenets/Cards";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="bg-indigo-400 overflow-hidden">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
