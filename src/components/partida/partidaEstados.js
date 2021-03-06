import { useReducer } from 'react'
import { destinosMovimientos } from 'utils/mapa'
/**
 * Implementa la la parte lógica interna de una partida, la máquina
 * de estados de esta.
 * @module partida
 */

/**
 * Jugadas posibles a realizar.
 */
export const JUGADAS = {
	REFUERZO: 'REFUERZO',
	ATAQUE: 'ATAQUE',
	MOVIMIENTO: 'MOVIMIENTO',
}

/**
 * Acciones posibles a realizar.
 */
export const ACCIONES = {
	ERROR: 'ERROR',
	ERROR_GLOBAL: 'ERROR_GLOBAL',
	CANCELAR: 'CANCELAR',

	DATOS_COMPLETOS_PARTIDA: 'DATOS_COMPLETOS_PARTIDA',
	TOCA_MI_TURNO: 'MI_TURNO',

	ENVIAR_MENSAJE_CAMBIO_FASE: 'MENSAJE_CAMBIO_FASE',
	CONFIRMACION_CAMBIO_FASE: 'CONFIRMACION_CAMBIO_FASE',

	SELECCIONAR_ORIGEN: 'SELECCIONAR_ORIGEN',
	SELECCIONAR_DESTINO: 'SELECCIONAR_DESTINO',
	SELECCIONAR_UNIDADES: 'SELECCIONAR_UNIDADES',

	SELECCIONAR_TERRITORIO: 'SELECCIONAR_TERRITORIO',

	ENVIAR_MENSAJE_REFUERZO: 'ENVIAR_MENSAJE_REFUERZO',
	CONFIRMACION_REFUERZO: 'CONFIRMACION_REFUERZO',

	ENVIAR_MENSAJE_ATAQUE: 'ENVIAR_MENSAJE_ATAQUE',
	CONFIRMACION_ATAQUE: 'CONFIRMACION_ATAQUE',

	ENVIAR_MENSAJE_MOVIMIENTO: 'ENVIAR_MENSAJE_MOVIMIENTO',
	CONFIRMACION_MOVIMIENTO: 'CONFIRMACION_MOVIMIENTO',

	FIN_PARTIDA: 'FIN_PARTIDA',
}

/**
 * Tabla de mapeo de las acciones obtenidas por el servidor a las de
 * gestión por este módulo para desacoplar.
 */
export const MAPEO_TIPO_ACCIONES = {
	p: ACCIONES.DATOS_COMPLETOS_PARTIDA,
	f: ACCIONES.CONFIRMACION_CAMBIO_FASE,
	r: ACCIONES.CONFIRMACION_REFUERZO,
	a: ACCIONES.CONFIRMACION_ATAQUE,
	m: ACCIONES.CONFIRMACION_MOVIMIENTO,
	e: ACCIONES.ERROR,
	t: ACCIONES.FIN_PARTIDA,
}

/**
 * Fases de un turno.
 */
export const FASES = {
	FASE_REFUERZOS: 1,
	FASE_ATAQUE: 2,
	FASE_MOVIMIENTO: 3,
}

/**
 * Estados de la partida.
 */
