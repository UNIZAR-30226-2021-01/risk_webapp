import React, { useState, useContext } from 'react'
import AuthApi from './../../utils/AuthApi'

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
				<MDBTabPane tabId="1">Lista de objetos de Iconos</MDBTabPane>
				<MDBTabPane tabId="2">Lista de objetos de Aspectos</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default Tienda
