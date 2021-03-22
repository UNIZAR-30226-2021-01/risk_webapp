import React from 'react'
/**
 * RecibeCorreos es un campo de formulario para la recepción de correos
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro 
 */
export const RecibeCorreos = ({register, errors}) => {
    return (
		<div className="form-row">
			<label htmlFor="recibeCorreos"> Quiero recibir correo: </label>
			<input
				type="checkbox"
				name="recibeCorreos"
				id="recibeCorreos"
				ref={register()}
			/>
		</div>
    )
}
