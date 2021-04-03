import React from 'react'
import './../index.css'

import MenuPartidas from './panelPartidas/MenuPartidas'
import TabAmigosNotificaciones from './menuPrincipal/TabAmigosNotificaciones'
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact'

export const MenuPrincipal = () => {
	return (
		<MDBContainer>
			<MDBRow>
				{/*<ActualizacionConfiguracion />*/}
				<MDBCol md="7">{/*<MenuPartidas />*/}</MDBCol>
				<MDBCol md="5">
					<TabAmigosNotificaciones />
				</MDBCol>
				{/* Panel de notificaciones y lista de amigos */}
			</MDBRow>
		</MDBContainer>
	)
}

export default MenuPrincipal
