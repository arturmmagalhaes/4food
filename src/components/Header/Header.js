import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

import { Typography, IconButton, Divider } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header(props) {
  let history = useHistory();

  /* PROPS
    //BackArrow 'True' use backArrow in header
    //PageToLink index of the page to 
    //title 'page name' show the name of the page 

    Ex: <Header BackArrow='True' PageToLink='Login' title='Habbibs'/>
  */

  const ChangePage = (pageToLink) => {
    history.push(`${pageToLink}`);
  };

  const GetHeader = () => {
    return (

      <div className="Header">
        {props.BackArrow ? (
          <IconButton
            onClick={() =>
              ChangePage(props.PageToLink ? props.PageToLink : "/")
            }
          >
            <ArrowBackIosIcon />
          </IconButton>
        ) : (
          <div style={{ width: "20%", height: "47px" }} />
        )}
        <Typography variant="h5">
          {props.title ? props.title : "IFuture"}
        </Typography>
        <div style={{ width: "20%" }} />
      </div>
    );
  };

  return (
    <div className="AppBar">
      {GetHeader()}
      <Divider />

    </div>
  );
}

export default Header;
