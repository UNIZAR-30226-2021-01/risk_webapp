import React from 'react'
import FormInicio from './FormInicio'
import constants from './../../utils/constants.js'
import { inicioSesion } from './../../utils/restAPI.js'
import { Link } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'

/**
 * Inicio de sesion, si el inicio de sesión es correcto añade las cookies
 * de sesión al cliente y en el contexto de la aplicación.
 */
const InicioSesion = () => {
	return (
		<MDBContainer className="d-flex align-items-center flex-column">
			<h2> Iniciar sesión</h2>
			<FormInicio
				defaults={constants.NULL_VALUES.usuario}
				submitText="Aceptar"
				makePetition={inicioSesion}
			/>
			<p>
				Si no tienes cuenta, <Link to="/registro"> regístrate </Link>
				<br />
				¿Has olvidado tu contraseña?{' '}
				<Link to="/solicitarRestablecer">Reestablézcala aquí. </Link>
			</p>
		</MDBContainer>
	)
}

export default InicioSesion
