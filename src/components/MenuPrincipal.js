import React from 'react'
import './../index.css'

import MenuPartidas from './panelPartidas/MenuPartidas'
import TabAmigosNotificaciones from './menuPrincipal/TabAmigosNotificaciones'
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact'

/**
 * Menú principal de la aplicación, muestra el menú de partidas
 * y la ventana de amigos y notificaciones.
 */
export const MenuPrincipal = () => {
	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<MenuPartidas />
				</MDBCol>
				<MDBCol md="6">
					<TabAmigosNotificaciones />
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	)
}

export default MenuPrincipal
