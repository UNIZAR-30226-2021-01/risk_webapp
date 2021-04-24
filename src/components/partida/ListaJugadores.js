import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'
import JugadorPartida from './JugadorPartida'

const ListaJugadores = ({ jugadores, jugadorTurno }) => {
	return (
		<MDBListGroup className="jugadores-en-partida">
			{jugadores.map((jugador, index) => {
				let clasesJugador = `jugador${index}`
				if (jugador.id === jugadorTurno)
					clasesJugador = clasesJugador + ' esSuTurno'
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
