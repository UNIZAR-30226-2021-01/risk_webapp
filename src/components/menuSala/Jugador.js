import React from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol } from 'mdbreact'
import tropas from '../../assets/tropas/tropas'
import iconos from '../../assets/iconos/iconos'
import marcoIcono from '../../assets/UI/avatar_marco.png'
import fondoAspecto from '../../assets/UI/avatar_fondo.png'
import './Jugador.css'

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
				<div>
					<img src={marcoIcono} className="icono-marco-jugador"></img>
					<img src={icono} className="icono-jugador" />
				</div>
			</MDBCol>
			<MDBCol
				md="4"
				className="d-flex justify-content-center align-items-center"
			>
				{datos.nombre}
			</MDBCol>
			<MDBCol md="4">
				<div>
					<img src={aspecto} className="aspecto-jugador" />
					<img src={fondoAspecto} className="aspecto-fondo-jugador"></img>
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
