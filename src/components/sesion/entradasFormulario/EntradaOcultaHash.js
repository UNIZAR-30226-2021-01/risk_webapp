import React from 'react'

/**
 * EntradaOcultaHash es un campo de formulario para el nombre de usuario
 * @param {form} register Formulario al que pertenece
 * @param {int} value Hash de la contraseña del usuario
 */ 
export const EntradaOcultaHash = ({register, value}) => {
    return (
		<>
			<input
				type="hidden"
				name="clave"
				id="clave"
				value={value}
				ref={register()}
			/>
		</>
    )
}