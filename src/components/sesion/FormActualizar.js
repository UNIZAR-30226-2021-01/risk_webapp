import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { EntradaNombre } from "./entradasFormulario/EntradaNombre"
import { EntradaCorreo } from "./entradasFormulario/EntradaCorreo"
import { EntradaClave } from "./entradasFormulario/EntradaClave"
import { EntradaCambioClave } from "./entradasFormulario/EntradaCambioClave"
import { RecibeCorreos } from "./entradasFormulario/RecibeCorreos"
import { ErroresServer } from "./entradasFormulario/ErroresServer"
import hash from "js-sha256"
import { MDBContainer, MDBCol, MDBRow, MDBBtn} from "mdbreact"
/**
 * Representa un formulario de actualización de la cuenta, si algún valor es incorrecto
 * no permite enviarlo. Solo envía los cambios de los valores modificados. La clave
 * Requisitos:
 * - Nombre de usuario no vacío
 * - Correo con formato de correo
 * - Contraseña de mínimo 8 caracteres, con al menos una mayúscula, minúscula,
 * 		dígito y carácter especial.
 * 
 * @param {ObjectSesion} defaults Valores por defecto del formulario
 * @param {string} submitText Texto del botón de enviar formulario 
 * @param {función} submitData Función ejecutada al enviar el formulario
 */
export const FormActualizar = ({ defaults, submitText, submitData}) => {
	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			nombre: defaults.nombre ? defaults.nombre : "",
			correo: defaults.correo ? defaults.correo : "",
			clave: defaults.clave ? defaults.clave : "",
			recibeCorreos: defaults.recibeCorreos ? defaults.recibeCorreos : false,
            cambioClave: defaults.cambioClave ? defaults.cambioClave : false,
		},
	});

	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState('')

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<form
						id="registro"
						onSubmit={
						handleSubmit(async (formData) => {
							if (submitting){
								return false
							}
							setSubmitting(true)
							let hashedForm = formData
							hashedForm.clave = hash.sha256(formData.clave)
							const data = await submitData(hashedForm)
							setServerErrors(data.err)
							setSubmitting(false)
						})}
					>
						<ErroresServer serverErrors={serverErrors} />

						<EntradaNombre register={register} errors={errors}/>

						<EntradaCorreo register={register} errors={errors}/>

						<EntradaClave titulo={'Contraseña'} register={register} errors={errors}/>

						<EntradaCambioClave titulo={'Quiero cambiar mi clave:'} register={register} errors={errors}/>
					
						<RecibeCorreos register={register} errors={errors}/>

						<div className="text-center mt-4">
							<MDBBtn color="indigo" type="submit" disabled={submitting}>{submitText}</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default FormActualizar;

