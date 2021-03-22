import React from 'react'

/**
 * EntradaCorreo es un campo de formulario para el correo
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro 
 */
export const EntradaCorreo = ({register, errors}) => {
	return (
		<React.Fragment>
			<div className="form-row">
			<label htmlFor="correo"> Correo electrónico</label>
			<input
				type="email"
				name="correo"
				id="correo"
				placeholder="Correo"
				ref={register({ required: "Este campo no se puede dejar vacío." })}
			/>
			
			</div>
			{errors.correo ? <div className="error"> {errors.correo.message}</div> : null}
		</React.Fragment>
	)
}
