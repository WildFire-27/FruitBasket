import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  
  const dispatch = useDispatch();

  const addToCart = () => {
    //here we dispatch action so
    dispatch(cartActions.addToCart({ id, name, price }));
    //to populate item we create cart items using useselector and we grab state . itemlists
  };
  return (
    <div className="card">
      <img id="fruitImg" src={imgURL} alt={name} />
     <div id="infoCard">
     <h1>{name}</h1>
      <h1>₹{price}</h1>
     </div>
   
      <button id="buttonCart" onClick={addToCart}>Add to Basket</button>
    </div>
  );
};

export default Product;
