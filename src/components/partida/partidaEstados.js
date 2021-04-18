import { useReducer } from 'react'
import Risk from 'assets/mapas/RiskMapa'

export const MAPEO_TIPO_ACCIONES = {
	p: ACCIONES.DATOS_COMPLETOS_PARTIDA,
	f: ACCIONES.CONFIRMAR_CAMBIO_FASE,
	r: ACCIONES.CONFIRMACION_REFUERZO,
	a: ACCIONES.CONFIRMACION_ATAQUE,
	m: ACCIONES.CONFIRMACION_MOVIMIENTO,
}

export const JUGADAS = {
	REFUERZO: 'REFUERZO',
	ATAQUE: 'ATAQUE',
	MOVIMIENTO: 'MOVIMIENTO',
}

export const ACCIONES = {
	ERROR: 'ERROR',
	ERROR_GLOBAL: 'ERROR_GLOBAL',

	DATOS_COMPLETOS_PARTIDA: 'DATOS_COMPLETOS_PARTIDA',
	TOCA_MI_TURNO: 'MI_TURNO',

	ENVIAR_MENSAJE_CAMBIO_FASE: 'MENSAJE_CAMBIO_FASE',
	CONFIRMACION_CAMBIO_FASE: 'CONFIRMACION_CAMBIO_FASE',

	ENVIAR_MENSAJE_REFUERZO: 'ENVIAR_MENSAJE_REFUERZO',
	CONFIRMACION_REFUERZO: 'CONFIRMACION_REFUERZO',

	ENVIAR_MENSAJE_ATAQUE: 'ENVIAR_MENSAJE_ATAQUE',
	CONFIRMACION_ATAQUE: 'CONFIRMACION_ATAQUE',

	ENVIAR_MENSAJE_MOVIMIENTO: 'ENVIAR_MENSAJE_MOVIMIENTO',
	CONFIRMACION_MOVIMIENTO: 'CONFIRMACION_MOVIMIENTO',
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
	ESPERANDO_CONFIRMACION_REFUERZO: 'ESPERANDO CONFIRMACION REFUERZO',
	CAMBIO_DE_FASE_A_ATAQUE: 'CAMBIO DE FASE A ATAQUE',

	FASE_DE_ATAQUE: 'FASE DE ATAQUE',
	ESPERANDO_CONFIRMACION_ATAQUE: 'ESPERANDO CONFIRMACION ATAQUE',
	CAMBIO_DE_FASE_A_MOVIMIENTO: 'CAMBIO DE FASE A MOVIMIENTO',

	FASE_DE_MOVIMIENTO: 'FASE DE MOVIMIENTO',
	ESPERANDO_CONFIRMACION_MOVIMIENTO: 'ESPERANDO CONFIRMACION MOVIMIENTO',
	PASAR_TURNO: 'PASAR TURNO',
}

const FASE_ESTADO = [
	ESTADOS.CARGANDO,
	ESTADOS.FASE_DE_REFUERZOS,
	ESTADOS.FASE_DE_ATAQUE,
	ESTADOS.FASE_DE_MOVIMIENTO,
]
/*
	Contenido del estado
{
	"estadointerno": ESTADOS,
	"ultimaJugada": {
		// Lo que sea
	}
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
const initialState = { estadoInterno: ESTADOS.CARGANDO }

function casosLocales(state, action) {
	switch (action.tipo) {
		case ESTADOS.CONFIRMACION_REFUERZO: {
			let idTerritorio = action.data.id
			state.ultimaJugada = {
				jugada: JUGADAS.REFUERZO,
				...action.data,
			}
			state.territorios[idTerritorio] = action.data.territorio.tropas
			if (state.estadoInterno === ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO) {
				state.estadoInterno = ESTADOS.FASE_DE_REFUERZOS
			}
			return state
		}
		case ESTADOS.CONFIRMACION_ATAQUE: {
			break
		}
		case ESTADOS.CONFIRMACION_MOVIMIENTO: {
			let idTerritorioOrigen = action.data.territorioOrigen.id
			let idTerritorioDestino = action.data.territorioDestino.id
			state.ultimaJugada = {
				jugada: JUGADAS.MOVIMIENTO,
				...action.data,
			}
			state.territorios[idTerritorioOrigen] = action.data.territorioOrigen
			state.territorios[idTerritorioDestino] = action.data.territorioDestino
			if (state.estadoInterno === ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO) {
				state.estadoInterno = ESTADOS.FASE_DE_MOVIMIENTO
			}
			return state
		}
		case ESTADOS.CONFIRMACION_CAMBIO_FASE: {
			break
		}
	}
}

/*
	Action recibida
	tipo: "",
	tengoTurno: "",
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
	}
*/
function maquinaEstados(state, action) {
	delete action.data._tipoMensaje
	if (action.tipo === ESTADOS.DATOS_COMPLETOS_PARTIDA) {
		if (action.tengoTurno) {
			action.data.estado = FASE_ESTADO[action.data.fase]
		} else {
			action.data.estado = ESTADOS.TURNO_RIVAL
		}
		return {
			...state,
			...action.data,
		}
	} else if (initialState.cargando) {
		console.log(
			'Recibido algo que no es de datos completos mientras aún se está esperando'
		)
		return state
	} else {
		return casosLocales(state, action)
	}
}

export default function partidaEstado() {
	return useReducer(maquinaEstados, initialState)
}
