import { useState, useEffect } from "react";
import axios from "axios";

export const useGetRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getRestaurants = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants`,
        axiosConfig
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //! Toda vez que salvo o getRestaurants entra como Dependency automaticamente.
  useEffect(() => {
    getRestaurants();
  }, []);

  return restaurants;
};
