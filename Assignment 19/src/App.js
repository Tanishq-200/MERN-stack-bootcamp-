import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="container">
      <h1>Simple Add to Cart</h1>
      <p>Items in Cart: {cart}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default App;

