import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image : string
}


interface IinitState {
  Menu: any[],
  Cart: ICartItem[],
}

const initState : IinitState = {
  Menu: [],
  Cart: [],
};

export const menuSlice = createSlice({
  name: "Menu",
  initialState: initState,
  reducers: {
    AddMenu: (state, action) => {
      state.Menu = action.payload;
    },

    AddToCart: (state, action) => {
      const { _id, name, price, image } = action.payload;

      //  find existing item
      const existingItem = state.Cart.find(
        (item) => item._id === _id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.Cart.push({
          _id,
          name,
          price,        
          quantity: 1, 
          image
        });
      }
    },

    IncreateQty : (state, action) => {
      const { _id } = action.payload
      const item = state.Cart.find(
        (item) => item._id === _id
      )
      if( item && item.quantity > 0){
        item.quantity++;
      }
    },

    DecreaseQty : (state, action) => {
      const { _id } = action.payload
      const item = state.Cart.find(
        (item) => item._id === _id
      )
      if( item && item.quantity > 1){
        item.quantity--;
      }else{
        state.Cart = state.Cart.filter((item) => item._id !== _id)
      }
    }
  },
});

export const { AddMenu, AddToCart, IncreateQty, DecreaseQty } = menuSlice.actions;
export default menuSlice.reducer;
