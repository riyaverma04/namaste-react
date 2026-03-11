import React from "react";
import { IMG_CDN } from "../constants/config";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenuDetailsAccordianItemList = ({accordianItemListArray})=>{
    console.log("accordian item list array", accordianItemListArray);

    const dispatch = useDispatch();

    const handleCartItems = (itemName)=>{
        console.log("item name", itemName);
        dispatch(addItem(itemName))

    }
    
    return (
        <div>
           {
            accordianItemListArray.map((card,index)=>{
                const {info}= card?.card;
                return (
                    <div className="flex gap-4 border-b-2 border-gray-400 p-4" key={index}>
                        <div className="w-8/12 flex flex-col gap-2" >
                        <h3 className="text-lg font-bold">{info?.name}</h3>
                        <p className="text-lg font-bold">₹{info?.price ? info?.price/100 : info?.defaultPrice/100}</p>
                        <div className="flex  gap-2">
                            <Rating value={info?.ratings.aggregatedRating.rating}/>
                            <span>
                            {info?.ratings.aggregatedRating.rating}
                        </span>
                            </div>
                        <p className="truncate text-gray-600">{info?.description}</p>
                        
                        </div>
                        <div className="w-4/12 relative">
                            <img  src={IMG_CDN + info.imageId}
                            className="rounded-lg w-full h-full object-cover"
                            />
                            <button className="py-2 text-white px-8 font-bold bg-yellow-500 rounded-lg shadow-md absolute top-0" onClick={()=>handleCartItems(info?.name)}>Add</button>
                        </div>


                     </div>   

                )
            })
           }
            </div>
    )
}
export default RestaurantMenuDetailsAccordianItemList;

