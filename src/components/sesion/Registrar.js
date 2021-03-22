import React, {useContext} from 'react';
import FormCuenta from './FormRegistro.js'
import constants from './../../constants.js';
import AuthApi from "./AuthApi"
import Cookies from 'js-cookie'
import qs from 'qs'
import {
	Link 
} from "react-router-dom"

/**
 * Registrar, si el loggeo es correcto añade las cookies de sesión
 * al cliente y en el contexto de la aplicación
 * @requires FormRegistro
 * @todo Testeo completo, hash a la contraseña
 */
const Registrar = () =>{
	const Auth = useContext(AuthApi)

	/**
	 * Hace una petición al server de registro con los datos recibidos como parámetro
	 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
	 * de un usuario en el servidor 
	 * @returns Respuesta recibida a la petición de registro en JSON
	 * @todo testear
	 */
	const registrarServer = async(formData) =>{
		console.log(formData)
		const url = `${constants.BASE_SERVER_URL}registrar`
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: qs.stringify(formData)
		}
		const res = await fetch(url, options)
		const data = await res.json()
		console.log(data, "JSON recibido de registrar")
		return data
	}

	/**
	 * Realiza la petición al server y en función de los valores obtenidos lo establece
	 * en el contexto y las cookies o muestra un mensaje de error.
	 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
	 * de un usuario en el servidor 
	 */
	const registrarse = (formData) =>{
		formData.logged=true
		Auth.setAuth(formData)
		Cookies.set(constants.COOKIE_USER, formData, constants.OPTIONS_COOKIE)
	}

	return(
		<div>
			<h2> Crear cuenta</h2>
            <FormCuenta defaults={constants.NULL_VALUES} submitText='Registrarse' makePetition={registrarServer} siValido={registrarse}/>
			<p> ¿Ya tienes cuenta? <Link to="/inicioSesion">Inicia sesión</Link></p>
		</div>
	)
}

export default Registrar;