import "./App.css";
import Home from "./Home/Home.js";
import Navigation from "./components/Navigation/Navigation.js";
import Favorites from "./Favorites/Favorites";
import Wallet from './Wallet/Wallet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/wallet" element={<Wallet/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
