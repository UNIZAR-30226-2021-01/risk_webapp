import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './notificacion.css'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import { useHistory } from 'react-router-dom'
import { rechazarPartida } from 'utils/restAPI'
import { obtenerCredenciales } from 'utils/usuarioVO'
import AuthApi from './../../utils/AuthApi'

/**
 * Representación de una notificación de invitación a partida
 * en la lista de notificaciones.
 */
export const NotificacionSala = ({ datos }) => {
	const history = useHistory()
	const Auth = useContext(AuthApi)

	const decisionSala = (datos, decision) => async () => {
		if (decision === 'aceptar') {
			const dirSala = `/sala/${datos.idEnvio}`
			history.push(dirSala)
		} else if (decision === 'rechazar') {
			const formData = {
				idSala: datos.idEnvio,
				...obtenerCredenciales(Auth),
			}
			const data = await rechazarPartida(formData)

			if (data.code != 0) {
				console.log('ERROR: ' + data.err)
			}
		}
	}

	return (
		<>
			<MDBRow>
				<MDBCol md="8">
					<p className="texto-noti-sala">
						<strong>{datos.infoExtra}</strong> te ha invitado a una partida
					</p>
				</MDBCol>
				<MDBCol md="4">
					<MDBRow className="mr-1">
						<MDBCol md="6">
							<MDBBtn
								className="btn-notis aceptar"
								onClick={decisionSala(datos, 'aceptar')}
							></MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<MDBBtn
								color="danger"
								className="btn-notis rechazar"
								onClick={decisionSala(datos, 'rechazar')}
							></MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</>
	)
}

NotificacionSala.propTypes = {
	datos: PropTypes.shape({
		idEnvio: PropTypes.number,
	}),
}

export default NotificacionSala
