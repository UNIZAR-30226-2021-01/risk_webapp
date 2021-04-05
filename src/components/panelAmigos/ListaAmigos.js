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
	ws = null,
	mostrarAnyadir = true,
}) => {
	const Auth = useContext(AuthApi)

	return (
		<MDBContainer className="mt-9">
			<MDBListGroup style={{ width: '18.5rem' }}>
				{mostrarAnyadir && <AnyadirAmigo usuario={Auth.auth.usuario} />}
				{usuarios.map((usuario) => (
					<MDBListGroupItem key={usuario.id.toString()}>
						<Amigo datos={usuario} elemento={elemento} ws={ws} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
		</MDBContainer>
	)
}

export default ListaAmigos
