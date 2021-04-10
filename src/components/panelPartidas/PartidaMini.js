import React, { useContext } from 'react'
import { MDBAlert, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { useHistory } from 'react-router-dom'

/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datosPartida Datos del amigo
 */
export const PartidaMini = ({ datosPartida }) => {
	const Auth = useContext(AuthApi)
	const history = useHistory()
	const rutaSala = '/sala/' + datosPartida.id.toString()

	let turnoDisplay
	if (Auth.auth.usuario.nombre === datosPartida.nombreTurnoActual) {
		turnoDisplay = (
			<MDBAlert color="success" className="m-0">
				{' '}
				Tu turno{' '}
			</MDBAlert>
		)
	} else {
		turnoDisplay = (
			<p className="m-0">
				{' '}
				Turno de <strong>{datosPartida.nombreTurnoActual}</strong>
			</p>
		)
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol className="d-flex align-items-center">
					<h4>{datosPartida.nombre}</h4>
				</MDBCol>
				<MDBCol className="d-flex justify-content-end">
					<MDBBtn
						className="btn-unirsePartida"
						onClick={() => {
							history.push(rutaSala)
						}}
					>
						Unirse
					</MDBBtn>
				</MDBCol>
			</MDBRow>
			<hr />
			<MDBRow>{turnoDisplay}</MDBRow>
		</MDBContainer>
	)
}

export default PartidaMini
