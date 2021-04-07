import React from 'react'
import PartidaMini from './PartidaMini'
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import { useHistory } from 'react-router-dom'

/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} partidas Amigos del usuario de la aplicación
 */
export const ListaPartidas = ({ partidas }) => {
	const history = useHistory()
	return (
		<MDBContainer className="mt-9">
			<MDBListGroup style={{ width: '18.5rem' }}>
				<MDBBtn
					color="primary"
					className="btn-addfriend"
					onClick={() => {
						history.push('/sala/undefined')
					}}
				>
					Crear sala
				</MDBBtn>
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
