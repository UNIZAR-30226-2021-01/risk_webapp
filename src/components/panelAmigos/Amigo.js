import React from 'react'
import PropTypes from 'prop-types'
import './amigo.css'
import { MDBRow, MDBCol } from 'mdbreact'
import iconos from '../../assets/iconos/iconos'
import marcoIcono from '../../assets/UI/avatar_marco.png'

/**
 * Representación de un amigo en la lista de amigos, muestra a su derecha el componente
 * pasado como parámetro.
 */
export const Amigo = ({ datos, elemento, ...rest }) => {
	console.log(datos)
	return (
		<MDBRow>
			<MDBCol md="2">
				<img src={iconos[datos.icono].img} className="icono-amigo"></img>
				<img src={marcoIcono} className="icono-marco-amigo"></img>
			</MDBCol>
			<MDBCol md="6">
				<div className="nom-amigo d-block">{datos.nombre}</div>
			</MDBCol>
			<MDBCol md="4">
				{React.cloneElement(elemento, { amigo: datos, ...rest })}
			</MDBCol>
		</MDBRow>
	)
}

Amigo.propTypes = {
	datos: PropTypes.shape({
		icono: PropTypes.number,
		nombre: PropTypes.string,
	}),
	elemento: PropTypes.element,
}

export default Amigo
