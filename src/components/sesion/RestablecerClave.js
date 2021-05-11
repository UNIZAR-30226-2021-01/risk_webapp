import React, { useState } from 'react'
import { MDBContainer, MDBBtn } from 'mdbreact'
import { useForm } from 'react-hook-form'
import { EntradaClave } from './entradasFormulario/EntradaClave'
import { ErroresServer } from './entradasFormulario/ErroresServer'
import { useHistory, useParams } from 'react-router-dom'
import { restablecerClave } from 'utils/restAPI'
import hash from 'js-sha256'
import './formActualizar.css'

/**
 * Muestra un formulario para establecer la nueva contraseña en una cuenta
 * dado un token recibido como parámetro en la URL.
 */
export const RestablecerClave = () => {
	const { token } = useParams()
	const history = useHistory()

	const { register, handleSubmit, errors } = useForm({ clave: '' })
	const [serverErrors, setServerErrors] = useState('')
	const [submitting, setSubmitting] = useState(false)

	return (
		<MDBContainer id="cont-actualizar">
			<h3> Introduzca la nueva contraseña</h3>
			<form
				id="registro"
				onSubmit={handleSubmit(async (formData) => {
					setSubmitting(true)
					let data = {
						clave: hash(formData.clave),
						token: token,
					}
					const dataServer = await restablecerClave(data)
					setSubmitting(false)
					if (dataServer.code !== 0) {
						setServerErrors(dataServer.err)
					} else {
						history.push('/inicioSesion')
					}
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<EntradaClave
					titulo={'Nueva contraseña'}
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
