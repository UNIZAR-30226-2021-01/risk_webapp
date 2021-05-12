import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'
import JugadorPartida from './JugadorPartida'
import PropTypes from 'prop-types'
import './JugadoresPartida.css'

/**
 * Lista horizontal de los jugadores de la partida.
 * Se muestran con su color correspondiente y se
 * indicacon un borde más grueso el jugador al que
 * le toca jugar.
 */
const ListaJugadores = ({ jugadores, jugadorTurno }) => {
	return (
		<MDBListGroup className="jugadores-en-partida d-flex flex-row justify-content-around">
			{jugadores.map((jugador, index) => {
				let clasesJugador = `jugador-en-partida jugador${index}`
				if (index === jugadorTurno) clasesJugador = clasesJugador + ' esSuTurno'
				return (
					<MDBListGroupItem
						key={jugador.id.toString()}
						className={clasesJugador}
					>
						<JugadorPartida jugador={jugador} />
					</MDBListGroupItem>
				)
			})}
		</MDBListGroup>
	)
}

export default ListaJugadores

ListaJugadores.propTypes = {
	jugadores: PropTypes.arrayOf(
		PropTypes.shape({
			/**
			 * Identificador del jugador
			 */
			id: PropTypes.number,
			/**
			 * Identificador numérico del icono del
			 * jugador en la lista de iconos disponibles
			 */
			icono: PropTypes.number,
			/**
			 * Nombre del jugador
			 */
			nombre: PropTypes.string,
		})
	),
}
