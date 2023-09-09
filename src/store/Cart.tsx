import { createSlice } from "@reduxjs/toolkit";
import { Tproduct, Tstate } from "../types/Types";


const initialState:Tstate = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;

      const existItem= state.items.find((i) => i.id === item.id);

      if (!existItem) {
     

        item.quantity = 1;
        state.items.push(item);

      }else{
        existItem.quantity++;
      }
      state.totalPrice+=item.price;
    state.totalQuantity++;
 

 
  
    },
    removeItem(state, action) {
        const id  = action.payload;

        const existItem:Tproduct= state.items.find((item) => item.id === id);
  
        if (existItem.quantity===1) {
       
  
      
        state.items=  state.items.filter(item=>item.id!==id);
  
        }else{
          existItem.quantity--;
        }
        state.totalPrice-= existItem.price;
        state.totalQuantity--;
   
  

    },

    deleteItem(state, action) {
      const id = action.payload;
      const existItem:Tproduct= state.items.find((item) => item.id === id);

      state.totalQuantity-= existItem.quantity;
      state.totalPrice-=(existItem.quantity*existItem.price);
  
      state.items = state.items.filter((item) => item.id !== id);

    },
    resetCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
 
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
