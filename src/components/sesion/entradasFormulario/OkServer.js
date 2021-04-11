import React from 'react'
import PropTypes from 'prop-types'
import { MDBAlert } from 'mdbreact'

/**
 * Da feedback al usuario si serverOk no es vacío, como
 * un mensaje de éxito.
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

OkServer.propTypes = {
	/**
	 * String que se mostrará si no es vacía.
	 */
	serverOk: PropTypes.string,
}
