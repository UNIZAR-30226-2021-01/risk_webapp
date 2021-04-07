import React from 'react'
import ErroresCampo from './ErroresCampo'

/**
 * EntradaNombre es un campo de formulario para un numero
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro
 */
export const EntradaNumero = ({
	register,
	errors,
	texto = 'Numero',
	label = 'Tiempo',
}) => {
	return (
		<>
			<label htmlFor={label} className="grey-text">
				{texto}
			</label>
			<input
				type="number"
				name={label}
				id={label}
				className="form-control"
				placeholder="0"
				ref={register()}
			/>

			<ErroresCampo error={errors.numero} />
		</>
	)
}
