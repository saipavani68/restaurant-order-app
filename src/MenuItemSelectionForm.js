import "./styles.css";
import React, { useState } from "react";
import menuItems from "./data.json";

function MenuItemSelectionForm() {
  const [itemsAddedToCart, setItemToCart] =  useState([]);
  function handleClick(e) {
    const itemIndex = e.target.id;
    itemsAddedToCart.push(menuItems.menu[itemIndex]);
    setItemToCart(itemsAddedToCart);
  }
  return (
    <div className="menu-item-selection-form">
        {menuItems.menu &&
          menuItems.menu.map((item, index) => (
            <div className="menu-items" key={ index }>
              <div> { item.name } </div>
              <div className="menu-item-price"> ${ item.price }</div>
              <button className="add-to-cart-button" onClick={ handleClick } id={ index }> Add to Cart </button>
            </div>
          ))}
      </div>
  );
}

export default MenuItemSelectionForm;
