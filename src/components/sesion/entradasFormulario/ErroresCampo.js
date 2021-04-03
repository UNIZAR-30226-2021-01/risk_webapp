import React from 'react'

/**
 * Muestra un string como error si error no es vacío
 * @param {error_form} error Error de un formulario
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

export default ErroresCampo
