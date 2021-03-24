import React from 'react'

/**
 * EntradaCorreo es un campo de formulario para el correo
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro 
 */
export const EntradaCorreo = ({register, errors}) => {
	return (
		<>
			<label htmlFor="correo" className="grey-text"> Correo electrónico</label>
			<input
				type="email"
				name="correo"
				id="correo"
				className="form-control"
				placeholder="Correo"
				ref={register({ required: "Este campo no se puede dejar vacío." })}
			/>
			
			{errors.correo ? <div className="alert alert-danger"> {errors.correo.message}</div> : null}
		</>
	)
}
