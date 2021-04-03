import React from 'react'
import ErroresCampo from './ErroresCampo'

/**
 * EntradaNombre es un campo de formulario para el nombre de usuario
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro
 */
export const EntradaNombre = ({ register, errors }) => {
	return (
		<>
			<label htmlFor="nombre" className="grey-text">
				Nombre de usuario
			</label>
			<input
				type="text"
				name="nombre"
				id="nombre"
				className="form-control"
				placeholder="Nombre"
				ref={register({
					required: 'Este campo no se puede dejar vacío.',
					validate: (value) => {
						return (
							[/[^@]/].every((pattern) => pattern.test(value)) ||
							'El nombre no puede contener @'
						)
					},
				})}
			/>

			<ErroresCampo error={errors.nombre} />
		</>
	)
}
