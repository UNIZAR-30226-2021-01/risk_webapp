import React from 'react'
import NotificacionAmistad from './NotificacionAmistad.js'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'

/**
 * Muestra la lista de notificaciones recibida como parámetro.
 * @param {lista_de_notificaciones} notificaciones Notificaciones del
 * usuario de la aplicación recibidas como JSON a través de la API
 * del servidor de juego.
 */
const ListaNotificaciones = ({ notificaciones }) => {
	return (
		<MDBContainer className="mt-9">
			<MDBListGroup style={{ width: '18.5rem' }}>
				{notificaciones.map((notificacion) => (
					<MDBListGroupItem key={notificacion.idEnvio.toString()}>
						<NotificacionAmistad datos={notificacion} />
					</MDBListGroupItem>
				))}
			</MDBListGroup>
		</MDBContainer>
	)
}

export default ListaNotificaciones
