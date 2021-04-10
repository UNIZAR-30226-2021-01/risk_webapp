import React, { useContext } from 'react'
import './notificacion.css'
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'
import AuthApi from './../../utils/AuthApi'
import { useHistory } from 'react-router-dom'

export const NotificacionSala = ({ datos }) => {
	const Auth = useContext(AuthApi)
	const history = useHistory()

	const decisionSala = (datos) => async () => {
		const dirSala = `/sala/${datos.idEnvio}`
		//Debería redirigir a sala con id 12 y type aceptar
		//Otra opción probada ha sido Redirect pero tampoco funciona
		history.push(dirSala)
	}

	return (
		<>
			<MDBRow>
				<MDBCol md="8">
					<p>
						<strong>{datos.infoExtra}</strong> te ha invitado a una partida
					</p>
				</MDBCol>
				<MDBCol md="4">
					<MDBRow className="mr-1">
						<MDBCol md="6">
							<MDBBtn className="btn-notis" onClick={decisionSala(datos)}>
								<MDBIcon icon="check" />
							</MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<MDBBtn
								color="danger"
								className="btn-notis"
								onClick={decisionSala(datos)}
							>
								<MDBIcon icon="times" />
							</MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</>
	)
}

export default NotificacionSala
