import { useReducer } from 'react'
import Risk from 'assets/mapas/RiskMapa'

const ERROR = 'ERROR'

const DATOS_COMPLETOS_PARTIDA = 'DATOS_COMPLETOS_PARTIDA'

const ENVIAR_MENSAJE_REFUERZO = 'ENVIAR_MENSAJE_REFUERZO'
const CONFIRMACION_REFUERZO = 'CONFIRMACION_REFUERZO'

const ENVIAR_MENSAJE_CAMBIO_FASE = 'MENSAJE_CAMBIO_FASE'
const CONFIRMACION_CAMBIO_FASE = 'CONFIRMACION_CAMBIO_FASE'

const ENVIAR_MENSAJE_ATAQUE = 'ENVIAR_MENSAJE_ATAQUE'
const CONFIRMACION_ATAQUE = 'CONFIRMACION_ATAQUE'

const ENVIAR_MENSAJE_MOVIMIENTO = 'ENVIAR_MENSAJE_MOVIMIENTO'
const CONFIRMACION_MOVIMIENTO = 'CONFIRMACION_MOVIMIENTO'

const initialState = { cargando: 'cargando' }

function reducer(state, action) {
	if (action.tipo === 'DATOS_COMPLETOS PARTIDA') {
		delete action.data._tipoMensaje
		return action.data
	} else if (initialState.cargando) {
		console.log(
			'Recibido algo que no es de datos completos mientras aún se está esperando'
		)
	} else if (action) {
		console.log('xd')
	}
}

export default function partidaEstado() {
	return useReducer(reducer, initialState)
}
