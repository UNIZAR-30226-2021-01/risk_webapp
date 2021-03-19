import React from 'react'

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo 
 * @todo Eliminar amigo, con click derecho eliminar y popup de confirmación? 
 */
export const Amigo = ({datos}) => {
    return (
        <div className="amigo">
            <h3> {datos.nombre} </h3>
        </div>
    )
}

export default Amigo;