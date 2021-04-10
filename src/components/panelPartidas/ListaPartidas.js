import React from 'react'
import PartidaMini from './PartidaMini'
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import { useHistory } from 'react-router-dom'
import './ListaPartidas.css'
/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} partidas Amigos del usuario de la aplicación
 */
export const ListaPartidas = ({ partidas }) => {
	const history = useHistory()
	return (
		<>
			<MDBBtn
				className="btn-crearSala my-0"
				onClick={() => {
					history.push('/sala/undefined')
				}}
			>
				Crear sala
			</MDBBtn>
			<MDBContainer className="mt-3">
				<MDBListGroup className="lista-partidas">
					{partidas.map((partida) => (
						<MDBListGroupItem key={partida.id.toString()}>
							<PartidaMini datosPartida={partida} />
						</MDBListGroupItem>
					))}
				</MDBListGroup>
			</MDBContainer>
		</>
	)
}

export default ListaPartidas
