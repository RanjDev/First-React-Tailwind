import "./App.css";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Cards from "./componenets/Cards";

function App() {
  return (
    <div className="bg-indigo-400 h-screen">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
