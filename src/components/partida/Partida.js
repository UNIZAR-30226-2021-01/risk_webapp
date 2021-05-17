import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useParams } from 'react-router-dom'
import Mapa from 'assets/mapas/RiskMapa'
import partidaEstado, {
	JUGADAS,
	ACCIONES,
	MAPEO_TIPO_ACCIONES,
	ESTADOS,
	obtenerOrigen,
	obtenerDestino,
	refuerzosRestantes,
	obtenerTropas,
	tocaNumeroTropas,
} from './partidaEstados'
import { MDBContainer, MDBBtn, MDBCol, MDBRow } from 'mdbreact'
import { MemorizedSVGMap } from './SVGMap'
import './Partida.css'
import ListaJugadores from './ListaJugadores'
import FasesPartida from './FasesPartida'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales, obtenerIdUsuario } from 'utils/usuarioVO'
import constants from 'utils/constants'
import { ModalReconectando } from './ModalReconectando'
import { ModalFormNumeroTropas } from './ModalFormNumeroTropas'
import { Cargando } from './Cargando'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { ModalFinPartida } from './ModalFinPartida'
import { obtenerCentro, destinosMovimientos } from 'utils/mapa'

import { ping } from 'utils/SalaApi'
import { Temporizador } from './TemporizadorPartida'
import './Temporizador.css'
import PanelDados from './PanelDados'
import { IndicacionTurno } from './IndicacionTurno'

Mapa.locations = Mapa.locations.map((location) => {
	return {
		...location,
		coords: obtenerCentro(location),
		clase: '',
	}
})

/**
 * Implementa una partida de Risk, muestra los jugadores que están en ella
 * y el turno del actual, el estado dentro del turno actual, si se
 * está reforzando, atacando o moviendo.
 * Respecto a la información mostrada de la última jugada, si es un ataque
 * se mostrarán los resultados de las tiradas de los dados y los
 * territorios afectados.
 * En el mapa se mostrará la información de quién es cada territorio,
 * mediante colores en cada territorio, y el número de tropas en cada uno
 * de estos. Los territorios afectados por la última jugada tienen su color
 * alterado y aquellos por la jugada actual también pero de otra manera.
 */
