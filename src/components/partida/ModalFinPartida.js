import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { getRandomQuote } from 'assets/quotes'
import { obtenerInfoUsuario } from 'utils/usuarioVO'
import {
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBBtn,
	MDBAlert,
} from 'mdbreact'
import AuthApi from 'utils/AuthApi'

/**
 * Modal de fin de partida, enseña los riskos obtenidos si eres
 * el ganador de la partida y siempre una cita de Sun Tzu.
 */
export const ModalFinPartida = ({ isOpen, ganador, riskos }) => {
	const Auth = useContext(AuthApi)
	const history = useHistory()
	return (
		<MDBModal isOpen={isOpen} toggle={() => {}}>
			<MDBModalHeader>
				<h3>Fin de la partida</h3>
			</MDBModalHeader>
			<MDBModalBody>
				{obtenerInfoUsuario(Auth).nombre === ganador && (
					<>
						<MDBAlert color="success">
							<p>
								<strong>¡Enhorabuena, has dominado el mundo!</strong>
							</p>
						</MDBAlert>
						<p>
							<strong>Has ganado {riskos} riskos.</strong>
						</p>
					</>
				)}
				{obtenerInfoUsuario(Auth).nombre !== ganador && (
					<p>
						<strong>El ganador es: {ganador}.</strong>
					</p>
				)}
				<em> {getRandomQuote()} - Sun Tzu</em>
				<MDBBtn
					onClick={() => {
						history.push('/')
					}}
				>
					Volver al menú principal
				</MDBBtn>
			</MDBModalBody>
		</MDBModal>
	)
}

ModalFinPartida.propTypes = {
	/**
	 * Determina si está abierto o no el modal.
	 */
	isOpen: PropTypes.bool,

	/**
	 * Nombre del ganador.
	 */
	ganador: PropTypes.string,

	/**
	 * Riskos obtenidos por el ganador.
	 */
	riskos: PropTypes.number,
}

ModalFinPartida.defaultProps = {
	ganador: '',
	riskos: 0,
}
