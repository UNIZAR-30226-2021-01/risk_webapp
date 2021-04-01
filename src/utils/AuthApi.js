import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import constants from './constants.js'

/**
 * AuthApi es el contexto de loggeo de la aplicación,
 * aquí accederán el resto de componentes.
 */
export const AuthApi = React.createContext()

/**
 * Realiza la petición al server y en función de los valores obtenidos lo establece
 * en el contexto y las cookies o muestra un mensaje de error.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor
 */
export const registrarseLocal = (Auth, data) => {
	data.logged = true
	Auth.setAuth(data)
	Cookies.set(constants.COOKIE_USER, data, constants.OPTIONS_COOKIE)
}

/**
 * Función de deslogeo local
 * @returns false
 */
export const logOut = (Auth) => {
	Auth.setAuth(constants.NULL_VALUES)
	Cookies.remove(constants.COOKIE_USER)
	return false
}
export default AuthApi
