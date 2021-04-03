import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MDBBtn } from 'mdbreact'
import { ErroresServer } from 'components/sesion/entradasFormulario/ErroresServer'
import { OkServer } from 'components/sesion/entradasFormulario/OkServer'
import { EntradaNombre } from 'components/sesion/entradasFormulario/EntradaNombre'
import { EntradaOcultaId } from 'components/sesion/entradasFormulario/EntradaOcultaID'
import { EntradaOcultaHash } from 'components/sesion/entradasFormulario/EntradaOcultaHash'

export const FormCrearSala = ({ usuario, enviarSolicitud, siValido }) => {
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
					setSubmitting(true)
					setServerErrors('')
					setServerOk('')
					console.log(formData, 'amigo')
					const data = await enviarSolicitud(formData)
					console.log(data, '?¿?¿?¿?¿?¿')
					setSubmitting(false)
					if (data.code === 0) {
						siValido(formData)
					} else {
						setServerErrors(data.err)
					}
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<OkServer serverOk={serverOk} />

				<EntradaNombre register={register} errors={errors} />
				<EntradaOcultaId register={register} value={usuario.id} />
				<EntradaOcultaHash register={register} value={usuario.clave} />

				<div className="text-center mt-4">
					<MDBBtn color="indigo" type="submit" disabled={submitting}>
						Crear sala
					</MDBBtn>
				</div>
			</form>
		</div>
	)
}
