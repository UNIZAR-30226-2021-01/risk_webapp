import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { calcularSegundosRestantes } from 'utils/tiempo'

/**
 * Muestra el tiempo restante dados el tiempo de inicio del turno
 * y el tiempo del turno.
 */
export const Temporizador = ({ tiempoInicio, tiempoTurno }) => {
	const [segundosRestantes, setSegundosRestantes] = useState(0)

	const actualizarSegundosRestantes = () => {
		setSegundosRestantes(calcularSegundosRestantes(tiempoInicio, tiempoTurno))
	}

	useEffect(() => {
		actualizarSegundosRestantes()
		let interval = setInterval(actualizarSegundosRestantes, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [tiempoInicio, tiempoTurno])

	return (
		<>
			<p>
				Tiempo restante: {'  '}
				{Math.floor(segundosRestantes / 3600)}:
				{Math.floor(Math.floor(segundosRestantes % 3600) / 60)}:
				{Math.floor(segundosRestantes % 60)}
			</p>
		</>
	)
}

Temporizador.propTypes = {
	/**
	 * Instante de tiempo en el que se inició el turno en ISO 8601.
	 */
	tiempoInicio: PropTypes.string,

	/**
	 * Duración del turno.
	 */
	tiempoTurno: PropTypes.number,
}
