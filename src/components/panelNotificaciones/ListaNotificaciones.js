import React from 'react'
import NotificacionAmistad from './NotificacionAmistad.js'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import NotificacionSala from './NotificacionSala.js'

/**
 * Muestra la lista de notificaciones recibida como parámetro.
 * @param {lista_de_notificaciones} notificaciones Notificaciones del
 * usuario de la aplicación recibidas como JSON a través de la API
 * del servidor de juego.
 */
const ListaNotificaciones = ({ notificaciones }) => {
	return (
		<MDBContainer className="mt-3">
			<MDBListGroup className="lista-notis">
				{
					//Los tipos son "Invitacion" y "Peticion de amistad"
				}
				{notificaciones.map((notificacion) => {
					return (
						<MDBListGroupItem key={notificacion.idEnvio.toString()}>
							{notificacion.tipo === 'Peticion de amistad' ? (
								<NotificacionAmistad datos={notificacion} />
							) : (
								<NotificacionSala datos={notificacion} />
							)}
						</MDBListGroupItem>
					)
				})}
			</MDBListGroup>
		</MDBContainer>
	)
}

export default ListaNotificaciones
