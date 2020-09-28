import React from "react";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* NavBar */}
      <NavBar />
      {/* Movie Rows */}
      <Row />
    </div>
  );
}

export default App;
