import React from 'react'
/**
 * RecibeCorreos es un campo de formulario para la recepción de correos
 * @param {form} register Formulario al que pertenece
 */
export const RecibeCorreos = ({ register }) => {
	return (
		<>
			<label htmlFor="recibeCorreos" className="grey-text">
				{' '}
				Quiero recibir correo:{' '}
			</label>
			<input
				type="checkbox"
				name="recibeCorreos"
				id="recibeCorreos"
				className="form-control"
				ref={register()}
			/>
		</>
	)
}
