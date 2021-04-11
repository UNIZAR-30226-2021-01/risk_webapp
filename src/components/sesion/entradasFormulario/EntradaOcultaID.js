import React from 'react'

/**
 * EntradaOcultaHash es un campo oculto para el id del usuario.
 * @param {form} register Formulario al que pertenece
 * @param {int} value Id del usuario
 * @deprecated Usar la api de usuarioVO
 */
export const EntradaOcultaId = ({ register, value }) => {
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
