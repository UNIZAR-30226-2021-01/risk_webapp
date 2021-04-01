import React, { useContext } from 'react'
import PartidaMini from './PartidaMini'
import CrearSala from './CrearSala'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'

/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} partidas Amigos del usuario de la aplicación
 */
export const ListaPartidas = ({ partidas }) => {
	return (
		<MDBContainer className="mt-9">
			<MDBListGroup style={{ width: '18.5rem' }}>
				<CrearSala />
				{partidas.map((partida) => (
					<MDBListGroupItem key={partida.id.toString()}>
						<PartidaMini datosPartida={partida} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
		</MDBContainer>
	)
}

export default ListaPartidas
