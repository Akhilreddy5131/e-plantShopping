import React from "react";

function CartItem({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price}
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
}

export default CartItem;
