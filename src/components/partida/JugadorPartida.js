import iconos from 'assets/iconos/iconos'
import PropTypes from 'prop-types'
import { MDBCol, MDBRow } from 'mdbreact'
import React from 'react'

/**
 * Representación de un jugador dentro de la pratida con su nombre e icono
 */
const JugadorPartida = ({ jugador }) => {
	return (
		<MDBRow className="jugador-en-partida">
			<MDBCol md="4">
				<div>
					<img
						src={iconos[jugador.icono].img}
						className="icono-jugador-partida"
					/>
				</div>
			</MDBCol>
			<MDBCol
				md="7"
				className="d-flex justify-content-center align-items-center"
			>
				{jugador.nombre}
			</MDBCol>
		</MDBRow>
	)
}

export default JugadorPartida

JugadorPartida.propTypes = {
	/**
	 * Información de un jugador de la partida
	 */
	jugador: PropTypes.shape({
		/**
		 * Avatar del jugador
		 */
		icono: PropTypes.number,
		/**
		 * Nombre del jugador
		 */
		nombre: PropTypes.string,
	}),
}
