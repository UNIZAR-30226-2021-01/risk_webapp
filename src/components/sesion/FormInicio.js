import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EntradaUsuario } from "./entradasFormulario/EntradaUsuario";
import { EntradaClave } from "./entradasFormulario/EntradaClave";
import hash from 'js-sha256'
import "./formCuenta.css";

/**
 * Representa un formulario de inicio de sesión de la cuenta, si algún valor es incorrecto
 * no permite enviarlo.
 * Requisitos:
 * - @todo Campo de correo o nombre de usuario no vacío 
 * - Contraseña de mínimo 8 caracteres, con al menos una mayúscula, minúscula,
 * 		dígito y carácter especial.
 * @param {ObjectSesion} defaults Valores por defecto del formulario
 * @param {string} submitText Texto del botón de enviar formulario 
 * @param {función} makePetition Función ejecutada al enviar el formulario
 * @param {función} siValido Función ejecutada si la comunicación con el server es válida
 */
export const FormInicio = ({ defaults, submitText, makePetition, siValido }) => {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			usuario: defaults.usuario ? defaults.usuario : "",
			clave: defaults.clave ? defaults.clave : "",
		},
	});

	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState('')

	return (
		<div className="container cont-ini">
			<form
				id="inicio"
				onSubmit={
					handleSubmit(async (formData) => {
						if (submitting){
							return false
						}
						setSubmitting(true)
						let hashedForm = formData
						hashedForm.clave = hash.sha256(formData.clave)
						const data = await makePetition(hashedForm)

						if (data.err){
							setServerErrors(data.err)
						} else {
							setServerErrors('')
							siValido(data)
						}
						setSubmitting(false)
				})}
			>
				{(serverErrors !== '') && <div className="server-error">
					<p> ERROR-{serverErrors}</p>
				</div>}
				
				<EntradaUsuario register={register} errors={errors}/>

				<EntradaClave titulo={'Contraseña'} register={register} errors={errors}/>
				
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

export default FormInicio;
