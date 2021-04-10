import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import './notificacion.css'
import {
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBIcon,
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBModalFooter,
} from 'mdbreact'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import AuthApi from './../../utils/AuthApi'
import { decisionPeticion } from '../../utils/restAPI'
import { obtenerCredenciales } from 'utils/usuarioVO'

/**
 * Representación de una notificación de petición de amistad en la
 * lista de notificaciones.
 */
export const NotificacionAmistad = ({ datos }) => {
	const [isOpen, setOpen] = useState(false)
	const [serverErrors, setServerErrors] = useState('')
	const Auth = useContext(AuthApi)

	const toggle = () => {
		setOpen(!isOpen)
	}

	const decisionAmistad = (datos, decision) => async () => {
		setServerErrors('')
		const formData = {
			idAmigo: datos.idEnvio,
			decision: decision,
			...obtenerCredenciales(Auth),
		}

		const data = await decisionPeticion(formData)

		if (data.code === 0) {
			console.log(
				'Amigo con id y nombre: ' +
					datos.idEnvio +
					' ' +
					datos.infoExtra +
					' has elegido ' +
					decision
			)
		} else {
			setServerErrors(data.err)
			toggle()
		}
	}

	return (
		<>
			<MDBRow>
				<MDBCol md="8">
					<p>
						Solicitud de amistad de <strong>{datos.infoExtra}</strong>
					</p>
				</MDBCol>
				<MDBCol md="4">
					<MDBRow className="mr-1">
						<MDBCol md="6">
							<MDBBtn
								className="btn-notis"
								onClick={() => {
									decisionAmistad(datos, 'Aceptar')
								}}
							>
								<MDBIcon icon="check" />
							</MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<MDBBtn
								color="danger"
								className="btn-notis"
								onClick={() => {
									decisionAmistad(datos, 'Rechazar')
								}}
							>
								<MDBIcon icon="times" />
							</MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
			<MDBModal isOpen={isOpen} toggle={toggle}>
				<MDBModalHeader toggle={toggle}>
					Se ha producido un error:
				</MDBModalHeader>
				<MDBModalBody>
					<ErroresServer serverErrors={serverErrors} />
				</MDBModalBody>
				<MDBModalFooter className="d-flex justify-content-around">
					<MDBRow>
						<MDBBtn color="primary" className="btn-modal" onClick={toggle}>
							{' '}
							Aceptar
						</MDBBtn>
					</MDBRow>
				</MDBModalFooter>
			</MDBModal>
		</>
	)
}

NotificacionAmistad.PropTypes = {
	/**
	 * Datos con una cadena de información y el id
	 * de la sala a la que unirse.
	 */
	datos: PropTypes.shape({
		infoExtra: PropTypes.string,
		idEnvio: PropTypes.number,
	}),
}

export default NotificacionAmistad
