import React from "react";

function ShopCard({ card }) {
  const { name, price, color, img } = card;
  const getClassCard = {
    backgroundImage: "url(" + img + ")",
  };
  const getClassPrice = {
    position: "absolute",
    bottom: 15,
    left: 15,
  };
  const getClassButton = {
    position: "absolute",
    bottom: 10,
    right: 15,
    width: "40%",
  };
  return (
    <div className="card" style={getClassCard}>
      <div className="item-name">{name}</div>
      <div className="item-color">{color}</div>
      <div style={getClassPrice} className="item-price">
        {price}
      </div>
      <button style={getClassButton} className="btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ShopCard;
