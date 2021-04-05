import React from 'react'
import AuthApi from 'utils/AuthApi'

export const InvitarAmigo = ({ amigo, ws }) => {
	const Auth = useContext(AuthApi)

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
