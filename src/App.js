import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./comonents/footer/Footer";
import Navbar from "./Navbar";
import Router from "./Router";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
