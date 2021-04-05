/**
 * @todo link en el router
 */

import React, { useState, useEffect } from 'react'
import ListaAmigos from './../panelAmigos/ListaAmigos'
import { MDBContainer} from 'mdbreact'

/**
 * 
 * @todo websocket si close llama a onclose?
 * @returns 
 */
export const Sala = () => {
	const [ws, setWs] = useState(null)

	// Jugadores ya conectados
	// const [jugadores, setJugadores] = useState([])

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		fetchAmigos()
		this.check()
		return () => {
			if (!WebSocket.CLOSED) {
				ws.close()
			}
		}
	}, [])

	const fetchAmigos = async () => {
		const nuestraInfo = obtenerCredenciales(Auth)
		const dataAmigos = await obtenerAmigos(nuestraInfo)
		setAmigos(dataAmigos.amigos)
	}

	const connect = () => {
		let that = this
		var connectInterval

		// websocket onopen event listener
		ws.onopen = () => {
			console.log('connected websocket component')
			setWs(ws)
			/**
			 * Mensaje de inicio
			const message = { Cosa: 'inicio' }
			ws.send(JSON.stringify(message))
			 */

			that.timeout = 250 // reset timer to 250 on open of websocket connection
			clearTimeout(connectInterval) // clear Interval on on open of websocket connection
		}

		// websocket onclose event listener
		ws.onclose = (e) => {
			console.log(
				`Socket is closed. Reconnect will be attempted in ${Math.min(
					10000 / 1000,
					(that.timeout + that.timeout) / 1000
				)} second.`,
				e.reason
			)

			that.timeout = that.timeout + that.timeout //increment retry interval
			connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)) //call check function after timeout
		}

		// websocket onerror event listener
		ws.onerror = (err) => {
			console.error('Socket encountered error: ', err.message, 'Closing socket')
			ws.close()
		}

		// websocket onmessage event listener
		ws.onmessage = (e) => {
			const message = JSON.parse(e.data)
			console.log(message.Num)
			// Mirar tipos (?)
		}
	}

	/**
	 * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
	 */
	const check = () => {
		const { ws } = this.state
		if (!ws || ws.readyState === WebSocket.CLOSED) connect() //check if websocket instance is closed, if so call `connect` function.
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="8">{/* Jugadores invitados*/}</MDBCol>
				{/* Esto solo si eres el host, y el botón de aceptar también*/}
				<MDBCol md="5">
					<ListaAmigos usuarios={amigos} elemento={<InvitarAmigo />} />
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}
