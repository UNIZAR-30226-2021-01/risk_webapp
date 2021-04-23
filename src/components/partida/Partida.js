import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Mapa from 'assets/mapas/RiskMapa'
import partidaEstado, {
	JUGADAS,
	ACCIONES,
	MAPEO_TIPO_ACCIONES,
	FASES,
	ESTADOS,
	obtenerOrigen,
	obtenerDestino,
	obtenerTropas,
} from './partidaEstados'
import { MDBContainer } from 'mdbreact'
import { SVGMap } from './SVGMap'
import loading from 'assets/UI/loading.png'
import './Partida.css'
import ListaJugadores from './ListaJugadores'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales, obtenerIdUsuario } from 'utils/usuarioVO'
import constants from 'utils/constants'
import { ModalReconectando } from './ModalReconectando'
import { ModalFormNumeroTropas } from './ModalFormNumeroTropas'
import { Cargando } from './Cargando'

function encontrarDatosJugador(lista, id) {
	for (let i = 0; i < lista.length; i++) {
		if (lista[i].id === id) {
			return {
				...lista[i],
				colorIndice: i,
			}
		}
	}
	throw `No existe el jugador ${id}`
}

/**
 * Implementa una partida
 * @todo todo falta
 */
export const Partida = () => {
	const Auth = useContext(AuthApi)

	const { id } = useParams()
	const [estado, dispatch] = partidaEstado()
	const [reconectando, setReconectando] = useState(false)
	const ws = useRef(undefined)

	const [mapaUnido, setMapaUnido] = useState(Mapa)

	const unirMapas = () => {
		setMapaUnido({
			label: Mapa.label,
			viewBox: Mapa.viewBox,
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
		console.log('Actualizado mapa')
	}
	console.log(estado, 'estado')
	useEffect(() => {
		connect()
		return () => {
			console.log(ws.current, 'Desmontando ws')
			if (ws.current && ws.current.readyState !== WebSocket.CLOSED) {
				ws.current.close()
			}
		}
	}, [])

	const sendData = (data) => {
		ws.current.send(JSON.stringify(data))
	}

	useEffect(() => {
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
					tipo: 'Refuerzos',
					origen: obtenerOrigen(estado),
					destino: obtenerDestino(estado),
					tropas: obtenerTropas(estado),
				})
				break
			case ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO:
				sendData({
					tipo: 'Refuerzos',
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

	// Si se cae la conexión, el server te tira, hay que intentar reconectar
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
			console.log(msg, 'Enviado mensaje de conexión')
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
			console.log(data, 'Datos recibidos')
			let action = {
				tipo: MAPEO_TIPO_ACCIONES[data._tipoMensaje],
				idJugador: obtenerIdUsuario(Auth),
				data: data,
			}
			dispatch(action)
		}
	}

	const clickEnUbicacion = (event) => {
		console.log(event)
	}

	return (
		<MDBContainer fluid>
			<ModalReconectando isOpen={reconectando} />
			{/* Poner bien los parámetros */}
			<ModalFormNumeroTropas
				isOpen={false}
				origen={'sudafrica'}
				destino={'nueva guinea'}
				max={2}
				onSubmit={(formData) => {}}
			/>
			{/* Para que se vea el mapa */}
			{estado.estadoInterno !== ESTADOS.CARGANDO && (
				<div className="d-flex pb-4">
					<ListaJugadores />
					<div className="mapa">
						<SVGMap map={mapaUnido} onLocationClick={clickEnUbicacion} />
					</div>
				</div>
			)}

			{estado.estadoInterno === ESTADOS.CARGANDO && <Cargando />}
		</MDBContainer>
	)
}

export default Partida
