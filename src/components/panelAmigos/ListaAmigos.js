import React from 'react'
import Amigo from './Amigo.js'
import AnyadirAmigo from './AnyadirAmigo'
import {MDBContainer, MDBListGroup} from 'mdbreact';
import './listaAmigos.css';

/**
 * Muestra la lista de amigos recibida como parámetro y da la opción de
 * añadir un amigo.
 * @param {lista_de_usuarios} usuarios Amigos del usuario de la aplicación 
 */
export const listaAmigos = ({usuarios}) => {
	return (
	<MDBContainer>
		<MDBListGroup style={{ width: "22rem" }}>
  		{usuarios.map((usuario) => (
			  <Amigo datos={usuario}/>
		))}
		<AnyadirAmigo /> 
		</MDBListGroup>
	</MDBContainer>
	)
}

export default listaAmigos;