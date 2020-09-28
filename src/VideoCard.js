import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://is4.fwrdassets.com/images/p/fw/z/MMAR-MZ176_V1.jpg"
        alt=""
      />
      <p>Description</p>
      <h2>Movie Titles</h2>
      <p>Number of likes</p>
    </div>
  );
}

export default VideoCard;
