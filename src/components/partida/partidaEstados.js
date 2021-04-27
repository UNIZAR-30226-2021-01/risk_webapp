import { useReducer } from 'react'

export const JUGADAS = {
	REFUERZO: 'REFUERZO',
	ATAQUE: 'ATAQUE',
	MOVIMIENTO: 'MOVIMIENTO',
}

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

	ENVIAR_MENSAJE_REFUERZO: 'ENVIAR_MENSAJE_REFUERZO',
	CONFIRMACION_REFUERZO: 'CONFIRMACION_REFUERZO',

	ENVIAR_MENSAJE_ATAQUE: 'ENVIAR_MENSAJE_ATAQUE',
	CONFIRMACION_ATAQUE: 'CONFIRMACION_ATAQUE',

	ENVIAR_MENSAJE_MOVIMIENTO: 'ENVIAR_MENSAJE_MOVIMIENTO',
	CONFIRMACION_MOVIMIENTO: 'CONFIRMACION_MOVIMIENTO',
}

export const MAPEO_TIPO_ACCIONES = {
	p: ACCIONES.DATOS_COMPLETOS_PARTIDA,
	f: ACCIONES.CONFIRMACION_CAMBIO_FASE,
	r: ACCIONES.CONFIRMACION_REFUERZO,
	a: ACCIONES.CONFIRMACION_ATAQUE,
	m: ACCIONES.CONFIRMACION_MOVIMIENTO,
	e: ACCIONES.ERROR,
}

export const FASES = {
	FASE_REFUERZOS: 1,
	FASE_ATAQUE: 2,
	FASE_MOVIMIENTO: 3,
}

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
}

const FASE_ESTADO = [
	ESTADOS.CARGANDO,
	ESTADOS.FASE_DE_REFUERZOS,
	ESTADOS.FASE_DE_ATAQUE,
	ESTADOS.FASE_DE_MOVIMIENTO,
]

export function obtenerOrigen(estado) {
	return estado.datosJugadaActual.origen
}

export function obtenerDestino(estado) {
	return estado.datosJugadaActual.destino
}

export function obtenerTropas(estado) {
	return estado.datosJugadaActual.tropas
}

export function tocaOrigen(estado) {
	return (
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE ||
		estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO
	)
}

export function tocaDestino(estado) {
	return (
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN ||
		estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN ||
		estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS
	)
}

export function tocaNumeroTropas(estado) {
	return (
		estado.estadoInterno === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO ||
		estado.estadoInterno === ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO ||
		estado.estadoInterno === ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
	)
}

function estadoPrevio(estado) {
	switch (estado) {
		case ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
			return ESTADOS.FASE_DE_REFUERZOS
		case ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO:
			return ESTADOS.FASE_DE_REFUERZOS

		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
			return ESTADOS.FASE_DE_ATAQUE
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
			return ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN
		case ESTADOS.ESPERANDO_CONFIRMACION_ATAQUE:
			return ESTADOS.FASE_DE_ATAQUE

		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
			return ESTADOS.FASE_DE_MOVIMIENTO
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
			return ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN
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

//Considerar lanzar excepciones para debuggear
function estadoSiguienteSeleccionarOrigen(estado) {
	console.log('!')
	switch (estado) {
		case ESTADOS.FASE_DE_MOVIMIENTO:
			return ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN
		case ESTADOS.FASE_DE_ATAQUE:
			return ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN
		default:
			console.log(estado, 'F')
			throw 'No tiene siguiente'
	}
}

function estadoSiguienteSeleccionarDestino(estado) {
	console.log('?')
	switch (estado) {
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

function estadoSigCambioFase(estado) {
	switch (estado) {
		case ESTADOS.CAMBIO_DE_FASE_A_ATAQUE:
			return ESTADOS.FASE_DE_ATAQUE
		case ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO:
			return ESTADOS.FASE_DE_MOVIMIENTO
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
	state.jugadores.forEach((jugador) => {
		if (jugador.id === action.idJugador)
			jugador.refuerzos = jugador.refuezos - state.datosJugadaActual.tropas
	})
	console.log(state.jugadores)
}

export function refuerzosRestantes(state) {
	return state.jugadores[state.turnoJugador].refuerzos
}

function casosLocales(state, action) {
	switch (action.tipo) {
		case ACCIONES.CONFIRMACION_REFUERZO: {
			let stateNuevo = { ...state }
			usarRefuerzos(stateNuevo, action)
			let idTerritorio = action.data.id
			stateNuevo.ultimaJugada = {
				jugada: JUGADAS.REFUERZO,
				...action.data,
			}
			stateNuevo.territorios[idTerritorio] = action.data.territorio.tropas
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
		case ACCIONES.SELECCIONAR_ORIGEN: {
			return {
				...state,
				datosJugadaActual: {
					...state.datosJugadaActual,
					origen: action.data.datosExtra,
				},
				estadoInterno: estadoSiguienteSeleccionarOrigen(state.estadoInterno),
			}
		}
		case ACCIONES.SELECCIONAR_DESTINO: {
			return {
				...state,
				datosJugadaActual: {
					...state.datosJugadaActual,
					destino: action.data.datosExtra,
				},
				estadoInterno: estadoSiguienteSeleccionarDestino(state.estadoInterno),
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
		throw 'Recibido algo que no es de datos completos mientras aún se está esperando'
	} else {
		return casosLocales(state, action)
	}
}

export default function partidaEstado() {
	return useReducer(maquinaEstados, {
		estadoInterno: ESTADOS.CARGANDO,
		datosJugadaActual: { origen: 0, destino: 1, tropas: 1 },
	})
}
