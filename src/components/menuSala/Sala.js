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
import { socketAbierto, crearSala, aceptarSala, ping } from 'utils/SalaApi'
import constants from 'utils/constants'
import './Sala.css'

const estadosInternos = {
	CreandoFormulario: 'Creando formulario',
	EsperandoRespuestaFormulario: 'Esperando respuesta creación formulario',
	EsperandoInicio: 'Esperando inicio de partida',
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Lógica y vista de una sala, gestiona la creación de la sala y
 * la vista de esta hasta que comienza la partida.
 * Contiene un estado que indica si se está creando o si se está dentro
 * de esta.
 */
export const Sala = () => {
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

	// Websocket de la conexión, en current va
	const ws = useRef(undefined)
	const url = useRef(undefined)
	const enviado = useRef(false)

	/**
	 * 1: Creando sala
	 * 2: Sala normal
	 * 3: Cargando (probablemente no necesario, solo para mientras el ws.current está roto)
	 */
	const [estadoPag, setEstadoPag] = useState('3')
	const [modal, setModal] = useState(false)

	// Indica si se es el host o no
	const [soyHost, setSoyHost] = useState(false)

	const [serverErrors, setServerErrors] = useState('')

	// Jugadores ya conectados
	const [salaInfo, setSalaInfo] = useState({
		tiempoTurno: 0,
		nombrePartida: '',
		idPartida: 0,
		jugadores: [],
	})

	const [amigos, setAmigos] = useState([])

	useEffect(() => {
		let interval
		if (id === 'undefined') {
			url.current = 'crearSala'
			interval = setInterval(async () => {
				fetchAmigos()
			}, constants.REFRESH_TIME)
			fetchAmigos()
			setSoyHost(true)
			setEstadoPag('1')
			estadoInterno.current = estadosInternos.CreandoFormulario
			//setEstadoInterno(estadosInternos.CreandoFormulario)
		} else {
			url.current = 'aceptarSala'
			setSoyHost(false)
			setEstadoPag('2')
			estadoInterno.current = estadosInternos.EsperandoInicio
			//setEstadoInterno(estadosInternos.EsperandoInicio)
			connect()
		}

		console.log(url.current)
		console.log('id: ', id)

		let intervalPing = setInterval(() => {
			if (enviado.current) {
				ping(ws.current)
			}
		}, constants.TIEMPO_PING)

		return () => {
			console.log(ws.current, 'Desmontando ws')
			if (url.current === 'crearSala') {
				clearInterval(interval)
			}
			clearInterval(intervalPing)
			if (ws.current && ws.current.readyState !== WebSocket.CLOSED) {
				ws.current.close()
			}
		}
	}, [])

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
	}

	// Si se cae la conexión, el server te tira, por lo que no hay que intentar
	// reconectar
	const connect = () => {
		ws.current = new WebSocket(`${constants.BASER_WS_URL}${url.current}`)

		// websocket onopen event listener
		ws.current.onopen = () => {
			console.log(ws.current.readyState, 'Conectado')
			setModal(false)
			if (id !== 'undefined') {
				let idInt = parseInt(id)
				aceptarSalaLocal(idInt)
			}
		}

		// websocket onclose event listener
		ws.current.onclose = () => {
			setModal(true)
			console.log(`Socket cerrado.`)
		}

		// websocket onerror event listener
		ws.current.onerror = (err) => {
			console.error('Socket encountered error: ', err.message, 'Closing socket')
			ws.current.close()
		}

		// websocket onmessage event listener
		ws.current.onmessage = (e) => {
			const data = JSON.parse(e.data)
			setServerErrors('')
			// Caso error
			if (data._tipoMensaje === 'e') {
				setServerErrors(data.err)
				console.log(data, 'err')
				// Caso mensaje de datos
				if (
					estadoInterno.current === estadosInternos.EsperandoRespustaFormulario
				) {
					estadosInternos.current === estadosInternos.CreandoFormulario
					setEstadoPag('1')
				}
			} else if (data._tipoMensaje === 'd') {
				if (
					estadoInterno.current === estadosInternos.EsperandoRespuestaFormulario
				) {
					estadoInterno.current = estadosInternos.EsperandoInicio
					//setEstadoInterno(estadosInternos.EsperandoInicio)
					setEstadoPag('2')
				}
				delete data._tipoMensaje
				setSalaInfo(data)
				// Caso mensaje de partida
			} else if (data._tipoMensaje === 'p') {
				// Comienza partida, comprobar estado y redirigir
				if (estadoInterno.current === estadosInternos.EsperandoInicio) {
					entrarPartida(data.idPartida)
				} else {
					throw 'No se debe dar este caso.'
				}
			}
		}
	}

	const comenzarPartida = () => {
		// Si es necesario, comprobar número de jugadores
		estadoInterno.current = estadosInternos.EsperandoInicio
		ws.current.send(JSON.stringify({ tipo: 'Iniciar' }))
	}

	const entrarPartida = (id) => {
		// Si es necesario, comprobar número de jugadores
		let dirPartida = `/partida/${id}`
		history.push(dirPartida)
	}

	const crearSalaLocal = async (formData) => {
		connect()
		let i = 0
		while (!socketAbierto(ws.current) && i < 100) {
			await sleep(100)
			i++
		}
		if (i >= 100) {
			console.log('Reintentos excedidos')
			setModal(true)
		} else {
			setSalaInfo({
				...salaInfo,
				tiempoTurno: formData.tiempoTurno,
				nombreSala: formData.nombreSala,
			})

			estadoInterno.current = estadosInternos.EsperandoRespuestaFormulario

			console.log(estadoInterno, 'plz')
			crearSala(Auth, ws.current, formData)
			enviado.current = true
		}
	}

	const aceptarSalaLocal = (id) => {
		if (socketAbierto(ws.current)) {
			enviado.current = true
			aceptarSala(Auth, ws.current, id)
		} else {
			console.log(ws.current.readyState, 'Estado del socket')
		}
	}

	// Poner cada Tab en un componente distinto?
	return (
		<MDBContainer>
			{estadoPag === '2' && <ErroresServer serverErrors={serverErrors} />}
			{/*  Mover a otro componente
			El modal debería ser mientras se espera un mensaje, no por si se cae.
			Si se cae, se debería redirigir al menú principal tras mostrar un modal de
			'conexión caída' */}
			<MDBModal
				isOpen={modal}
				toggle={() => {
					setModal(false)
				}}
			>
				<MDBModalBody className="d-flex justify-content-between">
					<ErroresServer serverErrors={serverErrors} />
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
					<FormCrearSala enviarSolicitud={crearSalaLocal} />
				</MDBTabPane>
				{/* Mover todo esto a otro componente si es necesario */}
				<MDBTabPane tabId="2">
					<SalaEncabezado datos={salaInfo} />
					<MDBRow>
						<MDBCol className="p-1 mt-1">
							<h2 className="text-center">Jugadores</h2>
							<ListaJugadoresPartida usuarios={salaInfo.jugadores} />
						</MDBCol>
						{soyHost && (
							<MDBCol className="p-1 mt-1">
								<h2 className="text-center">Amigos</h2>
								<ListaAmigos
									usuarios={amigos}
									elemento={<InvitarAmigo ws={ws.current} />}
								/>
							</MDBCol>
						)}
					</MDBRow>
					{/* Comenzar partida, hacer el onClick*/}
					{soyHost && (
						<MDBRow className="d-flex justify-content-center">
							<MDBBtn onClick={comenzarPartida} className="mt-1">
								Comenzar partida
							</MDBBtn>
						</MDBRow>
					)}
				</MDBTabPane>
				<MDBTabPane tabId="3">
					<p> Cargando </p>
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Sala
