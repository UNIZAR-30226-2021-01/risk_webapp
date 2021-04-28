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
	//FASES,
	ESTADOS,
	obtenerOrigen,
	obtenerDestino,
	refuerzosRestantes,
	obtenerTropas,
	tocaNumeroTropas,
	//tocaOrigen,
	//tocaDestino,
} from './partidaEstados'
import { MDBContainer, MDBBtn } from 'mdbreact'
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

import { ping } from 'utils/SalaApi'

/**
 * Implementa una partida
 * @todo Intentar reconectarse
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

		let origen = -1
		let destinos = []

		if (estado.estadoInterno !== ESTADOS.CARGANDO) {
			if ('ultimaJugada' in estado) {
				let jugadaUltima = estado.ultimaJugada
				if (estado.ultimaJugada.jugada === JUGADAS.REFUERZO) {
					origenAntiguo = jugadaUltima.territorio.id
				} else {
					origenAntiguo = jugadaUltima.territorioOrigen.id
					destinoAntiguo = jugadaUltima.territorioDestino.id
				}
			}

			if (estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN) {
				origen = obtenerOrigen(estado)
				destinos = Mapa.locations[origen].conexiones
			}
		}

		setMapaUnido({
			label: Mapa.label,
			viewBox: Mapa.viewBox,
			origenAntiguo: origenAntiguo,
			destinoAntiguo: destinoAntiguo,
			origen: origen,
			listaDestino: destinos,
			locations: Mapa.locations.map((location, index) => {
				if (estado.estadoInterno !== ESTADOS.CARGANDO) {
					let datosJugador = estado.jugadores[estado.territorios[index].jugador]
					return {
						...location,
						jugador: estado.territorios[index].jugador,
						aspecto: datosJugador.aspecto,
						tropas: estado.territorios[index].tropas,
					}
				} else {
					//Poder debug
					return location
				}
			}),
		})
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
				tipo: ACCIONES.SELECCIONAR_TROPAS,
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

	function maxTropas(estado) {
		let maximoTropas
		if (
			estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS ||
			estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
		) {
			maximoTropas = refuerzosRestantes(estado)
		} else {
			maximoTropas = mapaUnido.locations[obtenerOrigen(estado)].tropas
		}
		return maximoTropas
	}

	return (
		<MDBContainer fluid>
			<ErroresServer serverErrors={estado.error} />

			<h1> Estado: {estado.estadoInterno} </h1>
			<ModalReconectando isOpen={reconectando} />

			{/* Poner bien los parámetros */}
			<ModalFormNumeroTropas
				isOpen={tocaNumeroTropas(estado)}
				estado={estado.estadoInterno}
				origen={mapaUnido.locations[obtenerOrigen(estado)].name}
				destino={mapaUnido.locations[obtenerDestino(estado)].name}
				max={maxTropas(estado)}
				onSubmit={(formData) => {
					seleccionarUnidades(parseInt(formData.n))
				}}
				toggle={() => {
					dispatch({
						tipo: ACCIONES.CANCELAR,
					})
				}}
			/>
			{/* Para que se vea el mapa */}
			{estado.estadoInterno !== ESTADOS.CARGANDO && (
				<>
					<ListaJugadores
						jugadores={estado.jugadores}
						jugadorTurno={estado.turnoJugador}
					/>
					<div className="d-flex flex-row align-items-center justify-content-center">
						<div className="mapa">
							<MemorizedSVGMap
								map={mapaUnido}
								onLocationClick={clickEnUbicacion}
							/>
						</div>
						{estado.estadoInterno != ESTADOS.TURNO_RIVAL && (
							<MDBBtn onClick={pasarFase} className="btn-pasar">
								{' '}
								Pasar fase
							</MDBBtn>
						)}
					</div>
					<FasesPartida />
				</>
			)}

			{estado.estadoInterno === ESTADOS.CARGANDO && <Cargando />}
		</MDBContainer>
	)
}

export default Partida
