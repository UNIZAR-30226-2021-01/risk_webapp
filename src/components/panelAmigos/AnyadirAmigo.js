import React, {useState} from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBContainer, MDBCol, MDBBtn} from "mdbreact"
import { FormAnyadirAmigo } from './FormAnyadirAmigo';

/**
 * Implementa un pop-up para añadir un amigo, este pop-up contiene
 * un formulario donde insertar el nombre del amigo.
 * @todo Conexión con servidor, css...
 */
export const AnyadirAmigo = ({callback}) => {
	const [isOpen, setOpen] = useState(false);

	const toggle = () =>{
		setOpen(!isOpen)
	}

	return (
	<MDBContainer >
		<MDBBtn color="primary" className='btn-addfriend' onClick={() => {toggle()}}>Añadir amigo</MDBBtn>	
		<MDBModal isOpen={isOpen} toggle={() => {toggle()}}>
			<MDBModalHeader toggle={() => {toggle()}}>Añadir amigo</MDBModalHeader>
			<MDBCol middle='true'>
			<MDBModalBody>
				<FormAnyadirAmigo />
			</MDBModalBody>
			</MDBCol>
		</MDBModal>	
	</MDBContainer>

	)
}

export default AnyadirAmigo;
