import { MDBCol, MDBRow } from 'mdbreact'
import React from 'react'

export const SalaEncabezado = ({ datos }) => {
	return (
		<div
			className="d-flex p-2 flex-row justify-content-between "
			style={{ background: '#2bbbad', color: '#fff' }}
		>
			<MDBCol className="m-0 text-left">
				<h2 className="m-0">{datos.nombreSala}</h2>
			</MDBCol>
			<MDBCol className="m-0 d-flex justify-content-center align-items-center">
				<p className="m-0">Tiempo de turno: {datos.tiempoTurno} min</p>
			</MDBCol>
			<MDBCol className="m-0 d-flex justify-content-end align-items-center">
				<p className="m-0">Hay {datos.jugadores.length} jugadores activos</p>
			</MDBCol>
		</div>
	)
}

export default SalaEncabezado
