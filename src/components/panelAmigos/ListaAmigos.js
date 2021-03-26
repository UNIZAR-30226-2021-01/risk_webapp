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
export const listaAmigos = ({usuarios, elemento}) => {
	return (
	<MDBContainer className="mt-9" >
		<MDBListGroup style={{ width: "18.5rem" }}>
  		{usuarios.map((usuario) => (
			  <Amigo datos={usuario} elemento={elemento}/>
		))}
		<AnyadirAmigo /> 
		</MDBListGroup>
	</MDBContainer>
	)
}

export default listaAmigos;