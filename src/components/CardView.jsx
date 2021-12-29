import React from "react";

const CardView = ({ data }) => {
  return (
    <div className="card-view">
      <div>
        <div className="card-title">{data.title}</div>
        {data.prices.map((priceInfo) => (
          <div className="card-price-view" key={priceInfo.title}>
            <div className="card-price-title">{priceInfo.title}</div>
            <div className="card-price">{priceInfo.price}</div>
          </div>
        ))}
      </div>
      <img className="card-img" src={data.img} alt="" />
    </div>
  );
};

export default CardView;