export const ESTADOS = {
	CARGANDO: 'CARGANDO',
	TURNO_RIVAL: 'TURNO_RIVAL',

	FASE_DE_REFUERZOS: 'FASE DE REFUERZOS',
	FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
		'FASE DE REFUERZOS SELECCIONADO DESTINO',
	ESPERANDO_CONFIRMACION_REFUERZO: 'ESPERANDO CONFIRMACION REFUERZO',
	CAMBIO_DE_FASE_A_ATAQUE: 'CAMBIO DE FASE A ATAQUE',

	FASE_DE_ATAQUE: 'FASE DE ATAQUE',
	FASE_DE_ATAQUE_SELECCIONADO_ORIGEN: 'FASE DE ATAQUE SELECCIONADO ORIGEN',
	FASE_DE_ATAQUE_SELECCIONADO_DESTINO: 'FASE DE ATAQUE SELECCIONADO DESTINO',
	ESPERANDO_CONFIRMACION_ATAQUE: 'ESPERANDO CONFIRMACION ATAQUE',
	CAMBIO_DE_FASE_A_MOVIMIENTO: 'CAMBIO DE FASE A MOVIMIENTO',

	FASE_DE_MOVIMIENTO: 'FASE DE MOVIMIENTO',
	FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
		'FASE DE MOVIMIENTO SELECCIONADO ORIGEN',
	FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
		'FASE DE MOVIMIENTO SELECCIONADO DESTINO',
	ESPERANDO_CONFIRMACION_MOVIMIENTO: 'ESPERANDO CONFIRMACION MOVIMIENTO',

	PASAR_TURNO: 'PASAR TURNO',

	FIN_PARTIDA: 'FIN PARTIDA',
}

/**
 * Fase en la que se está dentro del estado.
 */
const FASE_ESTADO = [
	ESTADOS.CARGANDO,
	ESTADOS.FASE_DE_REFUERZOS,
	ESTADOS.FASE_DE_ATAQUE,
	ESTADOS.FASE_DE_MOVIMIENTO,
]

/**
 * Wrapper que devuelve el origen de la jugada actual.
 * @param {estado} estado Estado de la partida
 * @returns Origen de la jugada actual
 */
export function obtenerOrigen(estado) {
	return estado.datosJugadaActual.origen
}

/**
 * Wrapper que devuelve el destino de la jugada actual.
 * @param {estado} estado Estado de la partida
 * @returns Destino de la jugada actual
 */
export function obtenerDestino(estado) {
	return estado.datosJugadaActual.destino
}

/**
 * Wrapper que devuelve el origen de la jugada actual.
 * @param {estado} estado Estado de la partida
 * @returns Origen de la jugada actual
 */
export function obtenerTropas(estado) {
	return estado.datosJugadaActual.tropas
}

/**
 * Devuelve si toca seleccionar origen.
 * @param {estado} estado Estado de la partida
 * @returns True si y solo si toca seleccionar origen
 */
export function tocaOrigen(estado) {
	return (
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE ||
		estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO
	)
}

/**
 * Devuelve si toca seleccionar destino.
 * @param {estado} estado Estado de la partida
 * @returns True si y solo si toca seleccionar destino
 */
export function tocaDestino(estado) {
	return (
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN ||
		estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN ||
		estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS
	)
}

function obtenerIdUsuarioEnPartida(estado, idJugador) {
	let idMio = -1
	for (let i = 0; i < estado.territorios.length; i++) {
		if (estado.jugadores[estado.territorios[i].jugador].id === idJugador) {
			idMio = estado.territorios[i].jugador
		}
	}
	return idMio
}

/**
 * @param {estado} estado Estado de la partida
 * @param {action} action Acción asociada
 * Devuelve si es correcto el territorio marcado como origen
 */
export function correctoOrigen(estado, action) {
	return (
		estado.territorios[action.data.datosExtra].jugador ===
		obtenerIdUsuarioEnPartida(estado, action.idJugador)
	)
}

/**
 * @param {estado} estado Estado de la partida
 * @param {action} action Acción asociada
 * Devuelve si es correcto el territorio marcado como destino
 */
export function correctoDestino(estado, action) {
	console.log(action.idJugador, 'idJugador')
	let idMio = obtenerIdUsuarioEnPartida(estado, action.idJugador)
	console.log(idMio, 'idmio')
	let idTerritorio = action.data.datosExtra
	if (estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN) {
		let locations = action.data.locations
		let destinosValidos = destinosMovimientos(
			obtenerOrigen(estado),
			estado.territorios,
			locations
		)
		return destinosValidos.includes(idTerritorio)
	} else if (
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN
	) {
		let conexiones = action.data.locations[obtenerOrigen(estado)].conexiones
		console.log(conexiones, 'conexiones')
		console.log(idTerritorio)
		return (
			conexiones.includes(idTerritorio) &&
			estado.territorios[idTerritorio].jugador !== idMio
		)
	} else {
		console.log(estado.territorios[action.data.datosExtra].jugador, 'jugador')
		return estado.territorios[action.data.datosExtra].jugador === idMio
	}
}

