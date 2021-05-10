import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { MDBContainer, MDBBtn } from 'mdbreact'
import { EntradaNombre } from 'components/sesion/entradasFormulario/EntradaNombre'
import { EntradaNumero } from 'components/sesion/entradasFormulario/EntradaNumero'
import './Sala.css'

/**
 * Formulario de creación de sala, contiene un campo para el nombre y
 * otro para el tiempo de turno.
 */
export const FormCrearSala = ({ enviarSolicitud }) => {
	const { register, handleSubmit, errors } = useForm({ nombre: '' })
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	return (
		<MDBContainer id="panelSala">
			<form
				id="crearSala"
				onSubmit={handleSubmit(async (formData) => {
					formData.tiempoTurno = parseInt(formData.tiempoTurno)

					setSubmitting(true)
					await enviarSolicitud(formData)
					setSubmitting(false)
				})}
			>
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
		</MDBContainer>
	)
}

FormCrearSala.propTypes = {
	/**
	 * @param {Datos_formulario} formData
	 */
	enviarSolicitud: PropTypes.func,
}
