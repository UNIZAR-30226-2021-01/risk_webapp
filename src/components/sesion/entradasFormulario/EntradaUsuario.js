import React from 'react'
import PropTypes from 'prop-types'
import ErroresCampo from './ErroresCampo'

/**
 * Campo de formulario para nombre de usuario o correo.
 */
export const EntradaUsuario = ({ register, errors }) => {
	return (
		<>
			<label htmlFor="usuario" className="grey-text">
				{' '}
				Correo o usuario
			</label>
			<input
				type="text"
				name="usuario"
				id="usuario"
				className="form-control"
				placeholder="Correo o usuario"
				ref={register()}
			/>

			<ErroresCampo error={errors.usuario} />
		</>
	)
}

EntradaUsuario.propTypes = {
	/**
	 * Registro del formulario al que pertenece.
	 */
	register: PropTypes.any,

	/**
	 * Errores del formulario correspondiente.
	 */
	errors: PropTypes.any,
}
