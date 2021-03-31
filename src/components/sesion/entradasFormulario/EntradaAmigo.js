import React from 'react'
import ErroresCampo from './ErroresCampo'
/**
 * EntradaAmigo es un campo de formulario para el nombre de usuario de un amigo
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro
 */
export const EntradaAmigo = ({ register, errors }) => {
	return (
		<>
			<label htmlFor="nombre" className="grey-text">
				{' '}
				Nombre de usuario
			</label>
			<input
				type="text"
				name="nombreAmigo"
				id="nombreAmigo"
				className="form-control"
				placeholder="Nombre de usuario"
				ref={register({
					required: 'Este campo no se puede dejar vacío.',
					validate: (value) => {
						return (
							[/[^@]/].every((pattern) => pattern.test(value)) ||
							'El nombre de usuario no puede contener @'
						)
					},
				})}
			/>

			<ErroresCampo error={errors.nombre} />
		</>
	)
}
