import React, { useContext } from 'react'
import { MDBBtn } from 'mdbreact'

export const InvitarAmigo = ({ amigo, ws }) => {
	const invitarAmigo = () => {
		const formData = {
			idInvitado: amigo.id,
			tipo: 'Invitar',
		}

		ws.send(formData.stringify(formData))
	}

	return (
		<MDBBtn className="btn-borrar" onClick={invitarAmigo}>
			Invitar
			{/*<MDBIcon far icon="trash-alt" /> */}
		</MDBBtn>
	)
}

export default InvitarAmigo
