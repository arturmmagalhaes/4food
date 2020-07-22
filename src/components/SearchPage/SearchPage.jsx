import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";

import { useGetRestaurants } from "../Hooks/useGetRestaurants";

import Header from "../Header/Header";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const restaurants = useGetRestaurants();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(inputValue)
  );
  console.log(searchedRestaurant);

  return (
    <>
      <div className="Container">
        <Header BackArrow="True" PageToLink="feed" title="Busca" />
        <input
          placeholder="Restaurante"
          className="SearchInput"
          type="text"
          autoFocus
          onChange={handleInputChange}
        />

        {inputValue === "" ? (
          <span>Busque por nome de restaurante</span>
        ) : inputValue.includes(searchedRestaurant) ? (
          <span>Não encontramos :(</span>
        ) : (
          searchedRestaurant.map((restaurant, index) => (
            <Link to={`/Restaurant/${restaurant.id}`}>
              <div key={index} className="Card">
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
          ))
        )}
      </div>
    </>
  );
};

export default SearchPage;
