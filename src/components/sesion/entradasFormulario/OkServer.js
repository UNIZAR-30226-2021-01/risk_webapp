import React from 'react'
import { MDBAlert } from 'mdbreact'

export const OkServer = ({ serverOk }) => {
	return (
		<>
			{serverOk !== '' && (
				<MDBAlert color="success">
					<p> {serverOk}</p>
				</MDBAlert>
			)}
		</>
	)
}
