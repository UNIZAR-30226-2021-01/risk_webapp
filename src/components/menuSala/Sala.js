import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MDBBtn, MDBRow, MDBCol, MDBTabContent, MDBTabPane } from 'mdbreact'
import ListaAmigos from './../panelAmigos/ListaAmigos'
import InvitarAmigo from './InvitarAmigo'
import { obtenerAmigos } from 'utils/restAPI'
import { MDBContainer } from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales } from 'utils/usuarioVO'
import { FormCrearSala } from './FormCrearSala'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { useHistory } from 'react-router-dom'
import SalaEncabezado from './SalaEncabezado'
import ListaJugadoresPartida from './ListaJugadoresPartida'
import './Sala.css'

const estadosInternos = {
	CreandoFormulario: 'Creando formulario',
	EsperandoRespuestaFormulario: 'Esperando respuesta creación formulario',
	EsperandoInicio: 'Esperando inicio de partida',
}

/**
 *
 * @todo link en el router
 * @todo websocket si close llama a onclose?
 */
export const Sala = (props) => {
	const Auth = useContext(AuthApi)
	const history = useHistory()

	// Obtiene el id de sala y el tipo de conexión establecida
	//										(Aceptar, ...)
	const { id } = useParams()

	// Estado interno
	let estadoInterno = estadosInternos.CreandoFormulario

	// Websocket de la conexión
	let ws

	/**
	 * 1: Creando sala
	 * 2: Sala normal
	 * 3: Cargando (probablemente no necesario, solo para mientras el ws está roto)
	 */
	const [estadoPag, setEstadoPag] = useState('3')

	// Indica si se es el host o no
	const [soyHost, setSoyHost] = useState(false)

	const [serverErrors, setServerErrors] = useState('')

	let url = ''

	// Jugadores ya conectados
	const [salaInfo, setSalaInfo] = useState({
		tiempoTurno: 0,
		nombreSala: '',
		idSala: 0,
		jugadores: [],
	})

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		if (id === 'undefined') {
			url = 'crearSala'
			fetchAmigos()
			setEstadoPag('1')
			setSoyHost(true)
			estadoInterno = estadosInternos.CreandoFormulario
		} else {
			setEstadoPag('2')
			url = 'aceptarSala'
			setSoyHost(false)
			estadoInterno = estadosInternos.EsperandoInicio
		}

		console.log('id: ', id)

		connect()
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
		/*const amigosPrueba = [
			{ id: 1, nombre: 'PacoGamer', icono: 1, aspecto: 1 },
			{ id: 2, nombre: 'PacoGamerHD', icono: 1, aspecto: 2 },
			{ id: 3, nombre: 'xxxPacoGamerxxx', icono: 2, aspecto: 1 },
			{ id: 4, nombre: 'PacoGamer', icono: 1, aspecto: 1 },
			{ id: 5, nombre: 'PacoGamerHD', icono: 1, aspecto: 2 },
			{ id: 6, nombre: 'xxxPacoGamerxxx', icono: 2, aspecto: 1 },
		]
		setAmigos(amigosPrueba)*/
	}

	const connect = () => {
		ws = new WebSocket(`wss://fathomless-ridge-74437.herokuapp.com/${url}`)
		let tOut = 250
		var connectInterval

		// websocket onopen event listener
		ws.onopen = () => {
			console.log('connected websocket component')
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
			const data = JSON.parse(e.data)
			console.log(data)
			setServerErrors('')
			// Caso error
			if (data._tipoMensaje === 'e') {
				setServerErrors(data.err)
				// Caso mensaje de datos
			} else if (data._tipoMensaje === 'd') {
				if (estadoInterno == estadosInternos.EsperandoRespuestaFormulario) {
					estadoInterno = estadosInternos.EsperandoInicio
					setEstadoPag('2')
				}
				delete data._tipoMensaje
				setSalaInfo(data)
				// Caso mensaje de partida
			} else if (data._tipoMensaje === 'p') {
				// Comienza partida, comprobar estado y redirigir
				if (estadoInterno == estadosInternos.EsperandoInicio) {
					comenzarPartida()
				} else {
					console.log('???')
				}
			}
		}
	}

	/**
	 * utilited by the @function connect to check if the connection is close due to an error, if so attempts to reconnect
	 */
	const check = () => {
		const webS = ws
		if (!webS || webS.readyState === WebSocket.CLOSED) connect() //check if websocket instance is closed, if so call `connect` function.
	}

	const comenzarPartida = () => {
		// Si es necesario, comprobar número de jugadores
		ws.send(JSON.stringify({ tipo: 'Iniciar' }))
	}

	const redirigirPartida = () => {
		history.push(`/partida/${salaInfo.idSala}`)
	}

	const crearSala = (formData) => {
		setSalaInfo({
			...salaInfo,
			tiempoTurno: formData.tiempoTurno,
			nombreSala: formData.nombreSala,
		})
		setEstadoPag('2')
		//ws.send(JSON.stringify(formData))
	}

	// Poner cada Tab en un componente distinto?
	return (
		<MDBContainer>
			<ErroresServer serverErrors={serverErrors} />
			<MDBTabContent activeItem={estadoPag}>
				<MDBTabPane tabId="1">
					<p> Pag1...</p>
					<FormCrearSala
						usuario={Auth.auth.usuario}
						enviarSolicitud={crearSala}
					/>
				</MDBTabPane>
				{/* Mover todo esto a otro componente si es necesario */}
				<MDBTabPane tabId="2">
					<SalaEncabezado datos={salaInfo} />
					<MDBRow>
						<MDBCol className="p-1 mt-1">
							<h2 className="text-center">Jugadores</h2>
							<ListaJugadoresPartida usuarios={salaInfo.jugadores} />
						</MDBCol>
						<MDBCol className="p-1 mt-1">
							<h2 className="text-center">Amigos</h2>
							{soyHost && (
								<ListaAmigos
									usuarios={amigos}
									elemento={<InvitarAmigo ws={ws} />}
									mostrarAnyadir={false}
								/>
							)}
						</MDBCol>
					</MDBRow>
					{/* Comenzar partida, hacer el onClick*/}
					{soyHost && (
						<MDBRow className="d-flex justify-content-center">
							<MDBBtn onClick={comenzarPartida} className="mt-1">
								Comenzar partida
							</MDBBtn>
						</MDBRow>
					)}
					<p> Pag2...</p>
				</MDBTabPane>
				<MDBTabPane tabId="3">
					<p> Cargando...</p>
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Sala
