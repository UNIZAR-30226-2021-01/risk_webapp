import React, {useState} from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBContainer, MDBCol, MDBBtn, MDBIcon} from "mdbreact"
import { FormAnyadirAmigo } from './FormAnyadirAmigo';

export const EliminarAmigo = ({amigo}) => {
	const [isOpen, setOpen] = useState(false);

	const toggle = () =>{
		setOpen(!isOpen)
	}

	const eliminarAmigo = (amigo) => e => {
		e.preventDefault()

		console.log(amigo, "Eliminado")
		toggle()
	}

	return (
	<>
		<MDBBtn onClick={() => {toggle()}} className='btn-borrar'> Eliminar </MDBBtn>
		<MDBModal isOpen={isOpen} toggle={() => {toggle()}} >
			<MDBModalHeader toggle={() => {toggle()}}>¿Estás seguro de que quieres eliminar a {amigo.nombre}?</MDBModalHeader>
			<MDBCol middle='true'>
				<MDBModalBody className="d-flex justify-content-between">
					<MDBBtn color="primary" onClick={() =>{toggle()}}> Cancelar</MDBBtn>
					<MDBBtn color="danger" onClick={eliminarAmigo(amigo)}>Eliminar</MDBBtn>
				</MDBModalBody>
			</MDBCol>
		</MDBModal>	
	</>
	)
}

export default EliminarAmigo;
