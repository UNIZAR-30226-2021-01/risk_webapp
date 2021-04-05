import React, { useState, useContext } from 'react'
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


export const NotificacionSala = ({ datos }) => {
	const Auth = useContext(AuthApi)

	const decisionSala = (datos) => async () => {
        setServerErrors('')
		const formData =
            {tipo: "aceptar",
			idSala: datos.idEnvio,}    
        /*
        * usar los params https://medium.com/@kate.pavlova/how-to-set-or-get-query-parameters-in-react-router-7d6e2440ede8
        */
		
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
								onClick={}
							>
								<MDBIcon icon="check" />
							</MDBBtn>
						</MDBCol>
						<MDBCol md="6">
							<MDBBtn
								color="danger"
								className="btn-notis"
								onClick={}
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