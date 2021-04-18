import React, { useState } from 'react'
import Risk from 'assets/mapas/RiskMapa'
import partidaEstado from './partidaEstados'
import { MDBContainer } from 'mdbreact'
import { SVGMap } from './SVGMap'

/**
 * Implementa una partida
 * @todo todo  falta
 */
export const Partida = () => {
	const [estado, dispatch] = partidaEstado()

	const handleClickEnUbicacion = (event) => {
		console.log(event.target.attributes.name.value)
	}

	return (
		<MDBContainer>
			{/* Para que se vea el mapa */}
			<div className="bg-primary">
				<SVGMap map={Risk} onLocationClick={handleClickEnUbicacion} />
			</div>
		</MDBContainer>
	)
}

export default Partida
