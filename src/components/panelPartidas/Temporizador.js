import React, { useEffect, useState } from 'react'
import { calcularSegundosRestantes } from 'utils/tiempo'

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
