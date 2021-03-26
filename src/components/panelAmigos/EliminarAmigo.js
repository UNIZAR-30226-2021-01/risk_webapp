import React, { useState, useContext } from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBCol, MDBBtn, MDBRow} from "mdbreact"
import AuthApi from "./../../utils/AuthApi"
import constants from '../../utils/constants'
import qs from 'qs'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { eliminarAmigo } from './../../utils/restAPI'

export const EliminarAmigo = ({amigo}) => {
	const [isOpen, setOpen] = useState(false)
	const [serverErrors, setServerErrors] = useState('')
	const Auth = useContext(AuthApi)

	const toggle = () =>{
		setOpen(!isOpen)
	}

	const eliminarAmigoInterno = e => async(amigo) => {
		setServerErrors('')
		const formData = {
			idUsuario: Auth.auth.usuario.id,
			idAmigo: amigo.id,
			clave: Auth.auth.usuario.clave,
		}

		const data = await eliminarAmigo(formData)

		if (data.code === 0) {
			toggle()
		} else {
			setServerErrors(data.err)
		}
	}

	return (
	<>
		<MDBBtn onClick={() => {toggle()}} className='btn-borrar'> Eliminar </MDBBtn>
		<MDBModal isOpen={isOpen} toggle={() => {toggle()}} >
			<MDBModalHeader toggle={() => {toggle()}}>¿Estás seguro de que quieres eliminar a {amigo.nombre}?</MDBModalHeader>
			<MDBCol middle='true'>
				<MDBModalBody className="d-flex justify-content-between">
					<MDBRow>
						<ErroresServer serverErrors={serverErrors} />
					</MDBRow>
					<MDBRow>
						<MDBBtn color="primary" onClick={() =>{toggle()}}> Cancelar</MDBBtn>
						<MDBBtn color="danger" onClick={eliminarAmigoInterno(amigo)}>Eliminar</MDBBtn>
					</MDBRow>
				</MDBModalBody>
			</MDBCol>
		</MDBModal>	
	</>
	)
}

export default EliminarAmigo;
