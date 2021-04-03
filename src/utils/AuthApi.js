import React from 'react'
import Cookies from 'js-cookie'
import constants from './constants.js'

/**
 * AuthApi es el contexto de loggeo de la aplicación,
 * aquí accederán el resto de componentes.
 */
export const AuthApi = React.createContext()

/**
 * Registra el usuario localmente, insertándolo en el
 * contexto y añadiéndolo como cookies al usuario.
 * @param {contexto} Auth Contexto de la aplicación
 * @param data Datos a registrar localmente
 */
export const registrarseLocal = (Auth, data) => {
	console.log(data)
	data.logged = true
	Auth.setAuth(data)
	Cookies.set(constants.COOKIE_USER, data, constants.OPTIONS_COOKIE)
}

/**
 * Función de deslogeo local
 * @param {contexto} Auth Contexto de la aplicación
 * @returns false
 */
export const logOut = (Auth) => {
	Auth.setAuth(constants.NULL_VALUES)
	Cookies.remove(constants.COOKIE_USER)
	return false
}

/**
 * Devuelve las credenciales del usuario registrado
 * @deprecated
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Objeto con (idUsuario, clave) del usuario
 */
export const credenciales = (Auth) => {
	return {
		idUsuario: Auth.auth.usuario.id,
		clave: Auth.auth.usuario.clave,
	}
}

export default AuthApi
