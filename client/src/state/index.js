import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

// functions
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // set items to be the payload
    setItems: (state, action) => {
      state.items = action.payload;
    },

    // add the payload item to the current state of the cart
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    // remove item from the cart via its id
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    // increase the count of items in the cart
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    // decrease the count of items in the cart (can't be less than 0)
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    // change the visibility of the cart
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;