import React, { useState, useEffect, useContext } from 'react'
import AuthApi from "./../../utils/AuthApi"
import constants from "./../../utils/constants"
import ListaAmigos from './../panelAmigos/ListaAmigos'
import EliminarAmigo from './../panelAmigos/EliminarAmigo'
import { obtenerAmigos } from './../../utils/restAPI'
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBadge} from "mdbreact"

export const TabAmigosNotificaciones = () => {

	const Auth = useContext(AuthApi)
	const [amigos, setAmigos] = useState([])
	//[{nombre: 'Óscar', id: 1},{nombre: 'Pepe', id: 2}]

	// Panel activo
	const [active, setActive] = useState({justified: "1"})

	// Número de notificaciones, se actualizará conforme lleguen y se borren
	const [notis, setNotis] = useState([])

	const fetchAmigos = async() =>{
		console.log('Petición de amigos')
		const nuestraInfo = {idUsuario: Auth.auth.usuario.id, clave: Auth.auth.usuario.clave}
		const dataAmigos = await obtenerAmigos(nuestraInfo)
		console.log(dataAmigos)
		setAmigos(amigos)
	}

	useEffect(() => {
		const interval = setInterval( async() => {
			fetchAmigos()
			//Añadir petición de notificaciones

		}, constants.REFRESH_TIME)
		return () => clearInterval(interval); //Elimina la ejecución periódica al desmontar
	}, [])

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
						Notificaciones	{ notis.length > 0 && <MDBBadge color="primary" pill> {notis.length} </MDBBadge>}
					</MDBNavLink>
				</MDBNavItem>
			</MDBNav>
			<MDBTabContent activeItem={active.justified}>
				<MDBTabPane tabId="1">
					<ListaAmigos usuarios={amigos} elemento={<EliminarAmigo />} />
				</MDBTabPane>
				<MDBTabPane tabId="2">
					Inserte aquí el panel de notificaciones
				</MDBTabPane>
			</MDBTabContent>
		</MDBContainer>
	)
}

export default TabAmigosNotificaciones