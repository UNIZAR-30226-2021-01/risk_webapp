import React from 'react'
import PropTypes from 'prop-types'

/**
 * Linea SVG que une los centros de dos territorios conectados
 */
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

Linea.PropTypes = {
	/**
	 * Posición del centro de uno de los territorios en el eje X del SVG
	 */
	x1: PropTypes.number,

	/**
	 * Posición del centro del segundo de territorio en el eje X del SVG
	 */
	x2: PropTypes.number,

	/**
	 * Posición del centro de uno de los territorios en el eje Y del SVG
	 */
	y1: PropTypes.number,

	/**
	 * Posición del centro del segundo de territorio en el eje Y del SVG
	 */
	y2: PropTypes.number,
}
