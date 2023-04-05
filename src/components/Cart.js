import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  //to grab the state
  const quantity = useSelector((state)=>state.cart.totalQuantity);

  const dispatch = useDispatch();

  const showCart = ()=>{
    //from cat-slice actions to dispatch
    dispatch(cartActions.showCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>BasketItem: {quantity}</h3>
    </div>
  );
};

export default Cart;
