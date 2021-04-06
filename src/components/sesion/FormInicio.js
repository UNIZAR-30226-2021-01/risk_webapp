import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { EntradaUsuario } from './entradasFormulario/EntradaUsuario'
import { EntradaClave } from './entradasFormulario/EntradaClave'
import { ErroresServer } from './entradasFormulario/ErroresServer'
import hash from 'js-sha256'
//import "./formCuenta.css";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact'
import AuthApi, { registrarseLocal } from './../../utils/AuthApi.js'

/**
 * Representa un formulario de inicio de sesión de la cuenta, si algún valor es incorrecto
 * no permite enviarlo.
 * ## Requisitos:
 * - @todo Campo de correo o nombre de usuario no vacío
 * - Contraseña no vacía
 * @param {ObjectSesion} defaults Valores por defecto del formulario
 * @param {string} submitText Texto del botón de enviar formulario
 * @param {función} makePetition Función ejecutada al enviar el formulario
 */
export const FormInicio = ({ defaults, submitText, makePetition }) => {
	const Auth = useContext(AuthApi)

	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			usuario: defaults.usuario ? defaults.usuario : '',
			clave: defaults.clave ? defaults.clave : '',
		},
	})

	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Errores del servidor
	const [serverErrors, setServerErrors] = useState('')

	return (
		<MDBContainer>
			<MDBRow className="d-flex align-items-center flex-column">
				<MDBCol md="6">
					<form
						id="inicio"
						onSubmit={handleSubmit(async (formData) => {
							if (submitting) {
								return false
							}
							setSubmitting(true)
							let hashedForm = formData
							hashedForm.clave = hash.sha256(formData.clave)
							const data = await makePetition(hashedForm)

							setSubmitting(false)
							if (data.err) {
								setServerErrors(data.err)
							} else {
								setServerErrors('')
								registrarseLocal(Auth, data)
							}
						})}
					>
						<ErroresServer serverErrors={serverErrors} />

						<EntradaUsuario register={register} errors={errors} />

						<EntradaClave
							titulo={'Contraseña'}
							register={register}
							errors={errors}
						/>

						<div className="text-center mt-4">
							<MDBBtn type="submit" disabled={submitting}>
								{submitText}
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}

export default FormInicio
