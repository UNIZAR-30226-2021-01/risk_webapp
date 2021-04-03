import React from 'react'
import { MDBAlert } from 'mdbreact'

/**
 * Muestra errores del servidor si hay
 * @param {string} serverErrors Errores del servidor
 */
export const ErroresServer = ({ serverErrors }) => {
	return (
		<>
			{serverErrors !== '' && (
				<MDBAlert color="danger">
					<p> Error del servidor: {serverErrors}</p>
				</MDBAlert>
			)}
		</>
	)
}
