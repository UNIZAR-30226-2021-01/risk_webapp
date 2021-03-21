import React from 'react'

export const EntradaNombre = ({register, errors}) => {
    return (
        <div className="form-row">
			<label htmlFor="nombre"> Nombre de usuario</label>
			<input
				type="text"
				name="nombre"
				id="nombre"
				placeholder="Nombre de usuario"
				ref={register()}
			/>
			{errors.nombre ? <div> {errors.nombre.message}</div> : null}
		</div>
    )
}
