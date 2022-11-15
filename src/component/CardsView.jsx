import React from "react";
import ShopCard from "./ShopCard";
function CardsView({ cards }) {
  return (
    <div className="table-card-view">
      {cards.map((item) => (
        <ShopCard card={item}></ShopCard>
      ))}
    </div>
  );
}

export default CardsView;
