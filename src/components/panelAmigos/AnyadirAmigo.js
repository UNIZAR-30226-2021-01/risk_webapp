import React from 'react'
import { useForm } from "react-hook-form";
import Popup from 'reactjs-popup';

/**
 * Implementa un pop-up para añadir un amigo, este pop-up contiene
 * un formulario donde insertar el nombre del amigo.
 * @todo Conexión con servidor, css...
 */
export const AnyadirAmigo = () => {
	const { register, handleSubmit, errors } = useForm({nombre: ""})

	const submitAnyadirAmigo = (formData) => {
		console.log(formData, "Añadido")
	}

	return (
	<Popup trigger={<button className="btn"> Añadir amigo </button>} modal nested >
		{close => (
		<div className="modal">
			<button className="close" onClick={close}>
				&times;
			</button>
			<div className="header"> Añadir amigo </div>
			<div className="content">
				<div className="form-row">
					<form
						id="registro"
						onSubmit={handleSubmit((formData) => {
							submitAnyadirAmigo(formData);
						})}
					>
						<label htmlFor="nombre"> Nombre de usuario de tu amigo</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							placeholder="Nombre de usuario"
							ref={register({ required: "Este campo no se puede dejar vacío." })}
						/>
						{errors.nombre ? <div> {errors.nombre}</div> : null}

						<button className="submit" type="submit" >
							Enviar
						</button>
					</form>
				</div>
			</div>
		</div>
  		)}
	</Popup> 
	)
}

export default AnyadirAmigo;
