import React, { useState, useContext } from 'react'
import {
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBContainer,
	MDBCol,
	MDBBtn,
} from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { crearSala } from 'utils/restAPI'
import { FormCrearSala } from './FormCrearSala'

/**
 * Implementa un pop-up para añadir un amigo, este pop-up contiene
 * un formulario donde insertar el nombre del amigo.
 */
export const CrearSala = () => {
	const Auth = useContext(AuthApi)
	const [isOpen, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!isOpen)
	}

	const redirigirSala = () => {
		console.log('todo')
	}

	return (
		<MDBContainer>
			<MDBBtn color="primary" className="btn-addfriend" onClick={toggle}>
				Crear sala
			</MDBBtn>
			<MDBModal isOpen={isOpen} toggle={toggle}>
				<MDBModalHeader toggle={toggle}>Crear sala</MDBModalHeader>
				<MDBCol middle={true}>
					<MDBModalBody>
						<FormCrearSala
							usuario={Auth.auth.usuario}
							enviarSolicitud={crearSala}
							siValido={redirigirSala}
						/>
					</MDBModalBody>
				</MDBCol>
			</MDBModal>
		</MDBContainer>
	)
}

export default CrearSala
