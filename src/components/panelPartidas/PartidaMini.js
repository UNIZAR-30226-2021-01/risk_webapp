import React, { useContext } from 'react'
import { MDBAlert, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import AuthApi from 'utils/AuthApi'

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datosPartida Datos del amigo
 */
export const PartidaMini = ({ datosPartida }) => {
	const Auth = useContext(AuthApi)

	let turnoDisplay
	if (Auth.auth.usuario.nombre === datosPartida.nombreTurnoActual) {
		turnoDisplay = <MDBAlert color="success"> Tu turno </MDBAlert>
	} else {
		turnoDisplay = (
			<p>
				{' '}
				Turno de <strong>{datosPartida.nombreTurnoActual}</strong>
			</p>
		)
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol>
					<h4>{datosPartida.nombre}</h4>
				</MDBCol>
				<MDBCol>
					<MDBBtn color="default">Unirse</MDBBtn>
				</MDBCol>
			</MDBRow>
			<hr />
			<MDBRow>{turnoDisplay}</MDBRow>
		</MDBContainer>
	)
}

export default PartidaMini