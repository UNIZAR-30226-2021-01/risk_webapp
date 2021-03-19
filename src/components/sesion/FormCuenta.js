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
 * @param {función} handleOnSubmit Función ejecutada al enviar el formulario
 */
export const FormCuenta = ({ defaults, submitText, handleOnSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			usuario: defaults.usuario ? defaults.usuario : "",
			correo: defaults.correo ? defaults.correo : "",
			contrasenya: defaults.contrasenya ? defaults.contrasenya : "",
			recibirCorreo: defaults.recibirCorreo ? defaults.recibirCorreo : false,
		},
	});

	return (
		<div className="container cont-reg">
			<form
				id="registro"
				onSubmit={handleSubmit((formData) => {
					handleOnSubmit(formData);
				})}
			>
				<div className="form-row">
					<label htmlFor="usuario"> Nombre de usuario</label>
					<input
						type="text"
						name="usuario"
						id="usuario"
						placeholder="Nombre de Usuario"
						ref={register({ required: "Este campo no se puede dejar vacío." })}
					/>
					{errors.usuario ? <div> {errors.usuario.message}</div> : null}
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
						name="contrasenya"
						id="contrasenya"
						placeholder="Contraseña"
						ref={register({
							required: "required",
							minLength: {
								value: 8,
								message: "Tiene que haber mínimo 8 caracteres",
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
					{errors.contrasenya ? <div> {errors.contrasenya.message}</div> : null}
				</div>

				{/* 
			<div>
				<label htmlFor="contrasenyaConf"> Quiero recibir notificaciones por correo: </label>
				<input type="password" name="contrasenyaConf" id="contrasenyaConf" placeholder="Confirmar contraseña" ref={register({
					required: "required",
					validate: (value) => {
						console.log(register.contrasenya)
						return value === register.contrasenya || "Las contraseñas deben coincidir."
					}
					})}/>
				{errors.passwor ? <div> {errors.name.message}</div> : null}
			</div>
			*/}

				<div className="form-row">
					<label htmlFor="recibirCorreo"> Quiero recibir correo: </label>
					<input
						type="checkbox"
						name="recibirCorreo"
						id="recibirCorreo"
						ref={register()}
					/>
				</div>
				<div class="nav-buttons">
					<div class="btn btn-nav">
						<button type="button">Atrás</button>
					</div>
					<div class="btn btn-nav">
						<button type="submit">{submitText}</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormCuenta;
