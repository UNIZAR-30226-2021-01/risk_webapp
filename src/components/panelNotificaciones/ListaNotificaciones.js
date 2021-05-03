import React from 'react'
import PropTypes from 'prop-types'
import NotificacionAmistad from './NotificacionAmistad.js'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'
import NotificacionSala from './NotificacionSala.js'
import NotificacionTurno from './NotificacionTurno.js'
import './ListaNotificaciones.css'
/**
 * Muestra la lista de notificaciones recibida como parámetro.
 * @param {lista_de_notificaciones} notificaciones
 */
const ListaNotificaciones = ({ notificaciones }) => {
	return (
		<MDBContainer className="mt-3 fondo-lista-notis">
			<MDBListGroup className="lista-notis">
				{
					//Los tipos son "Invitacion" y "Peticion de amistad"
				}
				{notificaciones.map((notificacion) => {
					return (
						<MDBListGroupItem key={notificacion.idEnvio.toString()}>
							{notificacion.tipo === 'Peticion de amistad' && (
								<NotificacionAmistad datos={notificacion} />
							)}
							{notificacion.tipo === 'Invitacion' && (
								<NotificacionSala datos={notificacion} />
							)}
							{notificacion.tipo === 'Notificacion de turno' && (
								<NotificacionTurno datos={notificacion} />
							)}
						</MDBListGroupItem>
					)
				})}
			</MDBListGroup>
		</MDBContainer>
	)
}

ListaNotificaciones.propTypes = {
	/**
	 * Notificaciones del usuario de la aplicación recibidas como JSON a
	 * través de la API del servidor de juego.
	 */
	notificaciones: PropTypes.arrayOf(
		PropTypes.shape({
			idEnvio: PropTypes.number,
		})
	),
}
export default ListaNotificaciones
