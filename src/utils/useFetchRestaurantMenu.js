import React ,{ useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const useFetchRestaurantMenu =  () => {

    const [restaurantMenu, setRestaurantMenu] = useState(null);
      const { resId } = useParams();
      console.log("", resId);

    useEffect( ()=>{
      if(resId){

        fetchData();
      }
       
   


    },[resId])
   
  //   const fetchData = async ()=>{
  // //       try {
  // //   const response = await fetch(
  // //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6820444&lng=77.0675607&restaurantId=239435&submitAction=ENTER"
  // //   );

  // //   console.log("Response:", response);

  // //   if (!response.ok) {
  // //     throw new Error("Network response was not ok");
  // //   }

  // //   const text = await response.text();

  // //   if (!text) {
  // //     throw new Error("Empty response received");
  // //   }

  // //   const data = JSON.parse(text);

  // //   console.log("Menu Data:", data);

  // // } catch (error) {
  // //   console.error("Fetch error:", error);
  // // }

  // //     const res = await fetch(`http://localhost:5000/menu/${resId}`);
  // // const data = await res.json();
  // // console.log(data);
  // // setRestaurantMenu(data);

  //  try {
  //   const res = await fetch(
  //     "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6820444&lng=77.0675607&restaurantId=" + resId
  //   );

  //  const text = await res.text();

  //   if (!text) {
  //     throw new Error("Empty response from API");
  //   }

  //   const data = JSON.parse(text);

  //   console.log(data);
  //   setRestaurantMenu(data);

  // } catch (error) {
  //   console.error("Fetch error:", error);
  // }

  //   }

 const fetchData = async () => {
  try {
    const res = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6820444&lng=77.0675607&restaurantId=${resId}&submitAction=ENTER`
    );

    if (!res.ok) {
      throw new Error("Network response not OK");
    }

    const text = await res.text();

    if (!text) {
      throw new Error("API returned empty response");
    }


    const data = JSON.parse(text);
    console.log(data)
    console.log("data:",data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    console.log("data:",data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.card?.card?.["@type"] );
    setRestaurantMenu(data);

  } catch (error) {
    console.error("Fetch error:", error);
  }
};
  


    

    return restaurantMenu;
  }