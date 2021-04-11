import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { EntradaNombre } from './entradasFormulario/EntradaNombre'
import { EntradaCorreo } from './entradasFormulario/EntradaCorreo'
import { EntradaClave } from './entradasFormulario/EntradaClave'
import { RecibeCorreos } from './entradasFormulario/RecibeCorreos'
import { ErroresServer } from './entradasFormulario/ErroresServer'
import hash from 'js-sha256'
//import "./formCuenta.css"
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact'
import AuthApi from '../../utils/AuthApi'

/**
 * Representa un formulario de registro de la cuenta, si algún valor es incorrecto
 * no permite enviarlo.
 * El formulario requiere que el nombre de usuario sea no vacío, el correo tenga
 * formato de correo y la contraseña sea no vacía.
 * @param {ObjectSesion} defaults Valores por defecto del formulario
 * @param {string} submitText Texto del botón de enviar formulario
 * @param {función} makePetition Función ejecutada al enviar el formulario
 * @param {función} siValido Función ejecutada si la comunicación con el server es válida
 */
export const FormRegistro = ({
	defaults,
	submitText,
	makePetition,
	siValido,
}) => {
	const Auth = useContext(AuthApi)
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			nombre: defaults.nombre ? defaults.nombre : '',
			correo: defaults.correo ? defaults.correo : '',
			clave: '',
			recibeCorreos: defaults.recibeCorreos ? defaults.recibeCorreos : false,
		},
	})

	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState('')

	return (
		<MDBContainer>
			<MDBRow className="d-flex align-items-center flex-column">
				<MDBCol md="6">
					<form
						id="registro"
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
								siValido(Auth, data)
							}
						})}
					>
						<ErroresServer serverErrors={serverErrors} />

						<EntradaNombre register={register} errors={errors} />

						<EntradaCorreo register={register} errors={errors} />

						<EntradaClave
							titulo={'Contraseña'}
							register={register}
							errors={errors}
						/>

						<RecibeCorreos register={register} errors={errors} />

						<div className="text-center mt-4">
							<MDBBtn
								className="btn-registro"
								type="submit"
								disabled={submitting}
							>
								{submitText}
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}

export default FormRegistro
