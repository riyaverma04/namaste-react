import React, { useState, useEffect } from "react";
import {useFetchRestaurantMenu} from "../utils/useFetchRestaurantMenu";

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
    name,
    cuisines = [],
    costForTwoMessage,
  } = restaurantMenu;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenuDetails;