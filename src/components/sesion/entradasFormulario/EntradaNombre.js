import React from 'react'

/**
 * EntradaNombre es un campo de formulario para el nombre de usuario
 * @param {form} register Formulario al que pertenece
 * @param {errors_form} errors Errores del registro 
 */
export const EntradaNombre = ({register, errors}) => {
    return (
		<>
				<label htmlFor="nombre" className="grey-text"> Nombre de usuario</label>
				<input
					type="text"
					name="nombre"
					id="nombre"
					className="form-control"
					placeholder="Nombre de usuario"
					ref={register({
					required: "Este campo no se puede dejar vacío."	,
					validate: (value) => {
					return (
						[/[^@]/].every((pattern) =>
						pattern.test(value)
						) ||
						"El nombre de usuario no puede contener @"
					);
					}
					})}
				/>
				
			{errors.nombre ? <div className="alert alert-danger"> {errors.nombre.message}</div> : null}
		</>
    )
}
