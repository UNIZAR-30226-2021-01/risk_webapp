import iconos from 'assets/iconos/iconos'
import { MDBCol, MDBRow } from 'mdbreact'
import React from 'react'

const JugadorPartida = ({ jugador }) => {
	return (
		<MDBRow className="jugador-en-partida">
			<MDBCol md="4">
				<div>
					<img
						src={iconos[jugador.icono].img}
						className="icono-jugador-partida"
					/>
				</div>
			</MDBCol>
			<MDBCol
				md="4"
				className="d-flex justify-content-center align-items-center"
			>
				{jugador.nombre}
			</MDBCol>
		</MDBRow>
	)
}

export default JugadorPartida
