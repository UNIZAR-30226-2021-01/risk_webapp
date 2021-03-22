import React from 'react'

export const EntradaUsuario = ({register, errors}) => {
    return (
		<React.Fragment>
			<div className="form-row">
				<label htmlFor="usuario"> Correo o usuario</label>
				<input
					type="text"
					name="usuario"
					id="usuario"
					placeholder="Correo o usuario"
					ref={register()}
				/>
				
			</div>
			{errors.usuario ? <div className="error"> {errors.usuario.message}</div> : null}
		</React.Fragment>
    )
}
