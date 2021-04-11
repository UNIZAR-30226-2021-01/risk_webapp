import React from 'react'
import PropTypes from 'prop-types'
import ErroresCampo from './ErroresCampo'
/**
 * EntradaAmigo es un campo de formulario para el nombre de usuario de un amigo
 */
export const EntradaAmigo = ({ register, errors }) => {
	return (
		<>
			<label htmlFor="nombre" className="grey-text">
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

EntradaAmigo.propTypes = {
	/**
	 * Registro del formulario al que pertenece.
	 */
	register: PropTypes.any,

	/**
	 * Errores del formulario correspondiente.
	 */
	errors: PropTypes.any,
}