/**
 * Devuelve si toca seleccionar el número de tropas.
 * @param {estado} estado Estado de la partida
 * @returns True si y solo si toca seleccionar el número de tropas
 */
export function tocaNumeroTropas(estado) {
	return (
		estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO ||
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO ||
		estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
	)
}

/**
 * Devuelve el estado previo al actual.
 * @param {estado} estado Estado de la partida
 * @returns Estado correspondiente
 */
function estadoPrevio(estado) {
	switch (estado) {
		case ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
			return ESTADOS.FASE_DE_REFUERZOS
		case ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO:
			return ESTADOS.FASE_DE_REFUERZOS

		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
			return ESTADOS.FASE_DE_ATAQUE
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
			return ESTADOS.FASE_DE_ATAQUE
		case ESTADOS.ESPERANDO_CONFIRMACION_ATAQUE:
			return ESTADOS.FASE_DE_ATAQUE

		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
			return ESTADOS.FASE_DE_MOVIMIENTO
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
			return ESTADOS.FASE_DE_MOVIMIENTO
		case ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO:
			return ESTADOS.FASE_DE_MOVIMIENTO

		case ESTADOS.CAMBIO_DE_FASE_A_ATAQUE:
			return ESTADOS.FASE_DE_REFUERZOS
		case ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO:
			return ESTADOS.FASE_DE_ATAQUE
		case ESTADOS.PASAR_TURNO:
			return ESTADOS.FASE_DE_MOVIMIENTO
		default:
			return estado
	}
}

/**
 * Devuelve el estado siguiente al actual tras seleccionar localización.
 * @param {estado} estado Estado de la partida
 * @returns Estado correspondiente
 */
function estadoSiguienteSeleccionarLocalizacion(estado) {
	console.log('!')
	switch (estado) {
		case ESTADOS.FASE_DE_MOVIMIENTO:
			return ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN
		case ESTADOS.FASE_DE_ATAQUE:
			return ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN
		case ESTADOS.FASE_DE_REFUERZOS:
			return ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
			return ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
			return ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
		default:
			console.log(estado, 'F')
			throw 'No tiene siguiente'
	}
}

/**
 * Devuelve el estado siguiente a seleccionar unidades.
 * @param {estado} estado Estado de la partida
 * @returns Estado correspondiente
 */
function estadoSiguienteSeleccionarUnidades(estado) {
	switch (estado) {
		case ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
			return ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
			return ESTADOS.ESPERANDO_CONFIRMACION_ATAQUE
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
			return ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO
		default:
			return estado
	}
}

/**
 * Devuelve el estado siguiente tras comenzar un cambio de fase.
 * @param {estado} estado Estado de la partida
 * @returns Estado correspondiente
 */
function estadoACambioFase(estado) {
	switch (estado) {
		case ESTADOS.FASE_DE_REFUERZOS:
			return ESTADOS.CAMBIO_DE_FASE_A_ATAQUE
		case ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
			return ESTADOS.CAMBIO_DE_FASE_A_ATAQUE
		case ESTADOS.FASE_DE_ATAQUE:
			return ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
			return ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
			return ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO
		case ESTADOS.FASE_DE_MOVIMIENTO:
			return ESTADOS.PASAR_TURNO
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
			return ESTADOS.PASAR_TURNO
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
			return ESTADOS.PASAR_TURNO
		default:
			return estado
	}
}

/**
 * Devuelve el estado siguiente tras terminar un cambio de fase.
 * @param {estado} estado Estado de la partida
 * @returns Estado correspondiente
 */
