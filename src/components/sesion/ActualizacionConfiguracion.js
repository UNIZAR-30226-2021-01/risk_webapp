import React, {useContext, useState} from 'react'
import FormActualizar from './FormActualizar.js'
import constants from './../../constants.js'
import AuthApi from "./AuthApi"
import Cookies from 'js-cookie'
import qs from 'qs'

/**
 * ActualizacionConfiguracion, si la actualización es correcta actualiza las cookies de sesión
 * al cliente y en el contexto de la aplicación
 * @requires FormActualizar
 * @todo Testeo final exhaustivo de todo, hash a la contraseña
 */
const ActualizacionConfiguracion = () =>{
	const Auth = useContext(AuthApi)

	const [values, setValues] = useState(Auth.auth.usuario)

	/**
	 * Intenta cambiar el parámetro campo si se ha modificado
	 * @param {datos_de_sesion} oldValues Valores antiguos de sesion
	 * @param {string} campo Valor a consultar y modificar
	 * @param {nuevos_datos} formData Valores recogidos en el formulario  
	 */
	const actualizarCampo = async(oldValues, campo, formData) => {
		const url = `${constants.BASE_SERVER_URL}personalizarUsuario` // Actualizar
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
		console.log(oldValues.usuario[campo], "=?", nuevoValor)
		if (oldValues.usuario[campo] !== nuevoValor){
			cuerpo.nuevoDato = nuevoValor
			cuerpo.tipo = campo
			options.body= qs.stringify(cuerpo)
			console.log("Peticion de cambio de: ", campo, ":", 
				oldValues.usuario[campo], "=>", nuevoValor)
			const res = await fetch(url, options)
			const data = await res.json()
			if (data.code !== 0) {
				return data
			} else {
				oldValues.usuario[campo] = nuevoValor
				Auth.setAuth(oldValues)
				setValues(oldValues.usuario)
				Cookies.set(constants.COOKIE_USER, oldValues, constants.OPTIONS_COOKIE)
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
		let oldValues = Auth.auth

		let data = await actualizarCampo(oldValues, "nombre", formData)
		if (data.code !== 0) {return data}

		data = await actualizarCampo(oldValues, "correo", formData)
		if (data.code !== 0) {return data}
		
		data = await actualizarCampo(oldValues, "recibeCorreos", formData)
		if (data.code !== 0) {return data}

		if (formData.cambioClave){
			data = await actualizarCampo(oldValues, "clave", formData)
			if (data.code !== 0) {return data}
		}
		return data
	}
	
	return(
		<div>
			<h2> Actualizar configuración </h2>
			<FormActualizar defaults={values} submitText='Actualizar' submitData={actualizarServer}/>
		</div>
	)
}

export default ActualizacionConfiguracion;