import React, { useState, useContext } from "react";
import Cookies from "js-cookie";
import "./../index.css";
import constants from "./../constants.js";

import AuthApi from "./sesion/AuthApi";

export const MenuPrincipal = () => {
  const Auth = useContext(AuthApi);
  const logout = () => {
    Auth.setAuth(constants.NULL_VALUES);
    Cookies.remove(constants.COOKIE_USER);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default MenuPrincipal;