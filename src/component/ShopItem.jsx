import React from "react";

function ShopItem({ item }) {
  const { name, price, color, img } = item;
  return (
    <tr className="table-row">
      <td>
        <img className="foto-item" alt="" src={img}></img>
      </td>
      <td className="item-name">{name}</td>
      <td className="item-color">{color}</td>
      <td className="item-price">{price}</td>
      <td>
        <button className="btn">Add to Cart</button>
      </td>
    </tr>
  );
}

export default ShopItem;
