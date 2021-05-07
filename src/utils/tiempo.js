export const calcularSegundosRestantes = (tiempoInicio, tiempoTurno) => {
	const segundosTurno = tiempoTurno * 60
	const fechaInicio = new Date(tiempoInicio)
	const fechaActual = new Date()
	const diferenciaSegundos =
		(fechaActual.getTime() - fechaInicio.getTime()) / 1000
	return Math.max(segundosTurno - diferenciaSegundos, 0)
}
