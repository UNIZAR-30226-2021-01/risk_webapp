import React, { useState, useContext } from 'react'
import AuthApi, { logOut } from './../utils/AuthApi'
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
import iconos from '../assets/iconos/iconos'
import { obtenerCredenciales } from '../utils/usuarioVO'

/**
 * Header contiene el encabezado de la aplicación y permite consultar
 * las reglas.
 * Si se está loggeado, permite:
 * - Visitar la tienda
 * - Consultar tus riskos
 * - Actualizar tu perfil
 * - Desloggearte
 */
export const Header = () => {
	const Auth = useContext(AuthApi)

	const [state, setState] = useState({ isOpen: true })

	const toggleCollapse = () => {
		setState({ isOpen: !state.isOpen })
	}

	return (
		<MDBNavbar color="default-color" dark expand="md">
			<MDBNavbarBrand>
				<Link to="/">
					<strong className="white-text">RISK</strong>
				</Link>
			</MDBNavbarBrand>
			<MDBNavbarToggler onClick={toggleCollapse} />
			<MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
				<MDBNavbarNav left>
					{Auth.auth.logged && (
						<>
							<MDBNavItem style={{ marginRight: '3rem' }}>
								<Link className="dropdown-item" to="/tienda">
									Tienda
								</Link>
							</MDBNavItem>
						</>
					)}
					<MDBNavItem style={{ marginRight: '3rem' }}>
						<Link className="dropdown-item" to="/Reglas">
							Reglas
						</Link>
					</MDBNavItem>
				</MDBNavbarNav>

				<MDBNavbarNav right>
					{Auth.auth.logged && (
						<>
							<MDBNavItem>
								<div className="riskos-head">
									<MDBIcon icon="coins" />
									<div className="d-none d-md-inline" id="riskos-num">
										{Auth.auth.usuario.riskos}
									</div>
								</div>
							</MDBNavItem>
							<MDBNavItem style={{ marginRight: '3rem' }}>
								<MDBDropdown>
									<MDBDropdownToggle nav caret>
										{/*
										<MDBIcon icon="user" />
										*/}
										<img src={iconos[Auth.auth.usuario.icono].img}></img>
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
						</>
					)}
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	)
}

export default Header
