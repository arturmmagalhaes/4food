import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"; // browserRouter para auxiliar o protectedPage.
import SignUpPage from "../components/SignUp/SignUpPage";
import LoginPage from "../components/Login/LoginPage";
import FeedPage from "../components/FeedPage/FeedPage";
import SearchPage from "../components/SearchPage/SearchPage";
import RegisterAddressPage from "../components/RegisterAddress/RegisterAddressPage";
import RestaurantPage from "../components/Restaurant/Restaurant";
import CartPage from "../components/Cart/cart";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/EditProfile/EditProfile";
import EditAddress from "../components/EditAddress/EditAdress";

//import Profile from "../Profile/index";

function PrivateRoute({ component: Component, ...rest }) {
  const token = window.localStorage.getItem("token");

  const route = !token ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} component={Component} />
  );

  return route;
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <PrivateRoute exact path="/feed" component={FeedPage} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/editProfile" component={EditProfile} />
        <PrivateRoute exact path="/editAddress" component={EditAddress} />
        <PrivateRoute exact path="/search" component={SearchPage} />
        <PrivateRoute exact path="/address" component={RegisterAddressPage} />
        <PrivateRoute exact path="/Restaurant/:id" component={RestaurantPage} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
