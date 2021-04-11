import React from 'react'
import PropTypes from 'prop-types'

/**
 * Muestra un string como error si error no es vacío.
 */
export const ErroresCampo = ({ error }) => {
	return (
		<>
			{error ? (
				<div className="alert alert-danger"> {error.message}</div>
			) : null}
		</>
	)
}

ErroresCampo.propTypes = {
	/**
	 * Error del formulario, si no existe no se muestra.
	 */
	error: PropTypes.any,
}

export default ErroresCampo
