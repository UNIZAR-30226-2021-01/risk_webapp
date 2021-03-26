import React from 'react'
import './amigo.css'
import {MDBListGroupItem, MDBRow, MDBCol} from 'mdbreact'

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo 
 * @todo Eliminar amigo, con click derecho eliminar y popup de confirmación? 
 */
export const Amigo = ({datos, elemento}) => {
    return (
        <MDBListGroupItem>
			<MDBRow>
				<MDBCol md="10">
            		{datos.nombre}
				</MDBCol>
				<MDBCol md="1">
					{React.cloneElement(elemento, {amigo: datos})}
				</MDBCol>
			</MDBRow>
        </MDBListGroupItem>
    )
}

export default Amigo;