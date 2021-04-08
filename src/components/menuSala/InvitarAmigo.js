import React, { useContext } from 'react'
import { MDBBtn } from 'mdbreact'

export const InvitarAmigo = ({ amigo, ws }) => {
	const invitarAmigo = () => {
		const formData = {
			idInvitado: amigo.id,
			tipo: 'Invitar',
		}

		ws.send(JSON.stringify(formData))
	}

	return (
		<MDBBtn className="btn-invitar" onClick={invitarAmigo}>
			Invitar
		</MDBBtn>
	)
}

export default InvitarAmigo
