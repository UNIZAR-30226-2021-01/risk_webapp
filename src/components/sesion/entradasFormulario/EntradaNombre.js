import React from 'react'
import PropTypes from 'prop-types'
import ErroresCampo from './ErroresCampo'

/**
 * EntradaNumero es un campo de formulario para un numero.
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro
 */
export const EntradaNombre = ({
	register,
	errors,
	texto = 'Nombre de usuario',
	label = 'nombre',
}) => {
	return (
		<>
			<label htmlFor={label} className="grey-text">
				{texto}
			</label>
			<input
				type="text"
				name={label}
				id={label}
				className="form-control"
				placeholder="Nombre"
				ref={register({
					required: 'Este campo no se puede dejar vacío.',
					validate: (value) => {
						return (
							[/[^@]/].every((pattern) => pattern.test(value)) ||
							'El {label} no puede contener @'
						)
					},
				})}
			/>

			<ErroresCampo error={errors[label]} />
		</>
	)
}

EntradaNombre.propTypes = {
	/**
	 * Registro del formulario al que pertenece.
	 */
	register: PropTypes.any,

	/**
	 * Errores del formulario correspondiente.
	 */
	errors: PropTypes.any,

	/**
	 * Texto de la etiqueta.
	 */
	texto: PropTypes.string,

	/**
	 * Etiqueta del formulario.
	 */
	label: PropTypes.string,
}
