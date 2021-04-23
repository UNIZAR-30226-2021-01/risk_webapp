import React, { useState } from 'react'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { MDBModal, MDBBtn, MDBModalHeader, MDBModalBody } from 'mdbreact'
import { useForm } from 'react-hook-form'
import { EntradaNumero } from 'components/sesion/entradasFormulario/EntradaNumero'

export const ModalFormNumeroTropas = ({
	isOpen,
	origen,
	destino,
	max,
	onSubmit,
	toggle,
}) => {
	const { register, handleSubmit, errors } = useForm({ numero: 1 })
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	const [error, setErrors] = useState('')

	return (
		<MDBModal isOpen={isOpen} toggle={toggle}>
			<MDBModalHeader>
				¿Cuántas tropas se envían de {origen} a {destino}? (máx. {max})
			</MDBModalHeader>
			<MDBModalBody>
				<form
					id="registro"
					onSubmit={handleSubmit((formData) => {
						let n = parseInt(formData.n)
						if (n > 0 && n < max) {
							setErrors('')
							setSubmitting(true)
							onSubmit(formData)
							setSubmitting(false)
						} else {
							setErrors(
								'Mínimo se necesita mover 1 tropa y menos del total de las del continente.'
							)
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
