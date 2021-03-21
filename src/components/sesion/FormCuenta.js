import React from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/style.css";

/**
 * Representa un formulario de registro de la cuenta, si algún valor es incorrecto
 * no permite enviarlo.
 * Requisitos:
 * - Nombre de usuario no vacío
 * - Correo con formato de correo
 * - Contraseña de mínimo 8 caracteres, con al menos una mayúscula, minúscula, 
 * 		dígito y carácter especial.
 * @param {ObjectSesion} defaults Valores por defecto del formulario
 * @param {string} submitText Texto del botón de enviar formulario 
 * @param {función} makePetition Función ejecutada al enviar el formulario
 */
export const FormCuenta = ({ defaults, submitText, makePetition }) => {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			nombre: defaults.nombre ? defaults.nombre : "",
			correo: defaults.correo ? defaults.correo : "",
			clave: defaults.clave ? defaults.clave : "",
			recibeCorreos: defaults.recibeCorreos ? defaults.recibeCorreos : false,
		},
	});

	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState([])

	return (
		<div className="container cont-reg">
			<form
				id="registro"
				onSubmit={handleSubmit(async (formData) => {
					if (submitting){
						return false
					}
					setSubmitting(true)
					const data = await makePetition(formData)

					console.log(data)
					
					setSubmitting(false)
				})}
			>
				<div className="form-row">
					<label htmlFor="nombre"> Nombre de usuario</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						placeholder="Nombre de usuario"
						ref={register({ required: "Este campo no se puede dejar vacío." })}
					/>
					{errors.nombre ? <div> {errors.nombre.message}</div> : null}
				</div>

				<div className="form-row">
					<label htmlFor="correo"> Correo electrónico</label>
					<input
						type="email"
						name="correo"
						id="correo"
						placeholder="Correo"
						ref={register({ required: "Este campo no se puede dejar vacío." })}
					/>
					{errors.correo ? <div> {errors.correo.message}</div> : null}
				</div>

				<div className="form-row">
					<label htmlFor="contrasenya"> Contraseña</label>
					<input
						type="password"
						name="clave"
						id="clave"
						placeholder="Contraseña"
						ref={register({
							required: "Este campo no se puede dejar vacío.",
							minLength: {
								value: 8,
								message: "Tiene que haber mínimo 8 caracteres.",
							},
							validate: (value) => {
								return (
									[/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
										pattern.test(value)
									) ||
									"La contraseña debe incluir al menos una mayúscula, minúscula, un número y un carácter especial."
								);
							},
						})}
					/>
					{errors.clave ? <div> {errors.clave.message}</div> : null}
				</div>

				<div className="form-row">
					<label htmlFor="recibeCorreos"> Quiero recibir correo: </label>
					<input
						type="checkbox"
						name="recibeCorreos"
						id="recibeCorreos"
						ref={register()}
					/>
				</div>
				<div className="nav-buttons">
					<div className="btn btn-nav">
						<button type="button">Atrás</button>
					</div>
					<div className="btn btn-nav">
						<button type="submit" disabled={submitting}>{submitText}</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormCuenta;
