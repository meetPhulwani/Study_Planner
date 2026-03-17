import React from "react";
import "./progressBar.css";

const progressBar = ({ progress }) => {
  return (
    <div className="progressContainer">
      <div
        className="progressFill"
        style={{ width: `${progress}%` }}
      ></div>
      <span>{progress}%</span>
    </div>
  );
};

export default progressBar;