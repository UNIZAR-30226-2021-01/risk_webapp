import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { MDBContainer, MDBBtn } from 'mdbreact'
import { EntradaAmigo } from './../sesion/entradasFormulario/EntradaAmigo'
import { ErroresServer } from './../sesion/entradasFormulario/ErroresServer'
import { OkServer } from './../sesion/entradasFormulario/OkServer'
import { obtenerCredenciales } from 'utils/usuarioVO'
import AuthApi from 'utils/AuthApi'

/**
 * Formulario para añadir un amigo mediante su nombre de usuario.
 */
export const FormAnyadirAmigo = ({ enviarSolicitud }) => {
	const Auth = useContext(AuthApi)

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
					formData = {
						...formData,
						...obtenerCredenciales(Auth),
					}
					const data = await enviarSolicitud(formData)
					setSubmitting(false)
					setServerErrors(data.err)
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<OkServer serverOk={serverOk} />

				<EntradaAmigo register={register} errors={errors} />

				<div className="text-center mt-4">
					<MDBBtn color="indigo" type="submit" disabled={submitting}>
						Enviar solicitud{' '}
					</MDBBtn>
				</div>
			</form>
		</MDBContainer>
	)
}

FormAnyadirAmigo.propTypes = {
	/**
	 * Función para enviar la solicitud
	 * @param {datos_formulario} formData
	 */
	enviarSolicitud: PropTypes.func,
}
