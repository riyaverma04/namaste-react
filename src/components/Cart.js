import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
      const cartItems = useSelector((store)=> store.cart.items)
    console.log("cart items in cart component", cartItems);

    const dispatchClearItem = useDispatch();
    const handleClearItems= ()=>{
        dispatchClearItem(clearCart())
    }
    return (
        <>
        <div className=" w-full flex justify-center items-center flex-col gap-5">
            <h1>Cart items</h1>
            {cartItems.length !==0 ? <button onClick={handleClearItems} className="border-gray-400 px-5 py-2 rounded-lg shadow-lg">Clear all items from cart</button > : null}
            
        </div>
        {cartItems.length === 0?  <h2>Your cart is empty</h2> :  <CartItems  cartItems={cartItems}/>}
         </>  
    )
}
export default Cart;