export const Partida = () => {
	const Auth = useContext(AuthApi)

	const { id } = useParams()
	const [estado, dispatch] = partidaEstado()
	const [reconectando, setReconectando] = useState(false)
	const ws = useRef(undefined)

	const [mapaUnido, setMapaUnido] = useState(Mapa)

	const unirMapas = () => {
		let origenAntiguo = -1
		let destinoAntiguo = -1
		let dadosOrigen = [-1]
		let dadosDestino = [-1]

		let origen = -1
		let destinos = []

		if (estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN) {
			origen = obtenerOrigen(estado)
			// Quitar los que te pertenecen
			Mapa.locations[origen].conexiones.forEach((conexion) => {
				if (
					estado.territorios[origen].jugador !==
					estado.territorios[conexion].jugador
				) {
					destinos.push(conexion)
				}
			})
		} else if (
			estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN
		) {
			origen = obtenerOrigen(estado)
			// Poner la función de explorados
			destinos = destinosMovimientos(origen, estado.territorios, Mapa.locations)
		} else if (
			estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
		) {
			console.log('e')
			destinos = [obtenerDestino(estado)]
		} else if (
			estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO ||
			estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
		) {
			origen = obtenerOrigen(estado)
			destinos = [obtenerDestino(estado)]
		} else if (estado.estadoInterno !== ESTADOS.CARGANDO) {
			if ('ultimaJugada' in estado) {
				let jugadaUltima = estado.ultimaJugada

				if (estado.ultimaJugada.jugada === JUGADAS.REFUERZO) {
					origenAntiguo = jugadaUltima.territorio.id
				} else {
					if (jugadaUltima.jugada === JUGADAS.ATAQUE) {
						dadosOrigen = jugadaUltima.dadosOrigen
						dadosDestino = jugadaUltima.dadosDestino
					}
					origenAntiguo = jugadaUltima.territorioOrigen.id
					destinoAntiguo = jugadaUltima.territorioDestino.id
				}
			}
		}

		let locations = Mapa.locations.map((location, index) => {
			if (estado.estadoInterno !== ESTADOS.CARGANDO) {
				let datosJugador = estado.jugadores[estado.territorios[index].jugador]

				let intId = parseInt(location.id)
				let clase = ''

				if (intId === origen) {
					clase = 'origen'
				} else if (destinos.includes(intId)) {
					clase = 'destino'
				} else if (intId === origenAntiguo) {
					clase = 'origen_antiguo'
				} else if (intId === destinoAntiguo) {
					clase = 'destino_antiguo'
				}
				return {
					...location,
					jugador: estado.territorios[index].jugador,
					aspecto: datosJugador.aspecto,
					tropas: estado.territorios[index].tropas,
					clase: clase,
				}
			} else {
				//Poder debug
				return location
			}
		})

		locations = locations.map((location) => {
			if (estado.estadoInterno !== ESTADOS.CARGANDO) {
				let centrosAdyacentes = []
				location.conexiones.forEach((adyacente) => {
					if (location.id === '40' && adyacente === 19) {
						centrosAdyacentes.push({ x: 0, y: location.coords.y })
					} else if (location.id === '19' && adyacente === 40) {
						centrosAdyacentes.push({ x: 1024, y: location.coords.y })
					} else if (parseInt(location.id) < adyacente) {
						centrosAdyacentes.push(locations[adyacente].coords)
					}
				})
				return {
					...location,
					centrosAdyacentes: centrosAdyacentes,
				}
			} else {
				return location
			}
		})

		//let totalX = window.innerWidth
		//let totalY = window.innerHeight

		let mapa = {
			label: Mapa.label,
			viewBox: Mapa.viewBox,
			origenAntiguo: origenAntiguo,
			destinoAntiguo: destinoAntiguo,
			origen: origen,
			listaDestino: destinos,
			locations: locations,
			dadosOrigen: dadosOrigen,
			dadosDestino: dadosDestino,
		}
		setMapaUnido(mapa)
	}

	useEffect(() => {
		connect()
		let intervalPing = setInterval(() => {
			ping(ws.current)
		}, constants.TIEMPO_PING)
		return () => {
			console.log('Desmontando ws')
			if (ws.current && ws.current.readyState !== WebSocket.CLOSED) {
				ws.current.close()
			}
			clearInterval(intervalPing)
		}
	}, [])

	const sendData = (data) => {
		ws.current.send(JSON.stringify(data))
	}

	useEffect(() => {
		console.log(estado)
		const faseMsg = { tipo: 'Fase' }
		unirMapas()
		// Poner código de envío de mensajes
		switch (estado.estadoInterno) {
			case ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO:
				sendData({
					tipo: 'Refuerzos',
					id: obtenerDestino(estado),
					tropas: obtenerTropas(estado),
				})
				break
			case ESTADOS.ESPERANDO_CONFIRMACION_ATAQUE:
				sendData({
					tipo: 'Ataque',
					origen: obtenerOrigen(estado),
					destino: obtenerDestino(estado),
					tropas: obtenerTropas(estado),
				})
				break
			case ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO:
				sendData({
					tipo: 'Movimiento',
					origen: obtenerOrigen(estado),
					destino: obtenerDestino(estado),
					tropas: obtenerTropas(estado),
				})
				break
			case ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO:
				sendData(faseMsg)
				break
			case ESTADOS.CAMBIO_DE_FASE_A_ATAQUE:
				sendData(faseMsg)
				break
			case ESTADOS.PASAR_TURNO:
				sendData(faseMsg)
				break
		}
	}, [estado])

	// Si se cae la conexión, el server te tira, no hay que intentar reconectar (no hecho)
	const connect = () => {
		ws.current = new WebSocket(`${constants.BASER_WS_URL}entrarPartida`)

		// Al abrirse la conexión envía los datos de la partida
		ws.current.onopen = () => {
			console.log(ws.current.readyState, 'Conectado')
			const msg = {
				...obtenerCredenciales(Auth),
				idSala: parseInt(id),
			}
			ws.current.send(JSON.stringify(msg))
			setReconectando(false)
		}

		// websocket onclose event listener
		ws.current.onclose = () => {
			console.log(`Socket cerrado.`)
			setReconectando(true)
		}

		// websocket onerror event listener
		ws.current.onerror = (err) => {
			console.error('Socket encountered error: ', err.message, 'Closing socket')
			setReconectando(true)
			ws.current.close()
		}

		// websocket onmessage event listener
		ws.current.onmessage = (e) => {
			const data = JSON.parse(e.data)
			let action = {
				tipo: MAPEO_TIPO_ACCIONES[data._tipoMensaje],
				idJugador: obtenerIdUsuario(Auth),
				data: data,
			}
			dispatch(action)
		}
	}

	const clickEnUbicacion = useCallback(
		(id) => {
			console.log(estado, 'origen')
			dispatch({
				tipo: ACCIONES.SELECCIONAR_TERRITORIO,
				data: {
					datosExtra: parseInt(id),
				},
			})
			// Destino
		},
		[estado]
	)

	const pasarFase = () => {
		dispatch({
			tipo: ACCIONES.ENVIAR_MENSAJE_CAMBIO_FASE,
		})
	}

	const seleccionarUnidades = (n) => {
		dispatch({
			tipo: ACCIONES.SELECCIONAR_UNIDADES,
			data: {
				datosExtra: n,
			},
		})
	}

	const cancelarAccion = () => {
		dispatch({
			tipo: ACCIONES.CANCELAR,
		})
	}

	function maxTropas(estado) {
		let maximoTropas
		if (
			estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS ||
			estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
		) {
			maximoTropas = refuerzosRestantes(estado)
		} else {
			maximoTropas = mapaUnido.locations[obtenerOrigen(estado)].tropas - 1
		}
		return maximoTropas
	}

	console.log(estado.estadoInterno, 'estado')

	return (
		<MDBContainer fluid>
			{estado.estadoInterno === ESTADOS.CARGANDO && (
				<ErroresServer serverErrors={estado.error} />
			)}
			<ModalReconectando
				isOpen={reconectando}
				error={estado.error ? estado.error : ''}
			/>

			{estado.estadoInterno === ESTADOS.FIN_PARTIDA && (
				<ModalFinPartida
					isOpen={estado.estadoInterno === ESTADOS.FIN_PARTIDA}
					ganador={estado.jugadores[estado.datosFin.ganador].nombre}
					riskos={estado.datosFin.riskos}
				/>
			)}

			{/* Poner bien los parámetros */}
			{estado.estadoInterno !== ESTADOS.CARGANDO && (
				<ModalFormNumeroTropas
					isOpen={tocaNumeroTropas(estado)}
					estado={estado}
					locations={mapaUnido.locations}
					max={maxTropas(estado)}
					onSubmit={(formData) => {
						seleccionarUnidades(parseInt(formData.n))
					}}
					toggle={cancelarAccion}
				/>
			)}

			{/* Para que se vea el mapa */}
			{estado.estadoInterno !== ESTADOS.CARGANDO && (
				<>
					<MDBRow>
						<ListaJugadores
							jugadores={estado.jugadores}
							jugadorTurno={estado.turnoJugador}
						/>
					</MDBRow>
					<MDBRow className="d-flex justify-content-center">
						<MDBCol
							sm="7"
							className="d-flex justify-content-center align-items-center"
						>
							<FasesPartida fase={estado.fase} />
						</MDBCol>
						<MDBCol sm="2">
							<Temporizador
								tiempoInicio={estado.ultimoTurno}
								tiempoTurno={estado.tiempoTurno}
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol
							md="2"
							className="pr-0 d-flex flex-column align-items-center justify-content-center"
						>
							{!estado.error && (
								<IndicacionTurno estado={ESTADOS.FASE_DE_ATAQUE} />
							)}
							{estado.error && <ErroresServer serverErrors={estado.error} />}
							<PanelDados dados_origen={[]} dados_destino={[]} />
						</MDBCol>
						<MDBCol
							md="9"
							className="d-flex justify-content-center align-items-center"
						>
							<div className="mapa">
								<MemorizedSVGMap
									map={mapaUnido}
									onLocationClick={clickEnUbicacion}
								/>
							</div>
						</MDBCol>
						<MDBCol
							md="1"
							className="pl-0 d-flex flex-column justify-content-center align-content-center"
						>
							<MDBBtn
								onClick={cancelarAccion}
								disabled={estado.estadoInterno === ESTADOS.turnoRival}
								className="btn-cancelar"
							>
								{' '}
								Cancelar
							</MDBBtn>

							<MDBBtn
								onClick={pasarFase}
								disabled={estado.estadoInterno === ESTADOS.turnoRival}
								className="btn-pasar"
							>
								{' '}
								Pasar fase
							</MDBBtn>
						</MDBCol>
					</MDBRow>
				</>
			)}

			{estado.estadoInterno === ESTADOS.CARGANDO && <Cargando />}
		</MDBContainer>
	)
}

export default Partida