function estadoSigCambioFase(estado) {
	switch (estado) {
		case ESTADOS.CAMBIO_DE_FASE_A_ATAQUE:
			return ESTADOS.FASE_DE_ATAQUE
		case ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO:
			return ESTADOS.FASE_DE_MOVIMIENTO
		default:
			return estado
	}
}

/*
	Contenido del estado
{
	"estadointerno": ESTADOS,
	"ultimaJugada": {
		// Lo que sea
	}
	"datosJugadaActual": {
		origen: int 
		destino: int
		tropas: int 
	}
	error: "" (solo si hay)
	"tiempoTurno": int,
	"nombreSala": string,
	"turnoActual": int,
	"turnoJugador": int,
	"fase": int,
	"ultimoTurno": ISO8601,
	"jugadores": [ { "id":int, "nombre":string, "icono":int, "aspecto":int, "sigueVivo":bool, "refuerzos":int, } ],
	"territorios": [ { "id":int, "jugador":int, "tropas":int } ],
}
*/

function usarRefuerzos(state, action) {
	state.jugadores.map((jugador) => {
		if (jugador.id === action.idJugador) {
			jugador.refuerzos = jugador.refuerzos - state.datosJugadaActual.tropas
		}
	})
	console.log(state.jugadores)
}

/**
 * Dado un estado, devuelve el estado de refuerzos restantes.
 * @param {estado} state Estado de la partida
 * @returns Número de refuerzos restantes
 */
export function refuerzosRestantes(state) {
	return state.jugadores[state.turnoJugador].refuerzos
}

/**
 * Casos locales de las distintas acciones.
 * @param {estado} state Estado de la partida
 * @param {action} action Acción realizada
 * @returns Estado actualizado
 */
function casosLocales(state, action) {
	switch (action.tipo) {
		case ACCIONES.CONFIRMACION_REFUERZO: {
			let stateNuevo = { ...state }
			usarRefuerzos(stateNuevo, action)
			let idTerritorio = action.data.territorio.id
			stateNuevo.ultimaJugada = {
				jugada: JUGADAS.REFUERZO,
				...action.data,
			}
			stateNuevo.territorios[idTerritorio].tropas =
				action.data.territorio.tropas
			if (
				stateNuevo.estadoInterno === ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO
			) {
				stateNuevo.estadoInterno = ESTADOS.FASE_DE_REFUERZOS
			}
			return stateNuevo
		}
		case ACCIONES.CONFIRMACION_ATAQUE: {
			let stateNuevo = { ...state }
			let idTerritorioOrigen = action.data.territorioOrigen.id
			let idTerritorioDestino = action.data.territorioDestino.id
			stateNuevo.ultimaJugada = {
				jugada: JUGADAS.ATAQUE,
				...action.data,
			}
			stateNuevo.territorios[idTerritorioOrigen] = action.data.territorioOrigen
			stateNuevo.territorios[idTerritorioDestino] =
				action.data.territorioDestino
			if (stateNuevo.estadoInterno === ESTADOS.ESPERANDO_CONFIRMACION_ATAQUE) {
				stateNuevo.estadoInterno = ESTADOS.FASE_DE_ATAQUE
			}
			return stateNuevo
		}
		case ACCIONES.CONFIRMACION_MOVIMIENTO: {
			let stateNuevo = { ...state }
			let idTerritorioOrigen = action.data.territorioOrigen.id
			let idTerritorioDestino = action.data.territorioDestino.id
			stateNuevo.ultimaJugada = {
				jugada: JUGADAS.MOVIMIENTO,
				...action.data,
			}
			stateNuevo.territorios[idTerritorioOrigen] = action.data.territorioOrigen
			stateNuevo.territorios[idTerritorioDestino] =
				action.data.territorioDestino
			if (
				stateNuevo.estadoInterno === ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO
			) {
				stateNuevo.estadoInterno = ESTADOS.FASE_DE_MOVIMIENTO
			}
			return stateNuevo
		}
		case ACCIONES.CANCELAR: {
			return { ...state, estadoInterno: estadoPrevio(state.estadoInterno) }
		}
		case ACCIONES.ERROR: {
			return {
				...state,
				estadoInterno: estadoPrevio(state.estadoInterno),
				error: action.data.err,
			}
		}
		case ACCIONES.SELECCIONAR_TERRITORIO: {
			if (
				(tocaOrigen(state) && correctoOrigen(state, action)) ||
				(tocaDestino(state) && correctoDestino(state, action))
			) {
				let datosActual = { ...state.datosJugadaActual }
				if (tocaOrigen(state)) {
					datosActual.origen = action.data.datosExtra
				} else {
					datosActual.destino = action.data.datosExtra
				}
				return {
					...state,
					datosJugadaActual: datosActual,
					estadoInterno: estadoSiguienteSeleccionarLocalizacion(
						state.estadoInterno
					),
				}
			} else {
				console.log('?')
				return state
			}
		}
		case ACCIONES.SELECCIONAR_UNIDADES: {
			return {
				...state,
				datosJugadaActual: {
					...state.datosJugadaActual,
					tropas: action.data.datosExtra,
				},
				estadoInterno: estadoSiguienteSeleccionarUnidades(state.estadoInterno),
			}
		}
		case ACCIONES.ENVIAR_MENSAJE_CAMBIO_FASE: {
			return {
				...state,
				estadoInterno: estadoACambioFase(state.estadoInterno),
			}
		}
		case ACCIONES.CONFIRMACION_CAMBIO_FASE: {
			return {
				...state,
				estadoInterno: estadoSigCambioFase(state.estadoInterno),
				fase: state.fase + 1,
			}
		}
		case ACCIONES.FIN_PARTIDA: {
			return {
				...state,
				estadoInterno: ESTADOS.FIN_PARTIDA,
				datosFin: action.data,
			}
		}
	}
}

