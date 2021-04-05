import React, { useState, useContext } from 'react'
import './notificacion.css'
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import AuthApi from './../../utils/AuthApi'

export const NotificacionSala = ({ datos }) => {
	const Auth = useContext(AuthApi)

	const decisionSala = (datos) => async () => {
		console.log('DECIDIENDODECIDIENDOOOO')
		/*setServerErrors('')
		const formData = { tipo: 'aceptar', idSala: datos.idEnvio }*/
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
							<MDBBtn
								color="success"
								className="btn-notis"
								onClick={decisionSala(datos)}
							>
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
