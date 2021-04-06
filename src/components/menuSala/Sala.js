import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MDBRow, MDBCol } from 'mdbreact'
import ListaAmigos from './../panelAmigos/ListaAmigos'
import InvitarAmigo from './InvitarAmigo'
import { obtenerAmigos } from 'utils/restAPI'
import { MDBContainer } from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales } from 'utils/usuarioVO'

/**
 *
 * @todo link en el router
 * @todo websocket si close llama a onclose?
 */
export const Sala = (props) => {
	const Auth = useContext(AuthApi)
	const [ws, setWs] = useState(null)
	//Obtiene el id de sala y el tipo de conexión establecida
	//										(Aceptar, ...)
	const { id, type } = useParams()
	// Jugadores ya conectados
	// const [jugadores, setJugadores] = useState([])

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		console.log('id: ', id, ' tipo: ', type)
		fetchAmigos()
		check()
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
		var ws = new WebSocket(
			'wss://fathomless-ridge-74437.herokuapp.com/aceptarSala'
		)
		let tOut = 250
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

			tOut = 250 // reset timer to 250 on open of websocket connection
			clearTimeout(connectInterval) // clear Interval on on open of websocket connection
		}

		// websocket onclose event listener
		ws.onclose = (e) => {
			console.log(
				`Socket is closed. Reconnect will be attempted in ${Math.min(
					10000 / 1000,
					(tOut + tOut) / 1000
				)} second.`,
				e.reason
			)

			tOut = tOut + tOut //increment retry interval
			connectInterval = setTimeout(check, Math.min(10000, tOut)) //call check function after timeout
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
		const webS = ws
		if (!webS || webS.readyState === WebSocket.CLOSED) connect() //check if websocket instance is closed, if so call `connect` function.
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="8">
					{/* Jugadores invitados*/}
					<p>{id}</p>
					<p>{type}</p>
				</MDBCol>
				{/* Esto solo si eres el host, y el botón de aceptar también*/}
				<MDBCol md="5">
					<ListaAmigos usuarios={amigos} elemento={<InvitarAmigo />} />
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}

export default Sala
