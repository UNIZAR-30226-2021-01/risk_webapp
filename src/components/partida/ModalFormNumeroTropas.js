import React, { useState } from 'react'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { MDBModal, MDBBtn, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { useForm } from 'react-hook-form'
import { EntradaNumero } from 'components/sesion/entradasFormulario/EntradaNumero'
import { ESTADOS } from './partidaEstados'

export const ModalFormNumeroTropas = ({
	isOpen,
	origen,
	destino,
	max,
	estado,
	onSubmit,
	toggle,
}) => {
	const { register, handleSubmit, errors } = useForm({ numero: 1 })
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	const [error, setErrors] = useState('')

	let mensaje = `¿Cuántas tropas se envían de ${origen} a ${destino}? (máx. ${max})`
	let MensajeError =
		'Mínimo se necesita mover 1 tropa y menos del total de las del continente.'

	if (estado === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO) {
		mensaje = `¿Cuántos refuerzos se envían a ${destino}? (máx. ${max})`
		MensajeError = `Se debe enviar como mínimo 1 refuerzo y como máximo el total de refuerzos restantes (${max})`
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
							(estado === ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO &&
								n > 0 &&
								n <= max) ||
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
