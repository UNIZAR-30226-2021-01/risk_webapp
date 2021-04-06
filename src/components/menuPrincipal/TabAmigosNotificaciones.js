import React, { useState, useEffect, useContext } from 'react'
import AuthApi from 'utils/AuthApi'
import constants from 'utils/constants'
import ListaAmigos from './../panelAmigos/ListaAmigos'
import ListaNotificaciones from './../panelNotificaciones/ListaNotificaciones'
import EliminarAmigo from './../panelAmigos/EliminarAmigo'
import { obtenerAmigos, obtenerNotificaciones } from 'utils/restAPI'
import { obtenerCredenciales } from 'utils/usuarioVO'
import './tabAmigosNotificaciones.css'
import {
	MDBContainer,
	MDBTabPane,
	MDBTabContent,
	MDBNav,
	MDBNavItem,
	MDBNavLink,
	MDBBadge,
} from 'mdbreact'

/**
 *
 * @returns Componente que representa una tabla en la que el usuario podrá
 * consultar tanto la lista de sus amigos como las notificaciones que haya
 * recibido
 */
export const TabAmigosNotificaciones = () => {
	const Auth = useContext(AuthApi)

	const [amigos, setAmigos] = useState([])

	// Panel activo
	const [active, setActive] = useState({ justified: '1' })

	// Número de notificaciones, se actualizará conforme lleguen y se borren
	const [notis, setNotis] = useState([])

	const fetchAmigos = async () => {
		//console.log('Petición de amigos')
		const nuestraInfo = obtenerCredenciales(Auth)
		const dataAmigos = await obtenerAmigos(nuestraInfo)
		//console.log(dataAmigos)
		setAmigos(dataAmigos.amigos)
	}

	const fetchNotis = async () => {
		//console.log('Petición de notificaciones')
		const nuestraInfo = obtenerCredenciales(Auth)
		const dataNotis = await obtenerNotificaciones(nuestraInfo)
		//console.log(dataNotis)

		// DATOS DE PRUEBA
		let notisPrueba = [
			{ infoExtra: 'PacoGamer', idEnvio: 69 },
			{ infoExtra: 'Raulito69HD', idEnvio: 15 },
			{ infoExtra: 'Raulito69XX', idEnvio: 12 },
			{ infoExtra: 'Raulito69', idEnvio: 144 },
		]
		setNotis(notisPrueba)
		//setNotis(dataNotis.notificaciones)
	}

	useEffect(() => {
		const interval = setInterval(async () => {
			fetchAmigos()
			fetchNotis()
		}, constants.REFRESH_TIME)
		return () => clearInterval(interval) //Elimina la ejecución periódica al desmontar
	}, [])

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
						Lista de amigos
					</MDBNavLink>
				</MDBNavItem>
				<MDBNavItem className="my-2">
					<MDBNavLink
						link
						to="#"
						active={active.justified === '2'}
						onClick={togglePills('justified', '2')}
					>
						Notificaciones{' '}
						{notis.length > 0 && (
							<MDBBadge color="danger" pill>
								{' '}
								{notis.length}{' '}
							</MDBBadge>
						)}
					</MDBNavLink>
				</MDBNavItem>
			</MDBNav>
			<MDBTabContent activeItem={active.justified}>
				<MDBTabPane tabId="1">
					<ListaAmigos usuarios={amigos} elemento={<EliminarAmigo />} />
				</MDBTabPane>
				<MDBTabPane tabId="2">
					<ListaNotificaciones notificaciones={notis} />
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default TabAmigosNotificaciones
