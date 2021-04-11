import React from 'react'
import PropTypes from 'prop-types'
import { MDBAlert } from 'mdbreact'

/**
 * Muestra los errores del servidor si hay como mensaje
 * de error.
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

ErroresServer.propTypes = {
	/**
	 * Error del formulario, si no existe no se muestra.
	 */
	serverErrors: PropTypes.string,
}
