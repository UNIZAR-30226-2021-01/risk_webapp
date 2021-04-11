import React from 'react'
import PropTypes from 'prop-types'

/**
 * EntradaCambioClave es un campo de formulario para indicar que se quiere
 * cambiar la clave.
 */
export const EntradaCambioClave = ({ titulo, register, errors }) => {
	return (
		<>
			<label htmlFor="cambioClave" className="grey-text">
				{' '}
				{titulo}
			</label>
			<input
				type="checkbox"
				name="cambioClave"
				id="cambioClave"
				className="form-control"
				ref={register()}
			/>

			{errors.cambioClave ? (
				<div className="alert alert-danger"> {errors.cambioClave.message}</div>
			) : null}
		</>
	)
}

EntradaCambioClave.propTypes = {
	/**
	 * Etiqueta de título.
	 */
	titulo: PropTypes.string,

	/**
	 * Registro del formulario al que pertenece.
	 */
	register: PropTypes.any,

	/**
	 * Errores del formulario correspondiente.
	 */
	errors: PropTypes.any,
}
