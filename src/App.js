import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import Navbar from "./Navbar";

import "./styles.scss";

import "./server.js";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
