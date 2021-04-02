import React from 'react'
import FormInicio from './FormInicio'
import constants from './../../utils/constants.js'
import { inicioSesion } from './../../utils/restAPI.js'
import { Link } from 'react-router-dom'
import { MDBContainer } from 'mdbreact'

/**
 * Inicio de sesion, si el loggeo es correcto añade las cookies de sesión
 * al cliente y en el contexto de la aplicación
 * @requires FormInicio
 * @todo Gestión de los posibles errores del servidor
 * @todo Comprobar si realmente es necesario añadirlo al contexto de la aplicación
 */
const InicioSesion = () => {
	return (
		<MDBContainer className="d-flex align-items-center flex-column">
			<h2> Iniciar sesión</h2>
			<FormInicio
				defaults={constants.NULL_VALUES}
				submitText="Aceptar"
				makePetition={inicioSesion}
			/>
			<p>
				¿No tienes cuenta?<Link to="/registro"> Regístrate </Link>
			</p>
		</MDBContainer>
	)
}

export default InicioSesion
