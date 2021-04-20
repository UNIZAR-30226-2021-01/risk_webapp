import React from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdbreact'
import JugadorPartida from './JugadorPartida'

const ListaJugadores = () => {
	const jugadores = [
		{ id: 1, nombre: 'Paco', icono: '1' },
		{ id: 2, nombre: 'Pedro', icono: '2' },
		{ id: 3, nombre: 'Pepe', icono: '3' },
		{ id: 4, nombre: 'Puertorico', icono: '4' },
	]
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
