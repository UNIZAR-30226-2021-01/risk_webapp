import React from 'react'
import PropTypes from 'prop-types'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import Jugador from './Jugador'

/**
 * Muestra la lista de jugadores en una partida
 */
export const ListaJugadoresPartida = ({ usuarios }) => {
	return (
		<MDBContainer className="mt-9">
			<MDBListGroup style={{ width: '18.5rem' }}>
				{usuarios.map((usuario) => (
					<MDBListGroupItem key={usuario.id.toString()}>
						<Jugador datos={usuario} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
		</MDBContainer>
	)
}

ListaJugadoresPartida.propTypes = {
	/**
	 * Lista de jugadores de la partida
	 */
	usuarios: PropTypes.arrayOf(PropTypes.any),
}

export default ListaJugadoresPartida
