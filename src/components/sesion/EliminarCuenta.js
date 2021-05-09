import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import hash from 'js-sha256'
import { logOut } from 'utils/AuthApi'
import { borrarCuenta } from 'utils/restAPI'
import { obtenerIdUsuario } from 'utils/usuarioVO'
import AuthApi from 'utils/AuthApi'
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact'
import { EntradaClave } from './entradasFormulario/EntradaClave'
import { ErroresServer } from './entradasFormulario/ErroresServer'

export const EliminarCuenta = () => {
	const Auth = useContext(AuthApi)

	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			clave: '',
		},
	})

	// Si se está enviando un formulario
	const [submitting, setSubmitting] = useState(false)
	// Errores del servidor
	const [serverErrors, setServerErrors] = useState('')

	return (
		<MDBContainer id="cont-inicio">
			<MDBRow className="d-flex align-items-center flex-column">
				<MDBCol md="6">
					<form
						id="inicio"
						onSubmit={handleSubmit(async (formData) => {
							if (submitting) {
								return false
							}
							setSubmitting(true)
							let hashedForm = formData
							hashedForm.idUsuario = obtenerIdUsuario(Auth)
							hashedForm.clave = hash.sha256(formData.clave)
							const data = await borrarCuenta(hashedForm)

							setSubmitting(false)
							if (data.code !== 0) {
								setServerErrors(data.err)
							} else {
								setServerErrors('')
								logOut(Auth)
							}
						})}
					>
						<ErroresServer serverErrors={serverErrors} />

						<EntradaClave
							titulo={'Contraseña'}
							register={register}
							errors={errors}
						/>

						<div className="text-center mt-4">
							<MDBBtn
								className="btn-danger btn-inicio"
								type="submit"
								disabled={submitting}
							>
								Eliminar
							</MDBBtn>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}
