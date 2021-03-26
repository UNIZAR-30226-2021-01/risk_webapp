import React, { useState, useContext } from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBCol, MDBBtn, MDBRow} from "mdbreact"
import AuthApi from "./../../utils/AuthApi"
import constants from '../../utils/constants'
import qs from 'qs'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'

export const EliminarAmigo = ({amigo}) => {
	const [isOpen, setOpen] = useState(false)
	const [serverErrors, setServerErrors] = useState('')
	const Auth = useContext(AuthApi)

	const toggle = () =>{
		setOpen(!isOpen)
	}

	const eliminarAmigo = e => async() => {
		setServerErrors('')
		//console.log(amigo)
		const formData = {
			idUsuario: Auth.auth.usuario.id,
			idAmigo: amigo.id,
			decision: "Borrar",
			clave: Auth.auth.usuario.clave,
		}
		//console.log(formData)

		const url = `${constants.BASE_SERVER_URL}gestionAmistad`
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: qs.stringify(formData)
		}
		const res = await fetch(url, options)
		const data = await res.json()
		//console.log(data, "JSON recibido de registrar")
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
						<MDBBtn color="danger" onClick={eliminarAmigo(amigo)}>Eliminar</MDBBtn>
					</MDBRow>
				</MDBModalBody>
			</MDBCol>
		</MDBModal>	
	</>
	)
}

export default EliminarAmigo;
