import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from ".//CardsView";
import ListView from "./ListView";
import { useState } from "react";

function Store({ products }) {
  const [icon, setIcon] = useState("view_list");
  const handleSwitch = () => {
    icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
  };
  return (
    <>
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      {icon === "view_list" ? (
        <ListView items={products}></ListView>
      ) : (
        <CardsView cards={products}></CardsView>
      )}
    </>
  );
}

export default Store;
