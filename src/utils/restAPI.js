import constants from './constants'
import qs from 'qs'

/**
 * Envía una petición al server mediante el método POST con los datos recibidos como parámetro.
 * @param {datos_adicionales} formData Contiene los datos necesarios para la función solicitada
 * por el usuario.
 * @param {ruta_servidor} route Es la ruta dentro del servidor a la que se envía la petición.
 * Cada ruta espera una configuración distinta de parámetros que se le pasarán mediante formData.
 * @returns Respuesta recibida del servidor en formato JSON.
 */
export const peticionQForm = async (route, formData) => {
	const url = `${constants.BASE_SERVER_URL}${route}`
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: qs.stringify(formData),
	}
	const res = await fetch(url, options)
	const data = await res.json()
	return data
}

/**
 * Hace una petición al server de inicio de sesión con los datos recibidos como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el inicio de sesión
 * de un usuario en el servidor (nombre o correo del usuario y su clave correspondiente).
 * @returns Respuesta recibida a la petición de inicio de sesión en JSON.
 * @public
 */
export const inicioSesion = async (formData) => {
	console.log(formData)
	const data = await peticionQForm('iniciarSesion', formData)
	console.log(data)
	return data
}

/**
 * Hace una petición al server de registro con los datos recibidos como parámetro
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const registrarse = async (formData) => {
	const data = await peticionQForm('registrar', formData)
	return data
}

/**
 * Hace una petición al server de recarga con los datos recibidos como parámetro
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const recargarUsuario = async (formData) => {
	const data = await peticionQForm('recargarUsuario', formData)
	return data
}

/**
 * Hace una petición al server de solicitud de amistad con los datos recibidos
 * como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor
 * @returns Respuesta recibida a la petición de registro en JSON
 * @public
 */
export const solicitudAmistad = async (formData) => {
	const data = await peticionQForm('enviarSolicitudAmistad', formData)
	return data
}

/**
 * Hace una petición al server de eliminar amigo con los datos recibidos como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const eliminarAmigo = async (formData) => {
	formData.decision = 'Borrar'
	const data = await peticionQForm('gestionAmistad', formData)
	return data
}

/**
 * Hace una petición al server de obtener la lista de amigos con los datos
 * recibidos como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const obtenerAmigos = async (formData) => {
	const data = await peticionQForm('amigos', formData)
	if (data.amigos === null) {
		data.amigos = []
	}
	return data
}

/**
 * Hace una petición al server de obtener la lista de notifiaciones con
 * los datos recibidos como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const obtenerNotificaciones = async (formData) => {
	const data = await peticionQForm('notificaciones', formData)
	if (data.notificaciones === null) {
		data.notificaciones = []
	}
	return data
}

/**
 * Hace una petición al server con la decisión de una petición de amistad.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const decisionPeticion = async (formData) => {
	const data = await peticionQForm('gestionAmistad', formData)
	return data
}

export const borrarNotiTurno = async (formData) => {
	const data = await peticionQForm('borrarNotificacionTurno', formData)
	return data
}

/**
 * Hace una petición al server de obtención de la lista de partidas
 * con los datos recibidos como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const obtenerPartidas = async (formData) => {
	const data = await peticionQForm('partidas', formData)
	if (data.partidas === null) {
		data.partidas = []
	}
	return data
}

// Funciones de la tienda

/**
 * Hace una petición al server de comprar el objeto con los datos recibidos
 * como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export const comprarObjeto = async (formData) => {
	const data = await peticionQForm('comprar', formData)
	return data
}

/**
 * @deprecated
 * @public
 */
export const crearSala = async (formData) => {
	const data = await peticionQForm('crearSala', formData)
	return data
}
