import React from 'react'
import PropTypes from 'prop-types'
import PartidaMini from './PartidaMini'
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import { useHistory } from 'react-router-dom'
import './ListaPartidas.css'

/**
 * Muestra la lista de partidas recibida como parámetro
 * y un botón para crear sala.
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
			<MDBContainer className="mt-4 fondo-lista-partidas">
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

ListaPartidas.propTypes = {
	/**
	 * Lista de partidas a mostrar
	 */
	partidas: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		})
	),
}

export default ListaPartidas
