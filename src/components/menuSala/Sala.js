import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MDBRow, MDBCol, MDBTabContent, MDBTabPane } from 'mdbreact'
import ListaAmigos from './../panelAmigos/ListaAmigos'
import InvitarAmigo from './InvitarAmigo'
import { obtenerAmigos } from 'utils/restAPI'
import { MDBContainer } from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales } from 'utils/usuarioVO'
import { FormCrearSala } from './FormCrearSala'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'

/**
 *
 * @todo link en el router
 * @todo websocket si close llama a onclose?
 */
export const Sala = (props) => {
	const Auth = useContext(AuthApi)

	// Obtiene el id de sala y el tipo de conexión establecida
	//										(Aceptar, ...)
	const { id } = useParams()

	// Websocket de la conexión
	const [ws, setWs] = useState(null)

	/**
	 * 1: Creando sala
	 * 2: Sala normal
	 * 3: Cargando
	 */
	const [estadoPag, setEstadoPag] = useState('3')

	// Indica si se es el host o no
	const [soyHost, setSoyHost] = useState(false)

	const [serverErrors, setServerErrors] = useState('')

	let url = ''

	// Jugadores ya conectados
	// const [jugadores, setJugadores] = useState([])

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		if (id === 'undefined') {
			url = 'crearSala'
			fetchAmigos()
			setEstadoPag('1')
			setSoyHost(true)
		} else {
			setEstadoPag('2')
			url = 'aceptarSala'
			setSoyHost(false)
		}
		console.log('id: ', id)

		//connect()
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
		var ws = new WebSocket(`wss://fathomless-ridge-74437.herokuapp.com/${url}`)
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
			console.log(`Socket is closed.`)
		}

		// websocket onerror event listener
		ws.onerror = (err) => {
			console.error('Socket encountered error: ', err.message, 'Closing socket')
			ws.close()
			console.log(
				`Reconnect will be attempted in ${Math.min(
					10000 / 1000,
					(tOut + tOut) / 1000
				)} second.`,
				err.reason
			)

			tOut = tOut + tOut //increment retry interval
			connectInterval = setTimeout(check, Math.min(10000, tOut)) //call check function after timeout
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

	const crearSala = (formData) => {
		formData.tiempoTurno = 3600
		setEstadoPag('2')
		//ws.send(JSON.stringify(formData))
	}

	// Poner cada Tab en un componente distinto?
	return (
		<MDBContainer>
			<ErroresServer serverErrors={serverErrors} />
			<MDBTabContent activeItem={estadoPag}>
				<MDBTabPane tabId="1">
					<p> Cargando1...</p>
					<FormCrearSala
						usuario={Auth.auth.usuario}
						enviarSolicitud={crearSala}
					/>
				</MDBTabPane>
				<MDBTabPane tabId="2">
					<p> Cargando2...</p>
					{soyHost && (
						<ListaAmigos
							usuarios={amigos}
							elemento={<InvitarAmigo ws={ws} />}
							mostrarAnyadir={false}
						/>
					)}
				</MDBTabPane>
				<MDBTabPane tabId="3">
					<p> Cargando...</p>
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Sala
