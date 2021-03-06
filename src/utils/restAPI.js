import constants from './constants'
import qs from 'qs'

/**
 * Contiene todas las funciones necesarias para comunicarse con la API rest del servidor.
 * @module restAPI
 */

/**
 * Envía una petición al server mediante el método POST con los datos recibidos como parámetro.
 * @param {datos_adicionales} formData Contiene los datos necesarios para la función solicitada
 * por el usuario.
 * @param {ruta_servidor} route Es la ruta dentro del servidor a la que se envía la petición.
 * Cada ruta espera una configuración distinta de parámetros que se le pasarán mediante formData.
 * @returns Respuesta recibida del servidor en formato JSON.
 */
export async function peticionQForm(route, formData) {
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
export async function inicioSesion(formData) {
	console.log(formData)
	let data = await peticionQForm('iniciarSesion', formData)
	if ('clave' in formData && 'usuario' in data) {
		data.usuario.clave = formData.clave
	}
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
export async function registrarse(formData) {
	let data = await peticionQForm('registrar', formData)
	if ('clave' in formData && 'usuario' in data) {
		data.usuario.clave = formData.clave
	}
	return data
}

/**
 * Hace una petición al server de recarga con los datos recibidos como parámetro
 * @param {datos_usuario} formData Contiene los datos necesarios para el registro
 * de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export async function recargarUsuario(formData) {
	let data = await peticionQForm('recargarUsuario', formData)
	if ('clave' in formData && 'usuario' in data) {
		data.usuario.clave = formData.clave
	}
	return data
}

/**
 * Hace una petición al server de cambio del dato en cuestión con los datos
 * recibidos como parámetro.
 * @param {datos_usuario} formData Contiene los datos necesarios para el cambio del
 * dato de un usuario en el servidor.
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export async function actualizarConfiguracion(formData) {
	const data = await peticionQForm('personalizarUsuario', formData)
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
export async function solicitudAmistad(formData) {
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
export async function eliminarAmigo(formData) {
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
export async function obtenerAmigos(formData) {
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
export async function obtenerNotificaciones(formData) {
	const data = await peticionQForm('notificaciones', formData)
	if (data.notificaciones === null) {
		data.notificaciones = []
	}
	return data
}

/**
 * Hace una petición al server con la decisión de una petición de amistad.
 * @param {datos_usuario} formData Contiene los datos necesarios para gestionar
 * una petición de amistad del usuario
 * @returns Respuesta recibida a la decisión de la petición en formato JSON.
 * @public
 */
export async function decisionPeticion(formData) {
	const data = await peticionQForm('gestionAmistad', formData)
	return data
}

/**
 *
 * @param {datos_rechazo} formData Contiene los datos necesarios para
 * rechazar una invitación a una partida
 * @returns respuesta recibida de la petición en formato JSON
 */
export async function rechazarPartida(formData) {
	const data = await peticionQForm('rechazarPartida', formData)
	return data
}

/**
 *
 * @param {datos_borrar_noti} formData Contiene los datos necesarios para
 * borrar una notificación de turno en partida
 * @returns respuesta recibida de la petición en formato JSON
 */
export async function borrarNotiTurno(formData) {
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
export async function obtenerPartidas(formData) {
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
 * @param {datos_usuario} formData Contiene los datos necesarios para la compra
 * del objeto
 * @returns Respuesta recibida a la petición de registro en JSON.
 * @public
 */
export async function comprarObjeto(formData) {
	const data = await peticionQForm('comprar', formData)
	return data
}

/**
 * @deprecated
 * @public
 */
export async function crearSala(formData) {
	const data = await peticionQForm('crearSala', formData)
	return data
}

/**
 * Realiza una petición de restablecimiento de contraseña al servidor
 * @param {*} formData Datos de clave y token
 */
export async function restablecerClave(formData) {
	const data = await peticionQForm('restablecerClave', formData)
	return data
}

/**
 * Realiza una petición de solicitud de restablecimiento de contraseña al servidor
 * @param {*} formData Datos de clave y token
 */
export async function solicitarRestablecerClave(formData) {
	const data = await peticionQForm('olvidoClave', formData)
	return data
}

/**
 * Realiza una petición de eliminación de cuenta al servidor
 * @param {*} formData Datos de usuario y clave
 */
export async function borrarCuenta(formData) {
	const data = await peticionQForm('borrarCuenta', formData)
	return data
}
