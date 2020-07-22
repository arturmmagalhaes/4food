import React, { useState, useEffect } from "react";
import "./FeedPage.css";

import { Link } from "react-router-dom";
import { useGetRestaurants } from "../Hooks/useGetRestaurants";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FeedPage = () => {
  const categories = [
    "Árabe",
    "Asiática",
    "Hamburguer",
    "Italiana",
    "Sorvetes",
    "Carnes",
    "Mexicana",
    "Baiana",
    "Petiscos",
  ];

  const restaurants = useGetRestaurants();
  const [restaurantList, setRestaurantList] = useState([]);
  const [categoryCopy, setCategoryCopy] = useState("");
  const [clickedSameCategory, setClickedSameCategory] = useState(false);

  useEffect(() => {
    setRestaurantList(restaurants);
  }, [restaurants]);

  const handleFilter = (category) => {
    setRestaurantList(
      restaurants.filter((restaurant) => {
        return restaurant.category === category;
      })
    );
    if (categoryCopy !== category) {
      setCategoryCopy(category);
      setClickedSameCategory(false);
    } else {
      setClickedSameCategory(!clickedSameCategory);
      if (!clickedSameCategory) {
        setRestaurantList(restaurants);
      }
    }
  };

  return (
    <>
      <Header title="Ifuture" />
      <div className="Container">
        <Link to="/search">
          <input
            className="SearchInput"
            type="text"
            placeholder="Restaurante"
          />
        </Link>

        <div className="FilterCard">
          {categories.map((item) => (
            <span
              key={item}
              className={`Filter`}
              onClick={() => handleFilter(item)}
            >
              {item}
            </span>
          ))}
        </div>

        {restaurantList.map((restaurant) => (
          <Link key={restaurant.id} to={`/Restaurant/${restaurant.id}`}>
            <div className="Card">
              <img src={restaurant.logoUrl} alt="Imagem do card" />
              <div>
                <p className="Restaurant">{restaurant.name}</p>
                <div className="CardFooter">
                  <span className="Time-to-deliver">
                    {restaurant.deliveryTime} - {restaurant.deliveryTime + 20}{" "}
                    min
                  </span>
                  <span className="Shipping-fee">
                    Frete R${restaurant.shipping.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer currentPage="feed" />
    </>
  );
};

export default FeedPage;
