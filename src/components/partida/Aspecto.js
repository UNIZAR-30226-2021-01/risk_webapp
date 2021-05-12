import React from 'react'
import PropTypes from 'prop-types'
import tropas from 'assets/tropas/tropas'
import tropasColor from 'assets/tropas/tropasColor'
import './Aspecto.css'

/**
 * Aspecto de un jugador dentro de la partida que se
 * muestra sobre los territorios que perten a dicho jugador.
 */
const Aspecto = ({ x, y, numAspecto, jugador }) => {
	console.log(tropasColor[numAspecto].img, 'aspecto')
	return (
		<>
			<image
				href={tropas[numAspecto].img}
				height="100px"
				width="100px"
				x={x - 35}
				y={y - 50}
			/>
			<image
				href={tropasColor[numAspecto].img}
				className={`img_tropacolor_${jugador}`}
				height="100px"
				width="100px"
				x={x - 35}
				y={y - 50}
			/>
		</>
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

Aspecto.propTypes = {
	/**
	 * Posición del aspecto sobre el eje X del SVG
	 */
	x: PropTypes.number,

	/**
	 * Posición del aspecto sobre el eje Y del SVG
	 */
	y: PropTypes.number,

	/**
	 * Identificador numérico del aspecto dentro del juego
	 */
	numAspecto: PropTypes.number,

	/**
	 * Id dentro de partida del jugador, para el color de la tropa.
	 */
	jugador: PropTypes.number,
}
