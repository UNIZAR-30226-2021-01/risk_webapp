import React from 'react'
import './amigo.css'
import {EliminarAmigo} from './EliminarAmigo'
import {MDBListGroupItem, MDBIcon, MDBRow, MDBCol} from 'mdbreact'

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo 
 * @todo Eliminar amigo, con click derecho eliminar y popup de confirmación? 
 */
export const Amigo = ({datos}) => {
    return (
        <MDBListGroupItem>
			<MDBRow>
				<MDBCol>
            		{datos.nombre}
				</MDBCol>
				<MDBCol>
					<EliminarAmigo amigo={datos} />
				</MDBCol>
			</MDBRow>
        </MDBListGroupItem>
    )
}

export default Amigo;