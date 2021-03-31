import React from 'react'

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
