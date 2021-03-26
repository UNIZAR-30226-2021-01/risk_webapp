import React from "react"
import "./../index.css"

import MenuSalas from './salas/MenuSalas'
import TabAmigosNotificaciones from './menuPrincipal/TabAmigosNotificaciones'
import { MDBContainer, MDBCol, MDBRow } from "mdbreact"

export const MenuPrincipal = () => {

	return (
		<MDBContainer>
			<MDBRow>
				{/*<ActualizacionConfiguracion />*/}
				<MDBCol md='7'>
					<MenuSalas />
				</MDBCol>
				<MDBCol md='5'>
				<TabAmigosNotificaciones />
				</MDBCol>
				{/* Panel de notificaciones y lista de amigos */}
			</MDBRow>
		</MDBContainer>
	);
}

export default MenuPrincipal;