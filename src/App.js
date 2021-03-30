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

  function openNav() {
    document.getElementById("mySidenav").style.width = "275px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className="App">
      <div className="header">
        <button className="cart-button" onClick={ openNav }><i className="fa fa-shopping-cart"></i> { state.itemsInCart && state.itemsInCart.length } | items </button>
      </div>
      <div id="mySidenav" className="sidenav">
        <div className="sidenav-content">
          <h2 className="order-header"> Your Order</h2>
          <a className="closebtn" onClick={ closeNav }>&times;</a>
          { state.itemsInCart.length > 0 ? 
          state.itemsInCart.map((item, index) =>(
            <div className="items-container">
              <p>{ index+1 } { item.name } </p>
              <p>{ item.price }</p>
            </div>
        )) 
        :
        <div className="empty-cart">
          <p><i className="fa fa-shopping-cart"></i></p>
          <h2>Your cart is empty</h2>
          <button className="start-order-button" onClick={ closeNav }> Start your order</button>
        </div> }
        </div>
      </div>
      <MenuItemSelectionForm handleClick={ handleClick } />
    </div>
  );
}

export default App;
