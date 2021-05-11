import { obtenerCredenciales } from './usuarioVO'

/**
 * Contiene el envío de los mensajes necesarios pro ws para comunicarse
 * con el servidor.
 * @module SalaApi
 */

/**
 * Dado un websocket, devuelve si está abierto.
 * @param {*} ws Websocket a verificar
 * @returns True si y solo si ws es un websocket y está abierto
 */
export const socketAbierto = (ws) => {
	return ws !== undefined && ws.readyState === WebSocket.OPEN
}

/**
 * Envía el mensaje de crear sala con los credenciales de Auth.
 * @param {*} Auth Auth del contexto
 * @param {*} ws Websocket por el que enviar el mensaje
 * @param {*} formData Valores necesarios de información para crear la sala (sin credenciales)
 */
export const crearSala = (Auth, ws, formData) => {
	formData = {
		...formData,
		...obtenerCredenciales(Auth),
	}
	console.log(formData, 'Envío crear sala')
	ws.send(JSON.stringify(formData))
}

/**
 * Envia el mensaje de envío de aceptar sala con los credenciales de Auth.
 * @param {*} Auth Auth del contexto
 * @param {*} ws Websocket por el que enviar el mensaje
 * @param {*} id Id de la sala a unirse
 */
export const aceptarSala = (Auth, ws, id) => {
	const data = {
		...obtenerCredenciales(Auth),
		idSala: id,
	}
	ws.send(JSON.stringify(data))
}

/**
 * Manda un ping por el websocket tras verificar que existe y que no está cerrado
 * @param {*} ws Websocket por el que enviar el ping
 */
export const ping = (ws) => {
	if (ws && ws.readyState !== WebSocket.CLOSED) {
		ws.send(JSON.stringify({ tipo: 'Ping' }))
	}
}
