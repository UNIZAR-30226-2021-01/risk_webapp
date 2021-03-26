import React from 'react'

/**
 * EntradaOcultaHash es un campo de formulario para el nombre de usuario
 * @param {form} register Formulario al que pertenece
 * @param {int} value Id del usuario
 */ 
export const EntradaOcultaId = ({register, value}) => {
    return (
		<>
			<input
				type="hidden"
				name="idUsuario"
				id="idUsuario"
				value={value}
				ref={register()}
			/>
		</>
    )
}