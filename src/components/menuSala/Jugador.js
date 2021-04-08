import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'
import tropas from '../../assets/tropas/tropas'
import iconos from '../../assets/iconos/iconos'
/**
 * Representación de un amigo en la lista de amigos, da la opción de eliminar
 * el amigo.
 * @param {usuario} datos Datos del amigo
 */
export const Jugador = ({ datos }) => {
	const icono = iconos[datos.id].img
	const aspecto = tropas[datos.id].img

	return (
		<MDBRow>
			<MDBCol md="4">
				<div className="imagenPrueba">
					<img src={icono} />
				</div>
			</MDBCol>
			<MDBCol
				md="4"
				className="d-flex justify-content-center align-items-center"
			>
				{datos.nombre}
			</MDBCol>
			<MDBCol md="4">
				<div className="imagenPrueba">
					<img src={aspecto} />
				</div>
			</MDBCol>
		</MDBRow>
	)
}

export default Jugador
