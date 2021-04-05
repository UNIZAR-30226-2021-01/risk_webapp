import React from 'react'
import './amigo.css'
import { MDBRow, MDBCol } from 'mdbreact'

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo
 */
export const Amigo = ({ datos, elemento, ws = null }) => {
	return (
		<MDBRow>
			<MDBCol md="8">{datos.nombre}</MDBCol>
			<MDBCol md="4">
				{React.cloneElement(elemento, { amigo: datos, ws: ws })}
			</MDBCol>
		</MDBRow>
	)
}

export default Amigo
