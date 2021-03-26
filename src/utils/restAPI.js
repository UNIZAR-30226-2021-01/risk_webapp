import constants from './constants'
import qs from 'qs'

export const peticionQForm = async(route, formData) => {
	const url = `${constants.BASE_SERVER_URL}${route}`
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: qs.stringify(formData)
	}
	const res = await fetch(url, options)
	const data = await res.json()
	return data
}

/**
 * Hace una petición al server de inicio de sesión con los datos recibidos como parámetro
 * @param {datos_usuario} formData Contiene los datos necesarios para el inicio de sesión
 * de un usuario en el servidor (nombre o correo del usuario y su clave correspondiente)
 * @returns Respuesta recibida a la petición de inicio de sesión en JSON
 */
export const inicioSesion = async(formData) => {
	const data = await peticionQForm('iniciarSesion', formData)
	return data
}

/**
 * Hace una petición al server de registro con los datos recibidos como parámetro
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor 
 * @returns Respuesta recibida a la petición de registro en JSON
 * @todo testear
 */
export const registrarse = async(formData) => {
	const data = peticionQForm('registrar', formData)
	return data
}

export const enviarSolicitudAmistad = async (formData) =>{
	const data = peticionQForm('enviarSolicitudAmistad', formData)
	return data
}

export const eliminarAmigo = async(formData)  => {
	formData.decision = "Borrar"
	const data = peticionQForm('gestionAmistad', formData)
	return data
}