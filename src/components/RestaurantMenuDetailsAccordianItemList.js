import React from "react";
import { IMG_CDN } from "../constants/config";
import Rating from "./Rating";
const RestaurantMenuDetailsAccordianItemList = ({accordianItemListArray})=>{
    console.log("accordian item list array", accordianItemListArray);
    
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
                        <div className="w-4/12">
                            <img  src={IMG_CDN + info.imageId}
                            className="rounded-lg w-full h-full object-cover"
                            />
                        </div>


                     </div>   

                )
            })
           }
            </div>
    )
}
export default RestaurantMenuDetailsAccordianItemList;

