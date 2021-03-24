import React, {useState} from 'react'
import ListaAmigos from './../panelAmigos/ListaAmigos'
import Reglas from './../Reglas/Reglas'
import { MDBContainer, MDBCol, MDBRow, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBadge} from "mdbreact"

export const TabAmigosNotificaciones = () => {

	let amigos = [{nombre: 'Óscar'},{nombre: 'Pepe'}]

	// Panel activo
	const [active, setActive] = useState({justified: "1"})

	// Número de notificaciones, se actualizará conforme lleguen y se borren
	const [nNotis, setNNotis] = useState(0)

	const togglePills = (type, tab) => e => {
		e.preventDefault();
		if (active.justified !== tab){
			let items = {...active}
			items[type] = tab
			setActive(items)
		}
	}

	return (
		<MDBContainer className="border mt-4">
			<MDBNav className="nav-pills nav-justified ">
				<MDBNavItem className="my-2">
					<MDBNavLink
						link
						to="#" 
						active={active.justified === "1"}
						onClick={togglePills("justified", "1")}
					>
						Lista de amigos
					</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem className="my-2">
					<MDBNavLink
						link
						to="#" 
						active={active.justified === "2"}
						onClick={togglePills("justified", "2")}
					>
						Notificaciones	{ nNotis > 0 && <MDBBadge color="primary" pill> 2 </MDBBadge>}
					</MDBNavLink>
				</MDBNavItem>
			</MDBNav>
			<MDBTabContent activeItem={active.justified}>
				<MDBTabPane tabId="1">
					<ListaAmigos usuarios={amigos} />
				</MDBTabPane>
				<MDBTabPane tabId="2">
					Inserte aquí el panel de notificaciones
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default TabAmigosNotificaciones