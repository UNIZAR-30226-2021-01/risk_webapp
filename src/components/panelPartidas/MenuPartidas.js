import React, { useState, useEffect, useContext } from 'react'
import { MDBContainer } from 'mdbreact'
import { ListaPartidas } from './ListaPartidas'
import { obtenerPartidas } from 'utils/restAPI'
import AuthApi from 'utils/AuthApi'
import { obtenerCredenciales } from 'utils/usuarioVO'

export const MenuSalas = () => {
	const Auth = useContext(AuthApi)

	const [partidas, setPartidas] = useState([])

	useEffect(() => {
		async function setData() {
			const formData = obtenerCredenciales(Auth)
			const dataPartidas = await obtenerPartidas(formData)
			console.log(dataPartidas)
			setPartidas(dataPartidas)
		}
		//setData()

		setPartidas([
			{
				id: 1,
				nombre: 'p1',
				nombreTurnoActual: '1',
			},
			{
				id: 2,
				nombre: 'p2',
				nombreTurnoActual: 'samugamer',
			},
			{
				id: 3,
				nombre: 'p3',
				nombreTurnoActual: 'oscargamer',
			},
		])
	}, [])

	return (
		<MDBContainer>
			<h2> Partidas en curso </h2>
			<ListaPartidas partidas={partidas} />
		</MDBContainer>
	)
}

export default MenuSalas
