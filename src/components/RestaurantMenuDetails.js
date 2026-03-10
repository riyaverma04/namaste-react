import React, { useState, useEffect } from "react";
import {useFetchRestaurantMenu} from "../utils/useFetchRestaurantMenu";
import RestaurantMenuDetailsAccordian from "./RestaurantMenuDetailsAccordian";

const RestaurantMenuDetails = () => {
  
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const menuData = async () => {
  //     try {
  //       const data = await useFetchRestaurantMenu();
  //       console.log("menu data", data);
  //     } catch (err) {
  //       setError("Failed to load menu");
  //     }
  //   };
  //   console.log(menuData())
  //   menuData();
    
  // }, []);
  const restaurantMenu = useFetchRestaurantMenu();

  if (error) return <h1>{error}</h1>;
  if (!restaurantMenu) return <h1>Loading...</h1>;

  const {
    text,
    
  } = restaurantMenu.data?.cards?.[0]?.card?.card;
  

  const {tabs} =restaurantMenu.data?.cards?.[1]?.card?.card;
  const {areaName,avgRating,costForTwoMessage,cuisines} = restaurantMenu.data?.cards?.[2]?.card?.card?.info; 
  return (
    <div className="w-6/12 m-auto  py-10">
      <h1 className="text-4xl font-bold text-red-500">{text}</h1>
      <div className="mt-5 flex gap-8">
        {
          tabs.map((tab,index)=>{
            return (
            
                <span className="text-xl font-bold" key={index}>{tab.title}</span>
                
            )
          })
        }

        </div>
        <div className="w-[120px] h-1 bg-red-500 mt-3 rounded-md">

        </div>
        <hr className="mt-0"></hr>
        {/* restaurant details shown in restaurant menu details component */}
        <div className="mt-5 p-3 border-solid border-gray-400 shadow-md">


         <div>
         <span>{avgRating}</span>
         <span>{costForTwoMessage}</span>
         </div>
         <div>
        <span>{cuisines?.join(", ")}</span>
          
         
         </div>
         <div>
         <span>outlet</span> <span>{areaName}   </span>

          
         </div>
        </div>

        <hr></hr>
        <RestaurantMenuDetailsAccordian restaurantMenu = {restaurantMenu}/>
        
      
    </div>
  );
};

export default RestaurantMenuDetails;