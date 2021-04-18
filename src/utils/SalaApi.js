import { obtenerCredenciales } from './usuarioVO'

export const socketAbierto = (ws) => {
	return ws !== undefined && ws.readyState === WebSocket.OPEN
}

export const crearSala = (Auth, ws, formData) => {
	formData = {
		...formData,
		...obtenerCredenciales(Auth),
	}
	console.log(formData, 'Envío crear sala')
	ws.send(JSON.stringify(formData))
}

export const aceptarSala = (Auth, ws, id) => {
	const data = {
		...obtenerCredenciales(Auth),
		idSala: id,
	}
	ws.send(JSON.stringify(data))
}
