import React from 'react'
import ElementoTienda from './ElementoTienda'
import { MDBContainer } from 'mdbreact'

const ListaElementos = ({ objetos, tipo }) => {
	return (
		<MDBContainer className="mt-9">
			{objetos.map((objeto) => (
				<ElementoTienda datos={objeto} tipo={tipo} key={objeto.id.toString()} />
			))}
		</MDBContainer>
	)
}

export default ListaElementos
