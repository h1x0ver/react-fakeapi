import React from "react";
import "./Card.css";

const Card = ({ title, price, imgSrc }) => {
  return (
    <div class="card">
      <div className="img-container">
        <img src={imgSrc} class="card-img-top" alt="..." />
      </div>
      <div class="card-body mt-5">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{price}</p>
      </div>
    </div>
  );
};

export default Card;
