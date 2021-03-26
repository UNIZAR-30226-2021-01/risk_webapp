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
				<MDBCol md="8">
            		{datos.nombre}
				</MDBCol>
				<MDBCol md="4">
					{React.cloneElement(elemento, {amigo: datos})}
					{/*
					<MDBDropdown>
						<MDBDropdownToggle>
							<MDBIcon icon="ellipsis-h" />
						</MDBDropdownToggle>
						<MDBDropdownMenu>
							<MDBDropdownItem>
								{React.cloneElement(elemento, {amigo: datos})}
							</MDBDropdownItem>
							<MDBDropdownItem>
								<EliminarAmigo amigo={datos} />
							</MDBDropdownItem>
						</MDBDropdownMenu>
					</MDBDropdown>
					*/}
				</MDBCol>
				{/*
				<MDBCol>
					<EliminarAmigo amigo={datos} />
				</MDBCol>
				*/}
			</MDBRow>
        </MDBListGroupItem>
    )
}

export default Amigo;