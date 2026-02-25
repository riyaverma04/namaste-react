import { API_BASE_URL } from "../constants/config";

export const fetchRestaurants = async ()=>{
    try{
    const fetchRes = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonRes = await fetchRes.json();
    return (jsonRes?.data?.cards?.[1]?.card?.card?.gridElements
?.infoWithStyle?.restaurants)
}catch(error){
     {
    console.error("Error fetching restaurants:", error);
    return [];
  }
}
}