import React from 'react'
import {MDBAlert} from 'mdbreact'

export const ErroresServer = ({serverErrors}) => {
	return (
		<>
		{(serverErrors !== "") && 
		<MDBAlert color="danger">
			<p> Error del servidor: {serverErrors}</p>
		</MDBAlert>}
		</>
	)
}
