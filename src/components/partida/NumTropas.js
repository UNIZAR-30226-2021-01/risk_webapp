import React from 'react'

const NumTropas = ({ x, y, numTropas }) => {
	return (
		<>
			<foreignObject x={x + 12} y={y - 7} width="160" height="160">
				<div
					xmlns="http://www.w3.org/1999/xhtml"
					className="fondo-numTropas"
				></div>
			</foreignObject>
			<text
				style={{
					fill: 'white',
					stroke: 'darkslategrey',
					strokeWidth: '0.05rem',
				}}
				x={x + 17}
				y={y + 10}
			>
				{numTropas}
			</text>
		</>
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
