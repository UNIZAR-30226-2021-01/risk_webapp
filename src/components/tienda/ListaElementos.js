import React from 'react'
import PropTypes from 'prop-types'
import ElementoTienda from './ElementoTienda'
import { MDBContainer } from 'mdbreact'

/**
 * Muestra la lista de objetos recibidos
 */
const ListaElementos = ({ objetos, tipo }) => {
	return (
		<MDBContainer className="mt-9">
			{objetos.map((objeto) => (
				<ElementoTienda datos={objeto} tipo={tipo} key={objeto.id.toString()} />
			))}
		</MDBContainer>
	)
}

ListaElementos.propTypes = {
	/**
	 * Objetos a mostrar
	 */
	objetos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),

	/**
	 * Tipo del elemento a mostrar
	 */
	tipo: PropTypes.string,
}

export default ListaElementos
