import iconos from 'assets/iconos/iconos'
import PropTypes from 'prop-types'
import { MDBCol, MDBRow } from 'mdbreact'
import React from 'react'
import cinta from '../../assets/UI/cinta.png'
/**
 * Representación de un jugador dentro de la pratida con su nombre e icono
 */
const JugadorPartida = ({ jugador, esSuTurno }) => {
	return (
		<MDBRow className="d-flex justify-content-between jugador-en-partida">
			<MDBCol md="4">
				<div className="icono-partida-cinta">
					<img
						src={iconos[jugador.icono].img}
						className="icono-jugador-partida"
					/>
					{esSuTurno && <img src={cinta} className="cinta-turno" />}
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
	 * Indica si es o no el turno del jugador en la partida
	 */
	esSuTurno: PropTypes.bool,
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
