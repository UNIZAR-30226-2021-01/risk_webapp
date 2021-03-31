import React from 'react'

/**
 * EntradaCambioClave es un campo de formulario para decir que quieres
 * cambiar la clave
 * @param {string} titulo Etiqueta para el cambio
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro
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
