import React, { useState } from 'react'
import {
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBContainer,
	MDBCol,
	MDBBtn,
} from 'mdbreact'
import { FormAnyadirAmigo } from './FormAnyadirAmigo'
import { solicitudAmistad } from 'utils/restAPI'

/**
 * Implementa un pop-up para añadir un amigo, este pop-up contiene
 * un formulario donde insertar el nombre del amigo.
 */
export const AnyadirAmigo = () => {
	const [isOpen, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!isOpen)
	}

	return (
		<MDBContainer>
			<div className="d-flex justify-content-center">
				<MDBBtn className="btn-addfriend" onClick={toggle}>
					Añadir amigo
				</MDBBtn>
			</div>
			<MDBModal isOpen={isOpen} toggle={toggle}>
				<MDBModalHeader toggle={toggle}>Añadir amigo</MDBModalHeader>
				<MDBCol middle={true}>
					<MDBModalBody>
						<FormAnyadirAmigo enviarSolicitud={solicitudAmistad} />
					</MDBModalBody>
				</MDBCol>
			</MDBModal>
		</MDBContainer>
	)
}

export default AnyadirAmigo
