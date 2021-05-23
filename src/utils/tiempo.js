/**
 * Contiene funciones útiles para el manejo del tiempo y el tiempo de turno.
 * @module tiempo
 */

/**
 * Dados un tiempo inicio y un tiempo de turno, devuelve la diferencia de
 * tiempo en segundos respecto al instante actual.
 * @param {string} tiempoInicio Instante de inicio del turno en ISO8601
 * @param {number} tiempoTurno Tiempo de turno en minutos
 * @returns Segundos restantes del turno
 */
export function calcularSegundosRestantes(tiempoInicio, tiempoTurno) {
	const segundosTurno = tiempoTurno * 60
	const fechaInicio = new Date(tiempoInicio)
	const fechaActual = new Date()
	const diferenciaSegundos =
		(fechaActual.getTime() - fechaInicio.getTime()) / 1000
	return Math.max(segundosTurno - diferenciaSegundos, 0)
}
