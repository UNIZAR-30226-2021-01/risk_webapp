import React, { useContext } from 'react'
import AuthApi from './../../utils/AuthApi'
import NotificacionAmistad from './NotificacionAmistad.js'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'

/**
 * Muestra la lista de notificaciones recibida como parámetro
 * Se debera instanciar cuando el tipo de la petición sea "Peticion de amistad"
 * @param {lista_de_notificaciones} notificaciones Notificaciones del usuario de la aplicación
 */
const ListaNotificaciones = ({ notificaciones }) => {
	const Auth = useContext(AuthApi)

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
