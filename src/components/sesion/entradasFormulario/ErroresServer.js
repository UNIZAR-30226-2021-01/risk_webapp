import React from 'react'

export const ErroresServer = ({serverErrors}) => {
	return (
		<>
		{(serverErrors !== '') && <div className="alert alert-danger">
			<p> Error del servidor: {serverErrors}</p>
		</div>}
		</>
	)
}
