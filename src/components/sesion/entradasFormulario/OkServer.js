import React from 'react'
import { MDBAlert } from 'mdbreact'

/**
 * Da feedback al usuario si serverOk no es vacío
 * @param {string} serverOk String que se mostrará si no es vacía
 */
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
