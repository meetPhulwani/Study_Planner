import React from "react";
import "./studyCard.css";

const studyCard = ({ data }) => {
  return (
    <div className={`card ${data.status}`}>
      <h3>{data.subject}</h3>
      <p>{data.time} hrs</p>
      <span>{data.status}</span>
    </div>
  );
};

export default studyCard;