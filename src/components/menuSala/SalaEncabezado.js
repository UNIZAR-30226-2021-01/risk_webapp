import React from 'react'
import PropTypes from 'prop-types'
import { MDBCol } from 'mdbreact'

/**
 * Encabezado de una sala de partida, muestra el nombre de la sala, el tiempo de
 * turno y el número de jugadores actuales
 */
export const SalaEncabezado = ({ datos }) => {
	return (
		<div
			className="d-flex p-2 flex-row justify-content-between "
			style={{ background: '#2bbbad', color: '#fff' }}
		>
			<MDBCol className="m-0 d-flex justify-content-start align-items-center">
				<h2 className="m-0 titulo-sala">{datos.nombrePartida}</h2>
			</MDBCol>
			<MDBCol className="m-0 d-flex justify-content-center align-items-center">
				<h2 className="m-0 titulo-sala">
					Tiempo de turno: {datos.tiempoTurno} min
				</h2>
			</MDBCol>
			<MDBCol className="m-0 d-flex justify-content-end align-items-center">
				<h2 className="m-0 titulo-sala">
					Hay {datos.jugadores.length} jugadores activos
				</h2>
			</MDBCol>
		</div>
	)
}

SalaEncabezado.propTypes = {
	/**
	 * Nombre de la partida
	 * Tiempo de turno en minutos
	 * Lista de jugadores para su longitud
	 */
	datos: PropTypes.shape({
		nombrePartida: PropTypes.string,

		tiempoTurno: PropTypes.number,

		jugadores: PropTypes.arrayOf(PropTypes.any),
	}),
}

export default SalaEncabezado
