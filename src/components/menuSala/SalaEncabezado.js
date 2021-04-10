import React from 'react'
import PropTypes from 'prop-types'
import { MDBCol } from 'mdbreact'

/**
 * Encabezado de una sala de partida, muestra el nombre de la sala, el tiempo de
 * turno y el número de jugadores actuales
 */
export const SalaEncabezado = ({ datos }) => {
	console.log('NOMBRESALA', datos)
	return (
		<div
			className="d-flex p-2 flex-row justify-content-between "
			style={{ background: '#2bbbad', color: '#fff' }}
		>
			<MDBCol className="m-0 text-left">
				<h2 className="m-0">{datos.nombrePartida}</h2>
			</MDBCol>
			<MDBCol className="m-0 d-flex justify-content-center align-items-center">
				<p className="m-0">Tiempo de turno: {datos.tiempoTurno} min</p>
			</MDBCol>
			<MDBCol className="m-0 d-flex justify-content-end align-items-center">
				<p className="m-0">Hay {datos.jugadores.length} jugadores activos</p>
			</MDBCol>
		</div>
	)
}

SalaEncabezado.PropTypes = {
	datos: PropTypes.shape({
		/**
		 * Nombre de la partida
		 */
		nombrePartida: PropTypes.string,

		/**
		 * Tiempo de turno en minutos
		 */
		tiempoTurno: PropTypes.number,

		/**
		 * Array de jugadores que se usará para su longitud
		 */
		jugadores: PropTypes.arrayOf(PropTypes.any),
	}),
}

export default SalaEncabezado
