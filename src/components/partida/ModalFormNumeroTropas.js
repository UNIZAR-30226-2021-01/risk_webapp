import React, { useState } from 'react'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { MDBModal, MDBBtn, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { useForm } from 'react-hook-form'
import { EntradaNumero } from 'components/sesion/entradasFormulario/EntradaNumero'
import { FASES, obtenerDestino, obtenerOrigen } from './partidaEstados'

export const ModalFormNumeroTropas = ({
	isOpen,
	locations,
	max,
	estado,
	onSubmit,
	toggle,
}) => {
	const { register, handleSubmit, errors } = useForm({ numero: 1 })
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	const [error, setErrors] = useState('')

	const origen = locations[obtenerOrigen(estado)]
	const destino = locations[obtenerDestino(estado)]

	// El jugador debe poseer, al menos, los países de origen y destino de las tropas
	// en la fase de movimiento
	const jugadorPosee =
		estado.territorios[origen.id].jugador === estado.turnoJugador &&
		estado.territorios[destino.id].jugador === estado.turnoJugador

	let mensaje = `¿Cuántas tropas se envían de ${origen.name} a ${destino.name}? (máx. ${max})`
	let MensajeError =
		'Mínimo se necesita mover 1 tropa y como máximo una menos del total de las del continente.'

	/**
	 * Comprueba si es legal mover las tropas de un país origen a un país destino.
	 * Se debe comprobar previamente que origen y destino pertenecen al jugador
	 * al que le toca en ese turno.
	 * @param {int} origen id del país origen
	 * @param {int} destino id del país destino
	 * @param {array} territorios array "territorios" del estado
	 * @param {array} locations array "locations" del Mapa Unido
	 */
	const moverLegal = (origen, destino, territorios, locations) => {
		let frontera = [origen]
		let explorados = []
		let encontrado = false
		let fallo = false
		while (!encontrado && !fallo) {
			if (frontera.length === 0) fallo = true
			else {
				let nodo = locations[frontera.pop()]
				explorados.push(nodo.id)
				nodo.conexiones.forEach((adyacente) => {
					if (
						!explorados.includes(adyacente) &&
						!frontera.includes(adyacente)
					) {
						if (adyacente == destino) {
							encontrado = true
						} else if (
							// Si el territorio actual pertenece al mismo jugador que el nodo padre
							territorios[adyacente].jugador === territorios[nodo.id].jugador
						) {
							frontera.push(adyacente)
						}
					}
				})
			}
		}
		return encontrado
	}

	if (estado.fase === FASES.FASE_REFUERZOS) {
		mensaje = `¿Cuántos refuerzos se envían a ${destino.name}? (máx. ${max})`
		MensajeError = `Se debe enviar como mínimo 1 refuerzo y como máximo el total de refuerzos restantes (${max})`
	} else if (
		estado.fase === FASES.FASE_ATAQUE &&
		!origen.conexiones.includes(destino.id)
	) {
		MensajeError =
			'Los países de origen y destino del ataque deben estar unidos'
	} else if (
		estado.fase === FASES.FASE_MOVIMIENTO &&
		!moverLegal(origen.id, destino.id, estado.territorios, locations)
	) {
		MensajeError =
			'Los países de origen y destino deben estar conectados por países pertenecientes al jugador'
	} else if (estado.fase === FASES.FASE_MOVIMIENTO && !jugadorPosee) {
		MensajeError = 'Los países de origen y destino deben pertenecer al jugador'
	}

	return (
		<MDBModal isOpen={isOpen} toggle={toggle}>
			<MDBModalHeader>{mensaje}</MDBModalHeader>
			<MDBModalBody>
				<form
					id="registro"
					onSubmit={handleSubmit((formData) => {
						let n = parseInt(formData.n)
						if (
							(estado.fase === FASES.FASE_REFUERZOS && n > 0 && n <= max) ||
							(n > 0 && n < max)
						) {
							setErrors('')
							setSubmitting(true)
							onSubmit(formData)
							setSubmitting(false)
						} else {
							setErrors(MensajeError)
						}
					})}
				>
					<EntradaNumero
						register={register}
						errors={errors}
						texto="Tropas"
						label="n"
					/>

					<div className="text-center mt-4">
						<MDBBtn color="indigo" type="submit" disabled={submitting}>
							Mover tropas
						</MDBBtn>
					</div>
				</form>
			</MDBModalBody>
			<ErroresServer serverErrors={error} />
		</MDBModal>
	)
}
