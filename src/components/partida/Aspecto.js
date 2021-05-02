import React from 'react'
import tropas from 'assets/tropas/tropas'

const Aspecto = ({ x, y, numAspecto }) => {
	return (
		<image
			href={tropas[numAspecto].img}
			height="100px"
			width="100px"
			x={x - 35}
			y={y - 50}
		/>
	)
}

function aspectoPropsAreEqual(prevAspecto, nextAspecto) {
	return (
		prevAspecto.x === nextAspecto.x &&
		prevAspecto.y === nextAspecto.y &&
		prevAspecto.numAspecto === nextAspecto.numAspecto
	)
}

export default Aspecto

export const MemorizedAspecto = React.memo(Aspecto, aspectoPropsAreEqual)
