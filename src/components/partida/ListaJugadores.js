import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'
import JugadorPartida from './JugadorPartida'

const ListaJugadores = ({ jugadores }) => {
	return (
		<MDBListGroup className="jugadores-en-partida">
			{jugadores.map((jugador) => (
				<MDBListGroupItem key={jugador.id.toString()}>
					<JugadorPartida jugador={jugador} />
				</MDBListGroupItem>
			))}
		</MDBListGroup>
	)
}

export default ListaJugadores
