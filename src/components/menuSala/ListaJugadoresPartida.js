import React from 'react'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import Jugador from './Jugador'
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

export default ListaJugadoresPartida
