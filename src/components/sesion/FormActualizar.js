import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { EntradaNombre } from './entradasFormulario/EntradaNombre'
import { EntradaCorreo } from './entradasFormulario/EntradaCorreo'
import { EntradaClave } from './entradasFormulario/EntradaClave'
import { EntradaImg } from './entradasFormulario/EntradaImg'
import { EntradaCambioClave } from './entradasFormulario/EntradaCambioClave'
import { RecibeCorreos } from './entradasFormulario/RecibeCorreos'
import { ErroresServer } from './entradasFormulario/ErroresServer'
import hash from 'js-sha256'
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact'

import './formActualizar.css'
import iconosJS from 'assets/iconos/iconos'
import aspectosJS from 'assets/tropas/tropas'

/**
 * Representa un formulario de actualización de la cuenta, si algún valor es incorrecto
 * no permite enviarlo. Solo envía los cambios de los valores modificados. Para cambiar
 * la clave hay que marcar la casilla e introducir la contraseña nueva.
 * El formulario pide que el nombre de usuario sea no vacío, el correo tenga formato de
 * correo y la contraseña sea no vacía.
 *
 * @param {ObjectSesion} defaults Valores por defecto del formulario
 * @param {string} submitText Texto del botón de enviar formulario
 * @param {función} submitData Función ejecutada al enviar el formulario
 * @param {array_objeto} iconos Lista de iconos disponibles del usuario
 * @param {array_objeto} aspectos Lista de aspectos disponibles del usuario
 */
export const FormActualizar = ({
	defaults,
	submitText,
	submitData,
	iconos,
	aspectos,
}) => {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			nombre: defaults.nombre ? defaults.nombre : '',
			icono: defaults.icono ? defaults.icono : 1,
			aspecto: defaults.aspecto ? defaults.aspecto : 1,
			correo: defaults.correo ? defaults.correo : '',
			clave: '1',
			recibeCorreos: defaults.recibeCorreos ? defaults.recibeCorreos : false,
			cambioClave: defaults.cambioClave ? defaults.cambioClave : false,
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
							setServerErrors('')
							let hashedForm = formData
							hashedForm.clave = hash.sha256(formData.clave)
							const data = await submitData(hashedForm)
							console.log(data)
							if (data.code !== 0) {
								setServerErrors(data.err)
							}
							setSubmitting(false)
						})}
					>
						<ErroresServer serverErrors={serverErrors} />

						<EntradaImg
							register={register}
							errors={errors}
							tag="icono"
							disponibles={iconos}
							inicial={defaults.icono}
							imagenes={iconosJS}
						/>

						<EntradaImg
							register={register}
							errors={errors}
							tag="aspecto"
							disponibles={aspectos}
							inicial={defaults.aspecto}
							imagenes={aspectosJS}
						/>

						<EntradaNombre register={register} errors={errors} />

						<EntradaCorreo register={register} errors={errors} />

						<EntradaClave
							titulo={'Contraseña'}
							register={register}
							errors={errors}
						/>

						<EntradaCambioClave
							titulo={'Quiero cambiar mi clave:'}
							register={register}
							errors={errors}
						/>

						<RecibeCorreos register={register} errors={errors} />

						<div className="text-center mt-4">
							<MDBBtn color="indigo" type="submit" disabled={submitting}>
								{submitText}
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}

FormActualizar.propTypes = {
	/**
	 * Valores por defecto del formulario
	 */
	defaults: PropTypes.any,

	/**
	 * Texto del botón de enviar formulario
	 */
	submitText: PropTypes.string,

	/**
	 * Función que se ejecutarla al enviar el formulario.
	 * @param {datos_formulario} formData
	 * @returns code y err
	 */
	submitData: PropTypes.func,

	iconos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		})
	),

	aspectos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
		})
	),
}

export default FormActualizar
