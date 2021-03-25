import "./styles.css";
import React, { useState, useEffect } from "react";
import MenuItemSelectionForm from '../src/MenuItemSelectionForm.js'

function App() {

  const [itemsAddedToCart, setItems] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    setItems(items);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <button className="cart-button"><i className="fa fa-shopping-cart"></i> {itemsAddedToCart && itemsAddedToCart.length } | items </button>
      </div>
      <MenuItemSelectionForm />
    </div>
  );
}

export default App;
