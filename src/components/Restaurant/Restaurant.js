import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import Header from '../Header/Header'
import OrderPopUp from '../OrderPopUp/OrderPopUp'

import './Restaurant.css';
import { Typography, Divider, Card, CardMedia, CardContent, Button } from '@material-ui/core';

function Restaurant({
    match: {
      params: { id },
    },
  }) {

  let history = useHistory();
  
  const [restaurant, setRestaurant] = useState({}); 
  const [products, setProducts] = useState([]); 

  const [popUp, setPopUp] = useState(false);
  const [productPopUp, setProductPopUp] = useState({});
  const [popUpQuantity, setPopUpQuantity] = useState(0);
  
  const [cartObjects, setCartObjects] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setCartObjects(GetCartObjects());
    GetRestaurantData();
  },[refresh])

  function GetRestaurantData(){
    const token = window.localStorage.getItem('token');
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${id}`, 
    {
      headers: {
      auth: token
      }
    })
    .then(response => {
       console.log(response.data.restaurant); 
       setRestaurant(response.data.restaurant);
       setProducts(response.data.restaurant.products);
    })
    .catch(error => {
        console.log(error); 
     })
  }

  function MountMainDishes (){

    const categories = [];
      
    for(let i=0; i<products.length; i++){
      if(!categories.includes(products[i].category))
        categories.push(products[i].category);  
    }

    return categories.map(category => {
      return MountCard(products.filter(product => product.category === category));
    })
  }

  const MountCard = (categoryPoducts) => {

    const cards = categoryPoducts.map(product => {
      let quantity = 0;

      for(let i = 0; i < cartObjects.length; i++)
      {
        if(cartObjects[i].product.id === product.id)
        {
          quantity = cartObjects[i].quantity;
        }
      }

      return <div key={product.id} className="ProductCard">
          <CardMedia
            component="img"
            style={{width:'151px'}}
            image={product.photoUrl}
            title={product.name}
          />
          <div className='CardContent'>
            {quantity > 0 && <div>
              <span className="QuantityLabel">{quantity}</span>
            </div>}
            <h5>
              {product.name}
            </h5>
            <span>
              {product.description}
            </span>
            <div>
              <h5>
                R${product.price}
              </h5>
              <button className={quantity > 0? 'OrderButtonRed' : 'OrderButton'} onClick={quantity > 0? () => RemoveProductFromCart(product) : () => OpenPopup(product)} color={quantity > 0? 'red': ''}>{quantity > 0? 'remover' : 'adicionar'}</button>
            </div>
          </div>
      </div>
    })

    return <div className='CategoryCard'>
      <Typography>{categoryPoducts[0]? categoryPoducts[0].category: 'categoria'}</Typography>
      <Divider></Divider>
      {cards}
    </div>
  }

  const OpenPopup = (product) => {
    setProductPopUp(product);
    setPopUpQuantity(0);
    setPopUp(true);
  }

  const AddProductToCart = () => {
    if(popUpQuantity != 0)
    {
      const NewProduct = {
        restautant: id,
        product: productPopUp,
        quantity: popUpQuantity
      }

      let cart = new Array();

      if (localStorage.hasOwnProperty("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"))
      }

      cart.push(NewProduct);
      localStorage.setItem("cart", JSON.stringify(cart));

      setRefresh(refresh + 1);
    }

    setPopUp(false);
  }

  const RemoveProductFromCart = (productToRemove) => {
    for(let i = 0; i < cartObjects.length; i++){
      if(cartObjects[i].product.id === productToRemove.id)
      {
        cartObjects.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cartObjects));
        setRefresh(refresh + 1);
      }
    }
  }

  const OnChangeQuantity = (event) => {
    setPopUpQuantity(event.target.value);
  }

  function RenderPopUp(){
    return <div className='BlackScreen'>
      <div className='popup'>
        <Typography component="subtitle2" variant="h6">
          selecione a quantidade desejada
        </Typography>
        <select name="quantity" id="cars" className='select' onChange={e => OnChangeQuantity(e)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <Button onClick={() => AddProductToCart()} color='primary' fullWidth='true'>Adicionar ao carrinho</Button>
      </div>
    </div>
  }

  const ChangePage = (pageToLink) => {
    history.push(`/${pageToLink}`);
  }

  const GetCartObjects = () => {
    if (localStorage.hasOwnProperty("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }else{
      return [];
    }
  }

  return <div> 

        <Header BackArrow='True' PageToLink='/feed' title={Restaurant? restaurant.name: "Carregando"}/>
        {Restaurant && <div className='Canvas'>
          <img src={restaurant.logoUrl} alt="Logo do restaurante"/>

          <Typography>{restaurant.name}</Typography>
          <Typography variant="subtitle2" color="textSecondary">{restaurant.category}</Typography>
          <div className="SameLineText">
            <Typography variant="subtitle2" color="textSecondary">{restaurant.deliveryTime} min</Typography>
            <Typography variant="subtitle2" color="textSecondary">Frete: R${restaurant.shipping}</Typography>
          </div>
          <Typography variant="subtitle2" color="textSecondary">{restaurant.address}</Typography>
        </div>}

        {Restaurant && <div className='Canvas'>
          <div>
            {MountMainDishes()}
          </div> 
        </div>}

        {popUp && RenderPopUp()}
    </div>
}

export default Restaurant