import React, { useContext } from 'react'
import AuthApi from './../../utils/AuthApi'
import ElementoTienda from './ElementoTienda'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'

const ListaElementos = ({ objetos, tipo }) => {
	const Auth = useContext(AuthApi)

	return (
		<MDBContainer className="mt-9">
			{objetos.map((objeto) => (
				<ElementoTienda datos={objeto} tipo={tipo} key={objeto.id.toString()} />
			))}
		</MDBContainer>
	)
}

export default ListaElementos
