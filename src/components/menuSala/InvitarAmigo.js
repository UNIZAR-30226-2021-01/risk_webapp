import React from 'react'
import PropTypes from 'prop-types'
import { MDBBtn } from 'mdbreact'

/**
 * Componente que muestra un botón para enviar una solicitud de amistad
 * por el websocket al amigo correspondiente.
 */
export const InvitarAmigo = ({ amigo, ws }) => {
	const invitarAmigo = () => {
		const formData = {
			idInvitado: amigo.id,
			tipo: 'Invitar',
		}

		console.log(ws, 'Ws cuando invitas')
		ws.send(JSON.stringify(formData))
	}

	return (
		<MDBBtn className="btn-invitar" onClick={invitarAmigo}>
			Invitar
		</MDBBtn>
	)
}

InvitarAmigo.propTypes = {
	/**
	 * Datos del amigo, se necesita el id para poder invitarlo
	 */
	amigo: PropTypes.shape({
		id: PropTypes.number,
	}),

	/**
	 * Websocket
	 */
	ws: PropTypes.any,
}

export default InvitarAmigo
