import React, { useState, useContext } from 'react'
import {
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBIcon,
	MDBBtn,
	MDBRow,
	MDBFooter,
} from 'mdbreact'
import AuthApi from './../../utils/AuthApi'
import constants from '../../utils/constants'
import qs from 'qs'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { eliminarAmigo } from './../../utils/restAPI'

export const EliminarAmigo = ({ amigo }) => {
	const [isOpen, setOpen] = useState(false)
	const [serverErrors, setServerErrors] = useState('')
	const Auth = useContext(AuthApi)

	const toggle = () => {
		setOpen(!isOpen)
	}

	const eliminarAmigoInterno = (amigo) => async () => {
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
			{
				//<MDBBtn onClick={() => {toggle()}} className='btn-borrar'> Eliminar </MDBBtn>
			}
			<MDBBtn className="btn-borrar" onClick={() => toggle()}>
				<MDBIcon far icon="trash-alt" />
			</MDBBtn>

			<MDBModal
				isOpen={isOpen}
				toggle={() => {
					toggle()
				}}
			>
				<MDBModalHeader
					toggle={() => {
						toggle()
					}}
				>
					¿Estás seguro de que quieres eliminar a {amigo.nombre}?
				</MDBModalHeader>
				<MDBModalBody className="d-flex justify-content-between">
					<ErroresServer serverErrors={serverErrors} />
				</MDBModalBody>
				<MDBFooter className="d-flex justify-content-around">
					<MDBBtn
						color="primary"
						onClick={() => {
							toggle()
						}}
					>
						{' '}
						Cancelar
					</MDBBtn>
					<MDBBtn color="danger" onClick={eliminarAmigoInterno(amigo)}>
						Eliminar
					</MDBBtn>
				</MDBFooter>
			</MDBModal>
		</>
	)
}

export default EliminarAmigo
