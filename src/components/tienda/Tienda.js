import React, { useState, useContext } from 'react'
import AuthApi from './../../utils/AuthApi'
import {
	MDBContainer,
	MDBTabPane,
	MDBTabContent,
	MDBNav,
	MDBNavItem,
	MDBNavLink,
} from 'mdbreact'
import ListaElementos from './ListaElementos'

import './Tienda.css'
import { obtenerIconosTienda, obtenerAspectosTienda } from 'utils/usuarioVO'

/**
 * Componente de tienda de la aplicación, contiene 2 ventanas, una con los
 * iconos por comprar y otro con los aspectos según los que ya tiene el
 * usuario.
 */
const Tienda = () => {
	const Auth = useContext(AuthApi)

	const [active, setActive] = useState({ justified: '1' })

	let iconosSinComprar = obtenerIconosTienda(Auth).filter(function (obj) {
		return !Auth.auth.iconos.some(function (obj2) {
			return obj.id == obj2.id
		})
	})

	let aspectosSinComprar = obtenerAspectosTienda(Auth).filter(function (obj) {
		return !Auth.auth.aspectos.some(function (obj2) {
			return obj.id == obj2.id
		})
	})

	const togglePills = (type, tab) => (e) => {
		e.preventDefault()
		if (active.justified !== tab) {
			let items = { ...active }
			items[type] = tab
			setActive(items)
		}
	}

	return (
		<MDBContainer className="mt-4 contenedor-pills">
			<MDBNav className="nav-pills nav-justified ">
				<MDBNavItem className="my-2">
					<MDBNavLink
						link
						to="#"
						active={active.justified === '1'}
						onClick={togglePills('justified', '1')}
					>
						Iconos
					</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem className="my-2">
					<MDBNavLink
						link
						to="#"
						active={active.justified === '2'}
						onClick={togglePills('justified', '2')}
					>
						Aspectos
					</MDBNavLink>
				</MDBNavItem>
			</MDBNav>
			<MDBTabContent activeItem={active.justified}>
				<MDBTabPane tabId="1">
					<ListaElementos objetos={iconosSinComprar} tipo="Icono" />
				</MDBTabPane>
				<MDBTabPane tabId="2">
					<ListaElementos objetos={aspectosSinComprar} tipo="Aspecto" />
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Tienda
