import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: ["br", "chicken", "mutton"]
    },
    reducers :{
        addItem :(state, actions)=>{
            state.items.push(actions.payload)
        },
        removeItem:(state,actions)=>{
            state.items = state.items.filter((item)=>item.id !== actions.payload.id)
        },
        clearCart: (state)=>{
            state.items = []
        }
    }
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;