import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    //actions to dispatch
    addToCart(state, action) {
      //for action we can get data from user once i click add to cart
      //onclcik add to cart this reducer function then will update
      //now product will be sent to addtocart and we now just need to create a new item and new item will b equal to action.payload that we receive from addtocart functionality
      const newItem = action.payload;

      //then we need to chek if the item is already there so we just increase the quantity of the item
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      //find fucntion to find if it has any product for the given condition
      // if exisintg is der we increase item an item price ++ sp
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        //old + new
      } else {
        //if not there ten we push item to cart
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        // to see how many items r added in array list we increase total quantity
        state.totalQuantity++;
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--
      }else{
        existingItem.quantity--;
        existingItem.totalPrice-= existingItem.price
      }
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
//we use this into index.js store
