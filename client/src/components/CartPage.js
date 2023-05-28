import React from "react";

const CartPage = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <h3>Cart</h3>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default CartPage;
