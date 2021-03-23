import React from 'react'
import './amigo.css'
import {MDBListGroupItem} from 'mdbreact';

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo 
 * @todo Eliminar amigo, con click derecho eliminar y popup de confirmación? 
 */
export const Amigo = ({datos}) => {
    return (
        <MDBListGroupItem>
            {datos.nombre}
        </MDBListGroupItem>
    )
}

export default Amigo;