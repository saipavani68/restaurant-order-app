import "./styles.css";
import React, { useState, useReducer } from "react";
import MenuItemSelectionForm from '../src/MenuItemSelectionForm.js'
import menuItems from "./data.json";

const initialState = {
  itemsInCart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "handleCartItems":
      return {
        ...state,
        itemsInCart: action.payload,
      };
    default:
      return state;
  }
}

function App() {

  const [itemsAddedToCart, setItems] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  function handleClick(e) {
    const itemIndex = e.target.id;
    itemsAddedToCart.push(menuItems.menu[itemIndex]);
    setItems(itemsAddedToCart);
    dispatch({ type: "handleCartItems", payload: itemsAddedToCart});
  }

  return (
    <div className="App">
      <div className="header">
        <button className="cart-button"><i className="fa fa-shopping-cart"></i> { state.itemsInCart && state.itemsInCart.length } | items </button>
      </div>
      <MenuItemSelectionForm handleClick={ handleClick } />
    </div>
  );
}

export default App;
