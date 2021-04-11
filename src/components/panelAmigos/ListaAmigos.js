import React from 'react'
import PropTypes from 'prop-types'
import Amigo from './Amigo.js'
import AnyadirAmigo from './AnyadirAmigo'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import './listaAmigos.css'

/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} usuarios Amigos del usuario de la aplicación
 */
export const ListaAmigos = ({
	usuarios,
	elemento,
	mostrarAnyadir = true,
	...rest
}) => {
	return (
		<MDBContainer className="mt-3">
			<MDBListGroup className="lista-amigos">
				{usuarios.map((usuario) => (
					<MDBListGroupItem key={usuario.id.toString()}>
						<Amigo datos={usuario} elemento={elemento} {...rest} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
			{mostrarAnyadir && <AnyadirAmigo />}
		</MDBContainer>
	)
}

ListaAmigos.propTypes = {
	usuarios: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		})
	),
	elemento: PropTypes.element,
	mostrarAnyadir: PropTypes.bool,
}

export default ListaAmigos
