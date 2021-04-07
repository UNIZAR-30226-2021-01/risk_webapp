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
export const CrearSala = ({ redirigirSala }) => {
	const Auth = useContext(AuthApi)
	const [isOpen, setOpen] = useState(false)

	return (
		<MDBContainer>
			<FormCrearSala
				usuario={Auth.auth.usuario}
				enviarSolicitud={crearSala}
				siValido={redirigirSala}
			/>
		</MDBContainer>
	)
}

export default CrearSala
