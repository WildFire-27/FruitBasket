import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  //to grab the state from the store we use useSelector hook
  //it will contain state as a callback parameter and we grab state name i.e auth from./store is islogin
  const isLoggedIn = useSelector(state=> state.auth.isLoggedIn)
  console.log(isLoggedIn)

  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);

  return (
    <div className="App">
     {!isLoggedIn && <Auth />}
     {isLoggedIn &&  <Layout />}
    </div>
  );
}

export default App;
