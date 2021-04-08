import React, { useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {
	MDBBtn,
	MDBRow,
	MDBCol,
	MDBTabContent,
	MDBTabPane,
	MDBModal,
	MDBModalBody,
	MDBModalFooter,
	MDBModalHeader,
} from 'mdbreact'
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
import constants from 'utils/constants'
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
	/*const [estadoInterno, setEstadoInterno] = useState(
		estadosInternos.CreandoFormulario
	)*/
	const estadoInterno = useRef(estadosInternos.CreandoFormulario)

	// Websocket de la conexión
	const [ws, setWs] = useState(undefined)

	/**
	 * 1: Creando sala
	 * 2: Sala normal
	 * 3: Cargando (probablemente no necesario, solo para mientras el ws está roto)
	 */
	const [estadoPag, setEstadoPag] = useState('3')
	const [modal, setModal] = useState(true)

	// Indica si se es el host o no
	const [soyHost, setSoyHost] = useState(false)

	const [serverErrors, setServerErrors] = useState('')

	let url = ''

	// Jugadores ya conectados
	const [salaInfo, setSalaInfo] = useState({
		tiempoTurno: 0,
		nombrePartida: '',
		idSala: 0,
		jugadores: [],
	})

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		if (id === 'undefined') {
			url = 'crearSala'
			fetchAmigos()
			setSoyHost(true)
			setEstadoPag('1')
			estadoInterno.current = estadosInternos.CreandoFormulario
			//setEstadoInterno(estadosInternos.CreandoFormulario)
		} else {
			url = 'aceptarSala'
			setSoyHost(false)
			setEstadoPag('2')
			estadoInterno.current = estadosInternos.EsperandoInicio
			//setEstadoInterno(estadosInternos.EsperandoInicio)
		}

		console.log(url)
		console.log('id: ', id)

		connect()
		return () => {
			console.log('Desmontando ws')
			if (!WebSocket.CLOSED) {
				ws.close()
			}
		}
	}, [])

	useEffect(() => {
		if (id !== 'undefined') {
			solicitarDatos()
		}
	}, [ws])

	/*function comparer(otherArray) {
		return function (current) {
			return (
				otherArray.filter(function (other) {
					return other.id == current.id
				}).length == 0
			)
		}
	}*/

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

	// Si se cae la conexión, el server te tira, por lo que no hay que intentar
	// reconectar
	const connect = () => {
		let ws = new WebSocket(`${constants.BASER_WS_URL}${url}`)
		let tOut = 250

		// websocket onopen event listener
		ws.onopen = () => {
			console.log(ws.readyState, 'Conectado')
			setModal(false)
			setWs(ws)
		}

		// websocket onclose event listener
		ws.onclose = (e) => {
			console.log(`Socket cerrado.`)
		}

		// websocket onerror event listener
		ws.onerror = (err) => {
			console.error('Socket encountered error: ', err.message, 'Closing socket')
			setModal(true)
			ws.close()
		}

		// websocket onmessage event listener
		ws.onmessage = (e) => {
			const data = JSON.parse(e.data)
			console.log(data, estadoInterno, 'Datos y estado')
			setServerErrors('')
			// Caso error
			if (data._tipoMensaje === 'e') {
				setServerErrors(data.err)
				// Caso mensaje de datos
			} else if (data._tipoMensaje === 'd') {
				if (
					estadoInterno.current === estadosInternos.EsperandoRespuestaFormulario
				) {
					estadoInterno.current = estadosInternos.EsperandoInicio
					//setEstadoInterno(estadosInternos.EsperandoInicio)
					setEstadoPag('2')
				} else {
					console.log('sad')
				}
				delete data._tipoMensaje
				setSalaInfo(data)
				// Caso mensaje de partida
			} else if (data._tipoMensaje === 'p') {
				// Comienza partida, comprobar estado y redirigir
				if (estadoInterno.current === estadosInternos.EsperandoInicio) {
					comenzarPartida()
				} else {
					console.log('No se debe dar este caos.')
				}
			}
		}
	}

	/**
	 * utilited by the @function connect to check if the connection is close due to an error, if so attempts to reconnect
	 */
	const check = () => {
		if (!ws || ws.readyState === WebSocket.CLOSED) connect() //check if websocket instance is closed, if so call `connect` function.
	}

	const comenzarPartida = () => {
		// Si es necesario, comprobar número de jugadores
		ws.send(JSON.stringify({ tipo: 'Iniciar' }))
	}

	const redirigirPartida = () => {
		history.push(`/partida/${salaInfo.idSala}`)
	}

	const solicitarDatos = () => {
		if (ws !== undefined && ws.readyState === WebSocket.OPEN) {
			const formData = {
				...obtenerCredenciales(Auth),
				idSala: parseInt(id),
			}
			ws.send(JSON.stringify(formData))
		}
	}

	const crearSala = (formData) => {
		if (ws !== undefined && ws.readyState === WebSocket.OPEN) {
			setSalaInfo({
				...salaInfo,
				tiempoTurno: formData.tiempoTurno,
				nombreSala: formData.nombreSala,
			})
			// Por algún motivo no funciona
			//setEstadoInterno(estadosInternos.EsperandoRespuestaFormulario)
			estadoInterno.current = estadosInternos.EsperandoRespuestaFormulario

			//console.log(estadoInterno, 'plz')
			formData = {
				...formData,
				...obtenerCredenciales(Auth),
			}
			console.log(formData, 'Envío crear sala')
			ws.send(JSON.stringify(formData))
		} else {
			console.log(ws.readyState, 'Estado del socket')
		}
	}

	// Poner cada Tab en un componente distinto?
	return (
		<MDBContainer>
			<ErroresServer serverErrors={serverErrors} />
			{/*  Mover a otro componente
			El modal debería ser mientras se espera un mensaje, no por si se cae.
			Si se cae, se debería redirigir al menú principal tras mostrar un modal de
			'conexión caída' */}
			<MDBModal isOpen={modal} toggle={() => {}}>
				<MDBModalBody className="d-flex justify-content-between">
					<p>
						{' '}
						Te has desconectado. Comprueba tu conexión e inténtalo más tarde{' '}
					</p>
				</MDBModalBody>
				<MDBModalFooter>
					<MDBBtn
						onClick={() => {
							history.push('/')
						}}
					>
						Volver al menú principal
					</MDBBtn>
				</MDBModalFooter>
			</MDBModal>

			<MDBTabContent activeItem={estadoPag}>
				<MDBTabPane tabId="1">
					<p> Pag1...</p>
					<FormCrearSala enviarSolicitud={crearSala} />
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
					<p> Cargando </p>
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Sala
