import React, { useState, useContext } from 'react'
import AuthApi, { logOut } from './../utils/AuthApi'
import constants from './../utils/constants.js'
import Cookies from 'js-cookie'
import './header.css'
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavbarToggler,
	MDBCollapse,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBIcon,
} from 'mdbreact'
import { Link } from 'react-router-dom'
/**
 * Header contiene el encabezado de la aplicación, si está loggeado
 * da la oportunidad de desloggearse del sistema.
 * @requires AuthApi.js
 */
export const Header = () => {
	const [state, setState] = useState({ isOpen: true })

	const toggleCollapse = () => {
		setState({ isOpen: !state.isOpen })
	}

	const Auth = useContext(AuthApi)

	return (
		<MDBNavbar color="default-color" dark expand="md">
			<MDBNavbarBrand>
				<Link to="/">
					<strong className="white-text">RISK</strong>
				</Link>
			</MDBNavbarBrand>
			<MDBNavbarToggler onClick={toggleCollapse} />
			<MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
				<MDBNavbarNav left> </MDBNavbarNav>
				<MDBNavbarNav right>
					{Auth.auth.logged && (
						<MDBNavItem style={{ marginRight: '3rem' }}>
							<MDBDropdown>
								<MDBDropdownToggle nav caret>
									<MDBIcon icon="user" />
									<div className="d-none d-md-inline" id="head-user">
										{Auth.auth.usuario.nombre}
									</div>
								</MDBDropdownToggle>
								<MDBDropdownMenu className="dropdown-default">
									<Link className="dropdown-item" to="/actualizarCuenta">
										Ajustes de usuario
									</Link>
									<MDBDropdownItem
										onClick={() => {
											logOut(Auth)
										}}
										href="#"
									>
										Cerrar sesión
									</MDBDropdownItem>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavItem>
					)}
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	)
}

export default Header
