import React from 'react'
import PropTypes from 'prop-types'
import './notificacion.css'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import { useHistory } from 'react-router-dom'

/**
 * Representación de una notificación de invitación a partida
 * en la lista de notificaciones.
 */
export const NotificacionSala = ({ datos }) => {
	const history = useHistory()

	const decisionSala = (datos) => async () => {
		const dirSala = `/sala/${datos.idEnvio}`
		history.push(dirSala)
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
								onClick={decisionSala(datos)}
							></MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<MDBBtn
								color="danger"
								className="btn-notis rechazar"
								onClick={decisionSala(datos)}
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
