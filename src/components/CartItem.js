import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(cartActions.removeCart(id));
  };
  const increment = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <h2>₹{price} /-</h2>
      <h2>x {quantity}</h2>
      <h2>Total ₹{total}</h2>
      <button className="cart-actions" onClick={decrement}>
       ➖
      </button>
      <button className="cart-actions" onClick={increment}>
       ➕
      </button>
    </div>
  );
};

export default CartItem;
