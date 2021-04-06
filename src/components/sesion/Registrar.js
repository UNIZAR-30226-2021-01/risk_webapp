import React from 'react'
import FormRegistro from './FormRegistro.js'
import constants from './../../utils/constants.js'
import { registrarseLocal } from '../../utils/AuthApi'
import { registrarse } from './../../utils/restAPI.js'
import { Link } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'

/**
 * Crea una cuenta del usuario, si el loggeo es correcto añade las cookies de sesión
 * al cliente y en el contexto de la aplicación
 */
const Registrar = () => {
	return (
		<MDBContainer className="d-flex align-items-center flex-column">
			<h2> Crear cuenta</h2>
			<FormRegistro
				defaults={constants.NULL_VALUES.usuario}
				submitText="Registrarse"
				makePetition={registrarse}
				siValido={registrarseLocal}
			/>
			<p>
				{' '}
				¿Ya tienes cuenta? <Link to="/inicioSesion">Inicia sesión</Link>
			</p>
		</MDBContainer>
	)
}

export default Registrar
