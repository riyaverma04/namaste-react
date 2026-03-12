import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItems =({cartItems})=>{
    const dispatch = useDispatch();
    const handleRemoveQuantity=(item)=>{
        dispatch(removeItem(item));

    }
    return(
        <div>
            {cartItems.map((item,index) => {
                return(
                    <div className="w-8/12 m-auto flex gap-4 justify-center items-center border-gray-400 rounded-md shadow-md p-4" key={item.id}>
                        <h1 className="font-bold text-xl w-6/12 ">{item.name}</h1>
                        <div className="flex gap-4 items-center border-gray-400 border-2  w-3/12 justify-center p-2">
                            <button onClick={()=>handleRemoveQuantity(item)}>-</button>
                            <span>Quantity</span>
                            <button>+</button>

                        </div>
                        <p className="w-3/12 flex justify-center items-ce4"> ₹{item.price? item.price/100 : item.defaultPrice/100}</p>
                            
                         
                            
                        </div>
                )
                
            })}
        </div>
    )
}
export default CartItems;