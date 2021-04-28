import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'
import JugadorPartida from './JugadorPartida'
import './JugadoresPartida.css'

const ListaJugadores = ({ jugadores, jugadorTurno }) => {
	return (
		<MDBListGroup className="jugadores-en-partida d-flex flex-row justify-content-between">
			{jugadores.map((jugador, index) => {
				let clasesJugador = `jugador${index}`
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
