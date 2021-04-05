import React from 'react'
import { useParams } from 'react-router-dom'
/**
 * @todo link en el router
 */

export const Sala = (props) => {
	const { id } = useParams()

	return (
		<>
			<p>{id}</p>
		</>
	)
}

export default Sala
