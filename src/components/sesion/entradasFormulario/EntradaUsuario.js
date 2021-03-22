import React from 'react'

export const EntradaUsuario = ({register, errors}) => {
    return (
        <div className="form-row">
			<label htmlFor="usuario"> Correo o usuario</label>
			<input
				type="text"
				name="usuario"
				id="usuario"
				placeholder="Correo o usuario"
				ref={register()}
			/>
			{errors.usuario ? <div> {errors.usuario.message}</div> : null}
		</div>
    )
}
