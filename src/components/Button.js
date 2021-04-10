import React from 'react'
import PropTypes from 'prop-types'

/**
 * Botón simple de la aplicación
 * @deprecated En desuso tras la migración a Bootstrap
 */
const Button = ({ color, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}
			className="btn"
		>
			{text}
		</button>
	)
}

Button.defaultProps = {
	color: 'steelblue',
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
}

export default Button
