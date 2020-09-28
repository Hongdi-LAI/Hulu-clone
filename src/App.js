import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Row from "./Row";
import requests from "./requests";
import Footer from "./Footer";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* NavBar */}
      <NavBar setSelectOption={setSelectedOption} />
      {/* Movie Rows */}
      <Row selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}

export default App;
