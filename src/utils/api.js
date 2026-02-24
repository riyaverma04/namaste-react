import { API_BASE_URL } from "../constants/config";

export const fetchRestaurants = async ()=>{
    try{
    const fetchRes = await fetch(`${API_BASE_URL}/listRestaurants`);
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