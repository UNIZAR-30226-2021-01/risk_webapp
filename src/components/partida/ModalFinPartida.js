import React, { useContext } from 'react'
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

ModalFinPartida.defaultProps = {
	ganador: '',
	riskos: 0,
}
