import { API_BASE_URL } from "../constants/config";


export const fetchRestaurants = async ()=>{
    try{
       
  //  const fetchRes = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     /*// const fetchRes = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&//lat=28.6820444&lng=77.0675607&carousel=true&third_party_vendor=1")*/
    const fetchRes = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6820444&lng=77.0675607&carousel=true&third_party_vendor=1")
   
    const jsonRes = await fetchRes.json();
    const restaurantFind = jsonRes?.data?.cards?.find((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restaurants =
      restaurantFind?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("restaurants", restaurants);
    return restaurants || [];

}catch(error){
    
    console.error("Error fetching restaurants:", error);
    return [];
  }

}



// export const fetchRestaurantMenu = async () => {
//   try {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6820444&lng=77.0675607&restaurantId=239435&submitAction=ENTER"
//     );

//     // ✅ check response status
//     if (!response.ok) {
//       throw new Error("Network response not ok");
//     }

//     // ✅ check content type
//     const contentType = response.headers.get("content-type");

//     if (!contentType || !contentType.includes("application/json")) {
//       throw new Error("Response is not JSON");
//     }

//     const json = await response.json();
//     console.log("josn", json.data)

//     return json?.data?.cards?.[0]?.card?.card?.info || {};
//   } catch (error) {
//     console.error("Error fetching restaurant menu:", error);
//     return {};
//   }
// };
