import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MDBAlert, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import AuthApi from 'utils/AuthApi'
import { useHistory } from 'react-router-dom'

/**
 * Representación de una partida en la lista de partidas,
 * dando la opción de unirse.
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

PartidaMini.propTypes = {
	/**
	 * Id de la partida, nombre de la partida y nombre
	 * del jugador del turno actual.
	 */
	datosPartida: PropTypes.shape({
		id: PropTypes.number,
		nombre: PropTypes.string,
		nombreTurnoActual: PropTypes.string,
	}),
}

export default PartidaMini
