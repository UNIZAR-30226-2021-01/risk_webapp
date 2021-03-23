import React, { useState, useContext } from "react"
import Cookies from "js-cookie"
import "./../index.css"
import constants from "./../constants.js"

import AuthApi from "./sesion/AuthApi"
import ActualizacionConfiguracion from './sesion/ActualizacionConfiguracion'
import MenuSalas from './salas/MenuSalas'
import ListaAmigos from './panelAmigos/ListaAmigos'

export const MenuPrincipal = () => {
  const Auth = useContext(AuthApi)

  const [friendsShow, setFriends] = useState(true)
  let amigos = [{nombre: 'Óscar'},{nombre: 'Pepe'}]

  const logout = () => {
    Auth.setAuth(constants.NULL_VALUES)
    Cookies.remove(constants.COOKIE_USER)
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ActualizacionConfiguracion />
      <MenuSalas />
      <ListaAmigos usuarios={amigos} />
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default MenuPrincipal;