import React from 'react'

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

			{errors.usuario ? <div className="alert alert-danger" style={{paddingTop: "5px"}}> <hr />{errors.usuario.message}</div> : null}
		</>
    )
}
