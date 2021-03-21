import React, {useContext} from 'react'
import AuthApi from "./sesion/AuthApi"
import constants from './../constants.js'
import Cookies from 'js-cookie'

/**
 * Header contiene el encabezado de la aplicación, si está loggeado
 * da la oportunidad de desloggearse del sistema.
 * @requires AuthApi.js
 */
export const Header = () => {
	const Auth = useContext(AuthApi)
	const logOut = ()=>{
		Auth.setAuth(constants.NULL_VALUES)
		Cookies.remove(constants.COOKIE_USER)
	}

	return (
		<nav className="navbar navbar-dark top header">
			<div className="container d-flex justify-content-between" >
				<a href="init" className="navbar-brand d-flex align-items-center">
					<strong>RISK</strong>
				</a>
				{Auth.auth.logged && 
				<div className="dropdown">
					<button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{Auth.auth.usuario.nombre}</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<button className="dropdown-item" onClick={logOut}>Cerrar sesión</button>
					</div>
				</div>
				}
			</div>
		</nav>
	)
}

export default Header