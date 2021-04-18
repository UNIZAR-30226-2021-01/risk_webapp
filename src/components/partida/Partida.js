import React, { useState } from 'react'
import Risk from 'assets/mapas/RiskMapa'
import { MDBContainer } from 'mdbreact'
import { SVGMap } from './SVGMap'

/**
 * Implementa una partida
 * @todo todo  falta
 */
export const Partida = () => {
	const [map, setMap] = useState({
		...Risk,
	})

	const handleClickEnUbicacion = (event) => {
		console.log(event.target.attributes.name.value)
	}

	return (
		<MDBContainer>
			{/* Para que se vea el mapa */}
			<div className="bg-primary">
				<SVGMap map={map} onLocationClick={handleClickEnUbicacion} />
			</div>
		</MDBContainer>
	)
}

export default Partida
