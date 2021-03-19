import React, {useContext} from 'react';
import FormCuenta from './FormCuenta.js'
import constants from './../../constants.js';
import AuthApi from "./AuthApi"
import Cookies from 'js-cookie'

/**
 * Registrar, si el loggeo es correcto añade las cookies de sesión
 * al cliente y en el contexto de la aplicación
 * @requires FormCuenta
 * @todo Conexión con servidor y errores del servidor
 * @todo Comprobar si realmente es necesario añadirlo al contexto de la aplicación
 */
const Registrar = () =>{
	const Auth = useContext(AuthApi)
	const registrarse = (formData) =>{
		formData.logged=true
		Auth.setAuth(formData)
		Cookies.set("user", formData, { expires: 7, sameSite: "lax"})
	}
	return(
		<div>
            <FormCuenta defaults={constants.NULL_VALUES} submitText='Registrarse' handleOnSubmit={registrarse}/>
		</div>
	)
}

export default Registrar;