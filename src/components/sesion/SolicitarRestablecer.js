import React, { useState } from 'react'
import { MDBContainer, MDBBtn } from 'mdbreact'
import { useForm } from 'react-hook-form'
import { EntradaCorreo } from './entradasFormulario/EntradaCorreo'
import { ErroresServer } from './entradasFormulario/ErroresServer'
import { solicitarRestablecerClave } from 'utils/restAPI'
import './formActualizar.css'
import { OkServer } from './entradasFormulario/OkServer'

export const SolicitarRestablecer = () => {
	const { register, handleSubmit, errors } = useForm({ clave: '' })
	const [serverErrors, setServerErrors] = useState('')
	const [submitting, setSubmitting] = useState(false)
	const [serverOk, setServerOk] = useState('')

	return (
		<MDBContainer id="cont-actualizar">
			<h3>
				Introduca su correo para solicitar el restablecimiento de la contraseña.
			</h3>
			<form
				id="registro"
				onSubmit={handleSubmit(async (formData) => {
					setSubmitting(true)
					let data = {
						correo: formData.correo,
					}
					const dataServer = await solicitarRestablecerClave(data)
					setSubmitting(false)
					if (dataServer.code !== 0) {
						setServerOk('')
						setServerErrors(dataServer.err)
					} else {
						setServerOk(
							'En breve le enviaremos un correo con las instrucciones para restablecer la contraseña.'
						)
						setServerErrors('')
					}
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<OkServer serverOk={serverOk} />
				<EntradaCorreo
					titulo={'Introduzca su correo:'}
					register={register}
					errors={errors}
				/>
				<div className="text-center mt-4">
					<MDBBtn type="submit" disabled={submitting}>
						Restablecer
					</MDBBtn>
				</div>
			</form>
		</MDBContainer>
	)
}
