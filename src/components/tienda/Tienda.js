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
import ElementoTienda from './ElementoTienda'
import ListaElementos from './ListaElementos'

import './Tienda.css'

const Tienda = () => {
	const Auth = useContext(AuthApi)

	const [active, setActive] = useState({ justified: '1' })

	const [iconos, setIconos] = useState([])
	const [aspectos, setAspectos] = useState([])

	const togglePills = (type, tab) => (e) => {
		e.preventDefault()
		if (active.justified !== tab) {
			let items = { ...active }
			items[type] = tab
			setActive(items)
		}
	}

	const objetosPrueba = [
		{ id: 0, precio: 1000 },
		{ id: 1, precio: 1000 },
		{ id: 2, precio: 2000 },
		{ id: 3, precio: 1000 },
		{ id: 4, precio: 2000 },
		{ id: 5, precio: 1000 },
		{ id: 6, precio: 2000 },
		{ id: 7, precio: 1000 },
		{ id: 8, precio: 2000 },
		{ id: 9, precio: 1000 },
		{ id: 10, precio: 2000 },
		{ id: 11, precio: 1000 },
		{ id: 12, precio: 2000 },
	]
	return (
		<MDBContainer className="border mt-4 contenedor-pills">
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
					<ListaElementos objetos={objetosPrueba} tipo="Icono" />
				</MDBTabPane>
				<MDBTabPane tabId="2">
					<ListaElementos objetos={objetosPrueba} tipo="Aspecto" />
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Tienda
