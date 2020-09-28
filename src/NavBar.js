import React from "react";
import "./NavBar.css";
import requests from "./requests";

function NavBar({ setSelectOption }) {
  return (
    <div className="navBar">
      <h2 onClick={() => setSelectOption(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectOption(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelectOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectOption(requests.fecthComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectOption(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectOption(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectOption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectOption(requests.fetchTV)}>TV Movie</h2>
    </div>
  );
}

export default NavBar;
