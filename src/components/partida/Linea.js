import React from 'react'

const Linea = ({ x1, y1, x2, y2 }) => {
	return (
		<line
			x1={x1}
			y1={y1}
			x2={x2}
			y2={y2}
			style={{
				stroke: 'rgb(255, 255, 255, 0.400)',
				strokeWidth: '2',
				strokeDasharray: 5,
			}}
		/>
	)
}

function lineaPropsAreEqual(prevLinea, nextLinea) {
	return (
		prevLinea.x1 === nextLinea.x1 &&
		prevLinea.x2 === nextLinea.x2 &&
		prevLinea.y1 === nextLinea.y1 &&
		prevLinea.y2 === nextLinea.y2
	)
}

export default Linea

export const MemorizedLinea = React.memo(Linea, lineaPropsAreEqual)
