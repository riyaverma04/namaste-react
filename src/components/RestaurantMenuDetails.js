import React, { useState, useEffect } from "react";
import { fetchRestaurantMenu } from "../utils/api";

const RestaurantMenuDetails = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const menuData = async () => {
      try {
        const data = await fetchRestaurantMenu();
        setRestaurantMenu(data);
      } catch (err) {
        setError("Failed to load menu");
      }
    };

    menuData();
  }, []);

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