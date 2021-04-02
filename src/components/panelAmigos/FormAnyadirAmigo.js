import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MDBContainer, MDBBtn } from 'mdbreact'
import { EntradaAmigo } from './../sesion/entradasFormulario/EntradaAmigo'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { OkServer } from './../sesion/entradasFormulario/OkServer'
import { EntradaOcultaId } from '../sesion/entradasFormulario/EntradaOcultaID'
import { EntradaOcultaHash } from '../sesion/entradasFormulario/EntradaOcultaHash'

export const FormAnyadirAmigo = ({ usuario, enviarSolicitud }) => {
	const { register, handleSubmit, errors } = useForm({ nombre: '' })
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState('')
	// SetOk
	const [serverOk, setServerOk] = useState('')

	return (
		<MDBContainer>
			<form
				id="registro"
				onSubmit={handleSubmit(async (formData) => {
					setSubmitting(true)
					setServerErrors('')
					setServerOk('')
					console.log(formData, 'amigo')
					const data = await enviarSolicitud(formData)
					console.log(data, '?¿?¿?¿?¿?¿')
					setSubmitting(false)
					if (data.code === 0) {
						setServerOk('Solicitud enviada correctamente.')
					} else {
						setServerErrors(data.err)
					}
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<OkServer serverOk={serverOk} />

				<EntradaAmigo register={register} errors={errors} />
				<EntradaOcultaId register={register} value={usuario.id} />
				<EntradaOcultaHash register={register} value={usuario.clave} />

				<div className="text-center mt-4">
					<MDBBtn color="indigo" type="submit" disabled={submitting}>
						Enviar solicitud{' '}
					</MDBBtn>
				</div>
			</form>
		</MDBContainer>
	)
}
