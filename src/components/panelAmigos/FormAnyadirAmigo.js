import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { MDBContainer, MDBBtn} from "mdbreact"
import {EntradaNombre} from './../sesion/entradasFormulario/EntradaNombre'
import {ErroresServer} from './../sesion/entradasFormulario/ErroresServer'

export const FormAnyadirAmigo = () => {
	const { register, handleSubmit, errors } = useForm({nombre: ""})
	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Array de strings
	const [serverErrors, setServerErrors] = useState('')
	
	const submitAnyadirAmigo = (formData) => {
		setSubmitting(true)
		console.log(formData, "Añadido")
		setSubmitting(false)
	}

	return (
		<MDBContainer>
			<form
				id="registro"
				onSubmit={handleSubmit((formData) => {
					submitAnyadirAmigo(formData);
				})}
			>
				<ErroresServer serverErrors={serverErrors} />
				<EntradaNombre register={register} errors={errors}/>
				<div className="text-center mt-4">
					<MDBBtn color="indigo" type="submit" disabled={submitting}>Enviar solicitud </MDBBtn>
				</div>
			</form>
		</MDBContainer>
			
	)
}
