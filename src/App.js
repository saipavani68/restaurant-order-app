import "./styles.css";
import React from "react";
import MenuItemSelectionForm from '../src/MenuItemSelectionForm.js'

function App() {
  return (
    <div className="App">
      <div className="header">
        <button className="cart-button"><i className="fa fa-shopping-cart"></i> | items </button>
      </div>
      <MenuItemSelectionForm />
    </div>
  );
}

export default App;
