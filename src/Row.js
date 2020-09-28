import React, { useEffect, useState } from "react";
import "./Row.css";
import VideoCard from "./VideoCard";
import axios from "./axios";

function Row({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div className="row">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Row;
