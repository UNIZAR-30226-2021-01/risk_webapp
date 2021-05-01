import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import './notificacion.css'
import {
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBModalFooter,
} from 'mdbreact'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import AuthApi from './../../utils/AuthApi'
import { useHistory } from 'react-router-dom'
import { borrarNotiTurno } from 'utils/restAPI'
import { obtenerCredenciales } from 'utils/usuarioVO'

/**
 * Representación de una notificación de invitación a partida
 * en la lista de notificaciones.
 */
export const NotificacionTurno = ({ datos }) => {
	const history = useHistory()
	const [isOpen, setOpen] = useState(false)
	const [serverErrors, setServerErrors] = useState('')
	const Auth = useContext(AuthApi)

	const toggle = () => {
		setOpen(!isOpen)
	}

	const confirmarTurno = (datos) => async () => {
		const dirSala = `/partida/${datos.idEnvio}`
		history.push(dirSala)
	}

	const borrarNotiTurnoInterno = (datos) => async () => {
		setServerErrors('')
		const formData = {
			idSal: datos.idEnvio,
			...obtenerCredenciales(Auth),
		}

		const data = await borrarNotiTurno(formData)

		if (data.code != 0) {
			setServerErrors(data.err)
			toggle()
		}
	}

	return (
		<>
			<MDBRow>
				<MDBCol md="8">
					<p className="texto-noti-amistad">
						Es tu turno en la partida <strong>{datos.infoExtra}</strong>
					</p>
				</MDBCol>
				<MDBCol md="4">
					<MDBRow className="mr-1">
						<MDBCol md="6">
							<MDBBtn
								className="btn-notis aceptar"
								onClick={confirmarTurno(datos)}
							></MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<MDBBtn
								color="danger"
								className="btn-notis rechazar"
								onClick={borrarNotiTurnoInterno(datos)}
							></MDBBtn>
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

NotificacionTurno.propTypes = {
	datos: PropTypes.shape({
		infoExtra: PropTypes.string,
		idEnvio: PropTypes.number,
	}),
}

export default NotificacionTurno
