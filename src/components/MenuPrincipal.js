import React, {useState} from "react"
import "./../index.css"

import MenuSalas from './salas/MenuSalas'
import TabAmigosNotificaciones from './menuPrincipal/TabAmigosNotificaciones'
import { MDBContainer, MDBCol, MDBRow, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink} from "mdbreact"

export const MenuPrincipal = () => {

	return (
		<MDBContainer>
			<MDBRow>
				{/*<ActualizacionConfiguracion />*/}
				<MDBCol>
					<MenuSalas />
				</MDBCol>
				<MDBCol>
				<TabAmigosNotificaciones />
				</MDBCol>
				{/* Panel de notificaciones y lista de amigos */}
			</MDBRow>
		</MDBContainer>
	);
}

export default MenuPrincipal;