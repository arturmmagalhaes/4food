import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './OrderPopUp.css';

import { IconButton, Divider, Typography  } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import clock from '../../assets/images/clock.svg'


function OrderPopUp(props) {

  //props
  // Restaurant: Nome do restaurant
  // Price: preço

  // <OrderPopUp Restaurant:'Habbibs' Price:'70,50'/>

  return  <div className='Popup'> 
        <div className='PopupContainer'>
            <img className='Image' src={clock}/>
            <div>
                <h4 className='title'>Pedido em andamento</h4>
                <p variant='button'>{props.Restaurant}</p>
                <p variant='h6' className='Total'><b>SUBTOTAL R${props.Price}</b></p>
            </div>
            <div className='Space'/>
        </div>  
    </div>
}

export default OrderPopUp