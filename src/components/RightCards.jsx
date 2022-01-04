import React from "react";
import Card from "./Card";

import "./RightCards.scss";

const RightCards = ({ cardData }) => {
  return (
    <div className="right-cards-container">
      {cardData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default RightCards;
