import React from "react";
import ShopItem from "./ShopItem";

function ListView({ items }) {
  return (
    <table className="table-list-view">
      <tbody>
        {items.map((it) => (
          <ShopItem item={it}></ShopItem>
        ))}
      </tbody>
    </table>
  );
}

export default ListView;
