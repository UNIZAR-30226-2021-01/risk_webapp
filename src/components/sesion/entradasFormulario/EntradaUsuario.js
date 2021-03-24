import React from 'react'
import ErroresCampo from './ErroresCampo'

export const EntradaUsuario = ({register, errors}) => {
    return (
		<>
			<label htmlFor="usuario" className="grey-text"> Correo o usuario</label>
			<input
				type="text"
				name="usuario"
				id="usuario"
				className="form-control"
				placeholder="Correo o usuario"
				ref={register()}
			/>

			<ErroresCampo error={errors.usuario} />
		</>
    )
}
