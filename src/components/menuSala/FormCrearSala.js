import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MDBBtn } from 'mdbreact'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { OkServer } from 'components/sesion/entradasFormulario/OkServer'
import { EntradaNombre } from 'components/sesion/entradasFormulario/EntradaNombre'
import { EntradaOcultaId } from 'components/sesion/entradasFormulario/EntradaOcultaID'
import { EntradaOcultaHash } from 'components/sesion/entradasFormulario/EntradaOcultaHash'
import { EntradaNumero } from 'components/sesion/entradasFormulario/EntradaNumero'

export const FormCrearSala = ({ enviarSolicitud }) => {
	const { register, handleSubmit, errors } = useForm({ nombre: '' })
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState('')
	// SetOk
	const [serverOk, setServerOk] = useState('')
	return (
		<div>
			<form
				id="crearSala"
				onSubmit={handleSubmit(async (formData) => {
					formData.tiempoTurno = parseInt(formData.tiempoTurno)

					setSubmitting(true)
					setServerOk('')
					enviarSolicitud(formData)
					setSubmitting(false)
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<OkServer serverOk={serverOk} />

				<EntradaNombre
					register={register}
					errors={errors}
					texto="Nombre de la sala"
					label="nombreSala"
				/>
				<EntradaNumero
					register={register}
					errors={errors}
					texto="Tiempo de turno (en minutos)"
					label="tiempoTurno"
				/>

				<div className="text-center mt-4">
					<MDBBtn color="indigo" type="submit" disabled={submitting}>
						Crear sala
					</MDBBtn>
				</div>
			</form>
		</div>
	)
}