/*
	Action recibida
	tipo: "",
	idJugador: int,
	datosExtra: , (id origen, id destino, ntropas...) No poner el campo, solo el número
	"data": {
		"_tipoMensaje": "p",
		"tiempoTurno": int,
		"nombreSala": string,
		"turnoActual": int,
		"turnoJugador": int,
		"fase": int,
		"ultimoTurno": ISO8601,
		"jugadores": [ { "id":int, "nombre":string, "icono":int, "aspecto":int, "sigueVivo":bool, "refuerzos":int, } ],
		"territorios": [ { "id":int, "jugador":int, "tropas":int } ],

		o

		el mensaje que mande el server
	}
*/

/**
 * Maquina de estados de la partida.
 * @param {estado} state Estado de la partida
 * @param {action} action Acción realizada
 * @returns Estado actualizado
 */
function maquinaEstados(state, action) {
	if ('data' in action && '_tipoMensaje' in action.data) {
		delete action.data._tipoMensaje
	}
	state.error = ''
	console.log(state, 'estado en transicion')
	console.log(action, 'accion en transicion')
	if (action.tipo === ACCIONES.DATOS_COMPLETOS_PARTIDA) {
		if (
			action.idJugador === action.data.jugadores[action.data.turnoJugador].id
		) {
			action.data.estadoInterno = FASE_ESTADO[action.data.fase]
		} else {
			action.data.estadoInterno = ESTADOS.TURNO_RIVAL
		}
		return {
			...state,
			...action.data,
		}
	} else if (state.estadoInterno === ESTADOS.CARGANDO) {
		return { ...state, error: action.data.err }
	} else {
		return casosLocales(state, action)
	}
}

/**
 * Hook para react que maneja el estado de la partida.
 * @returns Estado de la partida y el dispatcher
 */
export default function partidaEstado() {
	return useReducer(maquinaEstados, {
		estadoInterno: ESTADOS.CARGANDO,
		fase: 0,
		error: '',
		datosJugadaActual: { origen: 0, destino: 0, tropas: 1 },
	})
}
