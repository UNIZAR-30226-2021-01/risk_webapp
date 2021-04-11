import React from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol } from 'mdbreact'
import tropas from '../../assets/tropas/tropas'
import iconos from '../../assets/iconos/iconos'

/**
 * Representación de un jugador para la lista de jugadores en
 * una partida.
 */
export const Jugador = ({ datos }) => {
	const icono = iconos[datos.icono].img
	const aspecto = tropas[datos.aspecto].img

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

Jugador.PropTypes = {
	datos: PropTypes.shape({
		icono: PropTypes.number,
		aspecto: PropTypes.number,
		nombre: PropTypes.string,
	}),
}

export default Jugador
