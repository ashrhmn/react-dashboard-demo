import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="left">
        <div className="left-title">{data.title}</div>
        <div className="left-prices">
          {data.prices.map((priceInfo) => (
            <div key={priceInfo.title}>
              <div className="left-prices_title">{priceInfo.title}</div>
              <div className="left-prices_price">{priceInfo.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img className="right-img" src={data.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
