import React from 'react'

const NumTropas = ({ x, y, numTropas }) => {
	return (
		<text
			style={{ fill: 'white', stroke: 'darkslategrey', strokeWidth: '0.05rem' }}
			x={x + 25}
			y={y + 10}
		>
			{numTropas}
		</text>
	)
}

function numTropasPropsAreEqual(prevTropas, nextTropas) {
	return (
		prevTropas.x === nextTropas.x &&
		prevTropas.y === nextTropas.y &&
		prevTropas.numTropas === nextTropas.numTropas
	)
}

export default NumTropas

export const MemorizedNumTropas = React.memo(NumTropas, numTropasPropsAreEqual)
