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
 * ActualizacionConfiguracion, si la actualización es correcta actualiza las cookies de sesión
 * al cliente y en el contexto de la aplicación
 * @requires FormActualizar
 * @todo Conexión con servidor y errores del servidor
 * @todo Comprobar si realmente es necesario añadirlo al contexto de la aplicación
 */
const ActualizacionConfiguracion = () =>{
	const Auth = useContext(AuthApi)


	/**
	 * Intenta cambiar el parámetro campo si se ha modificado
	 * @param {datos_de_sesion} oldValues Valores antiguos de sesion
	 * @param {string} campo Valor a consultar y modificar
	 * @param {nuevos_datos} formData Valores recogidos en el formulario  
	 */
	const actualizarCampo = async(oldValues, campo, formData) => {
		const url = `${constants.BASE_SERVER_URL}registrar` // Actualizar
		const nuevoValor = formData[campo]
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		}
		let cuerpo = {
			idUsuario: oldValues.usuario.id,
			clave: oldValues.usuario.clave,
		}
		if (oldValues.usuario[campo] !== nuevoValor){
			cuerpo.nuevoDato = nuevoValor
			cuerpo.tipo = campo
			options.body= qs.stringify(cuerpo)
			const res = await fetch(url, options)
			const data = await res.json()
			if (data.code !== 0){
				return data
			} else{
				oldValues.usuario[campo] = nuevoValor
				seAuth(oldValues)
				setCookies(constants.COOKIE_USER, oldValues, constants.OPTIONS_COOKIE)
			}
			return data
		} else {
			return {code: 0}
		}
	}

	/**
	 * Hace una petición al server de registro con los datos recibidos como parámetro
	 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
	 * de un usuario en el servidor 
	 * @returns Respuesta recibida a la petición de registro en JSON
	 * @todo testear
	 */
	const actualizarServer = async(formData) =>{
		console.log(formData)
		const oldValues = Auth.auth
		let changedValues = Auth.auth

		let data = actualizarCampo(oldValues, "nombre", formData)
		if (data.code != 0) return data

		data = actualizarCampo(oldValues, "correo")
		if (data.code != 0) return data

		data = actualizarCampo(oldValues, "nombre")
		if (data.code != 0) return data
		
		data = actualizarCampo(oldValues, "recibeCorreos")
		if (data.code != 0) return data

		if (formData.cambioClave){
			data = actualizarCampo(oldValues, "clave")
			if (data.code != 0) return data
		}
		return {code: 0}
	}
	
	return(
		<div>
			<h2> Crear cuenta</h2>
			<FormCuenta defaults={constants.NULL_VALUES} submitText='Registrarse' makePetition={registrarServer}/>
			<p> ¿Ya tienes cuenta? <Link to="/inicioSesion">Inicia sesión</Link></p>
		</div>
	)
}

export default Registrar;