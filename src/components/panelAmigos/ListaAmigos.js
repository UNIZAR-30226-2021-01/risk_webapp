import React, { useContext } from 'react'
import AuthApi from "./../sesion/AuthApi"
import Amigo from './Amigo.js'
import AnyadirAmigo from './AnyadirAmigo'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import './listaAmigos.css';

/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} usuarios Amigos del usuario de la aplicación 
 */
export const ListaAmigos = ({usuarios, elemento}) => {
	const Auth = useContext(AuthApi)
	return (
	<MDBContainer className="mt-9" >
		<MDBListGroup style={{ width: "18.5rem" }}>
			{usuarios.map((usuario) => (
				<MDBListGroupItem key={usuario.id.toString()}>
					<Amigo datos={usuario} elemento={elemento}/>
				</MDBListGroupItem>
			))}
			<AnyadirAmigo usuario={Auth.auth.usuario}/> 
		</MDBListGroup>
	</MDBContainer>
	)
}

export default ListaAmigos;