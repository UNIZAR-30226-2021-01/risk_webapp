import React, { useContext } from "react"
import Cookies from "js-cookie"
import "./../index.css"
import constants from "./../constants.js"

import AuthApi from "./sesion/AuthApi"
import ActualizacionConfiguracion from './sesion/ActualizacionConfiguracion'

export const MenuPrincipal = () => {
  const Auth = useContext(AuthApi)
  const logout = () => {
    Auth.setAuth(constants.NULL_VALUES)
    Cookies.remove(constants.COOKIE_USER)
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ActualizacionConfiguracion />
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default MenuPrincipal;