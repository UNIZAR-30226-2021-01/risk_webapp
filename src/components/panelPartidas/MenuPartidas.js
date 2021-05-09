import React, { useState, useEffect, useContext } from 'react'
import { MDBContainer } from 'mdbreact'
import { ListaPartidas } from './ListaPartidas'
import { obtenerPartidas } from 'utils/restAPI'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales } from 'utils/usuarioVO'

/**
 * Muestra el menú de salas de la aplicación y la lista
 * de partidas.
 */
export const MenuSalas = () => {
	const Auth = useContext(AuthApi)

	const [partidas, setPartidas] = useState([])

	useEffect(() => {
		async function setData() {
			const formData = obtenerCredenciales(Auth)
			const dataPartidas = await obtenerPartidas(formData)
			setPartidas(dataPartidas.partidas)
		}
		setData()
	}, [])

	return (
		<MDBContainer className="cont-estandar d-flex align-items-center flex-column">
			<h2 className="text-center mb-1"> Partidas en curso </h2>
			<ListaPartidas partidas={partidas} />
		</MDBContainer>
	)
}

export default MenuSalas
