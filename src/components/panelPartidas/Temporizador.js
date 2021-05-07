import React, { useEffect, useState } from 'react'

const calcularSegundosRestantes = (tiempoInicio, tiempoTurno) => {
	const segundosTurno = tiempoTurno * 60
	const fechaInicio = new Date(tiempoInicio)
	const fechaActual = new Date()
	const diferenciaSegundos =
		(fechaActual.getTime() - fechaInicio.getTime()) / 1000
	return segundosTurno - diferenciaSegundos
}

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
				{Math.ceil(segundosRestantes / 3600)}:
				{Math.ceil(Math.ceil(segundosRestantes % 3600) / 60)}:
				{Math.ceil(segundosRestantes % 60)}
			</p>
		</>
	)
}
