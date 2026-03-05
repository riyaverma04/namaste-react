import React ,{ useEffect, useState} from "react";
export const useFetchRestaurantMenu =  () => {

    const [restaurantMenu, setRestaurantMenu] = useState(null);


    useEffect( ()=>{
        fetchData();
       
   


    },[])
    const fetchData = async ()=>{
         try {
   const response = await fetch(
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6820444&lng=77.0675607&restaurantId=239435&submitAction=ENTER"
);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const text = await response.text();

    if (!text) {
      console.error("Empty response");
      return;
    }

    const json = JSON.parse(text);

    setRestaurantMenu(
      json?.data?.cards?.[0]?.card?.card?.info || {}
    );

  } catch (error) {
    console.error("Fetch error:", error);
  }
    }
  


    

    return restaurantMenu;
  }