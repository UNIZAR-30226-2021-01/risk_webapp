import React from 'react'
import PropTypes from 'prop-types'
import ErroresCampo from './ErroresCampo'

/**
 * EntradaCorreo es un campo de formulario para el correo que
 * verifica que lo introducido tenga forma de correo.
 */
export const EntradaCorreo = ({ register, errors }) => {
	return (
		<>
			<label htmlFor="correo" className="black-text">
				{' '}
				Correo electrónico (opcional)
			</label>
			<input
				type="text"
				name="correo"
				id="correo"
				className="form-control"
				placeholder="Correo"
				ref={register()}
			/>

			<ErroresCampo error={errors.correo} />
		</>
	)
}

EntradaCorreo.propTypes = {
	/**
	 * Registro del formulario al que pertenece.
	 */
	register: PropTypes.any,

	/**
	 * Errores del formulario correspondiente.
	 */
	errors: PropTypes.any,
}
