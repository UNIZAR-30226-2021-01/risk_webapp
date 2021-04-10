import React from 'react'
import './amigo.css'
import { MDBRow, MDBCol } from 'mdbreact'
import iconos from '../../assets/iconos/iconos'
import marcoIcono from '../../assets/UI/avatar_marco.png'
/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo
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

export default Amigo
