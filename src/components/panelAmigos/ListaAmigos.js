import React, { useContext } from 'react'
import AuthApi from 'utils/AuthApi'
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
	const Auth = useContext(AuthApi)

	return (
		<MDBContainer className="mt-3">
			<MDBListGroup className="lista-amigos">
				{usuarios.map((usuario) => (
					<MDBListGroupItem key={usuario.id.toString()}>
						<Amigo datos={usuario} elemento={elemento} {...rest} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
			{mostrarAnyadir && <AnyadirAmigo usuario={Auth.auth.usuario} />}
		</MDBContainer>
	)
}

export default ListaAmigos
