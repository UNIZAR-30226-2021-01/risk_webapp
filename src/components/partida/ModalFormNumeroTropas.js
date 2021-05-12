import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { MDBModal, MDBBtn, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { useForm } from 'react-hook-form'
import { EntradaNumero } from 'components/sesion/entradasFormulario/EntradaNumero'
import { FASES, obtenerDestino, obtenerOrigen } from './partidaEstados'
import { destinosMovimientos } from 'utils/mapa'

/**
 * Modal que representa el número de tropas a enviar a un territorio,
 * ya sea de un refuerzo, ataque o movimiento.
 */
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
	//const [hayErrores, setHayErrores] = useState(false)
	let hayErrores = false

	const origen = locations[obtenerOrigen(estado)]
	const destino = locations[obtenerDestino(estado)]
	const destinos = destinosMovimientos(
		parseInt(origen.id),
		estado.territorios,
		locations
	)

	// El jugador debe poseer, al menos, los países de origen y destino de las tropas
	// en la fase de movimiento
	const jugadorPosee =
		estado.territorios[parseInt(origen.id)].jugador == estado.turnoJugador &&
		estado.territorios[parseInt(destino.id)].jugador == estado.turnoJugador

	let mensaje = `¿Cuántas tropas se envían de ${origen.name} a ${destino.name}? (máx. ${max})`
	let MensajeError =
		'Mínimo se necesita mover 1 tropa y como máximo una menos del total de las del continente.'

	if (estado.fase === FASES.FASE_REFUERZOS) {
		mensaje = `¿Cuántos refuerzos se envían a ${destino.name}? (máx. ${max})`
		MensajeError = `Se debe enviar como mínimo 1 refuerzo y como máximo el total de refuerzos restantes (${max})`
	} else if (
		estado.fase === FASES.FASE_ATAQUE &&
		!origen.conexiones.includes(parseInt(destino.id))
	) {
		//setHayErrores(true)
		hayErrores = true
		MensajeError =
			'Los países de origen y destino del ataque deben estar unidos'
	} else if (
		estado.fase === FASES.FASE_ATAQUE &&
		!estado.territorios[parseInt(origen.id)].jugador == estado.turnoJugador
	) {
		hayErrores = true
		MensajeError = 'El país de origen debe pertenecer al jugador'
	} else if (
		estado.fase === FASES.FASE_MOVIMIENTO &&
		!destinos.includes(parseInt(destino.id))
	) {
		//setHayErrores(true)
		hayErrores = true
		MensajeError =
			'Los países de origen y destino deben estar conectados por países pertenecientes al jugador'
	} else if (estado.fase === FASES.FASE_MOVIMIENTO && !jugadorPosee) {
		//setHayErrores(true)
		hayErrores = true
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
						if (n > 0 && n <= max && !hayErrores) {
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

// TERMINAR
ModalFormNumeroTropas.propTypes = {
	/**
	 * Determina si está abierto o no el modal.
	 */
	isOpen: PropTypes.bool,
	/**
	 * Lista de localizaciones del mapa
	 */
	locations: PropTypes.arrayOf(PropTypes.shape({})),
	/**
	 * Número máximo de tropas a desplazar del
	 * territorio de origen al territorio destino
	 * o con las que reforzar el territorio escogido.
	 */
	max: PropTypes.number,
	/**
	 * Estado de la partida
	 */
	estado: PropTypes.string,
	/**
	 * Función a ejecutar al aceptar la acción del modal
	 */
	onSubmit: PropTypes.string,
	/**
	 * Función para cambiar el estado del modal entre
	 * abierto y cerrado
	 */
	toggle: PropTypes.func,
}
