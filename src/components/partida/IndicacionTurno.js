import React from 'react'
import PropTypes from 'prop-types'
import { ESTADOS } from './partidaEstados'
import { MDBContainer } from 'mdbreact'

/**
 * Mensaje que indica al usuario la acción a realizar en
 * el turno en el que se encuentra.
 */
export const IndicacionTurno = ({ estado }) => {
	let mensaje = ''
	switch (estado) {
		case ESTADOS.FASE_DE_REFUERZOS:
			mensaje = 'ESCOGER DESTINO REFUERZOS'
			break
		case ESTADOS.FASE_DE_ATAQUE:
			mensaje = 'ESCOGER PAÍS ORIGEN'
			break
		case ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
			mensaje = 'ESCOGER PAÍS DESTINO'
			break
		case ESTADOS.FASE_DE_MOVIMIENTO:
			mensaje = 'ESCOGER PAÍS ORIGEN'
			break
		case ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
			mensaje = 'ESCOGER PAÍS DESTINO'
			break
		default:
			mensaje = ''
	}

	return (
		<>
			{mensaje && (
				<MDBContainer className="mt-3 pb-4 d-flex flex-column align-items-center">
					<h2 className="text-center" style={{ color: 'antiquewhite' }}>
						{mensaje}
					</h2>
				</MDBContainer>
			)}
		</>
	)
}

IndicacionTurno.propTypes = {
	/**
	 * Indica el estado actual de la partida
	 */
	estado: PropTypes.string,
}
