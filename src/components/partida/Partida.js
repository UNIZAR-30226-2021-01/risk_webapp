import React, { useState } from 'react'
import Mapa from 'assets/mapas/RiskMapa'
import partidaEstado, {
	JUGADAS,
	ACCIONES,
	MAPEO_TIPO_ACCIONES,
	FASES,
	ESTADOS,
} from './partidaEstados'
import { MDBContainer } from 'mdbreact'
import { SVGMap } from './SVGMap'
import loading from 'assets/UI/loading.png'
import './Partida.css'
import ListaJugadores from './ListaJugadores'

function encontrarDatosJugador(lista, id) {
	for (let i = 0; i < lista.length; i++) {
		if (lista[i].id === id) {
			return {
				...lista[i],
				colorIndice: i,
			}
		}
	}
	throw 'No existe el jugador'
}

/**
 * Implementa una partida
 * @todo todo falta
 */
export const Partida = () => {
	const [estado, dispatch] = partidaEstado()

	const mapaUnido = {
		label: Mapa.label,
		viewBox: Mapa.viewBox,
		locations: Mapa.locations.map((location, index) => {
			if (estado.estadoInterno !== ESTADOS.CARGANDO) {
				let datosJugador = encontrarDatosJugador(
					estado.jugadores,
					location.jugador
				)
				return {
					...location,
					jugador: estado.territorios[index].jugador,
					aspecto: datosJugador.aspecto,
					tropas: estado.territorios[index].tropas,
				}
			} else {
				return location
			}
		}),
	}

	console.log(mapaUnido, 'mapa funcional')

	const clickEnUbicacion = (event) => {
		console.log(event.target.attributes.name.value)
	}

	return (
		<MDBContainer fluid>
			{/* Para que se vea el mapa */}
			{estado.estadoInterno !== ESTADOS.CARGANDO && (
				<div className="d-flex pb-4">
					<ListaJugadores />
					<div className="mapa">
						<SVGMap map={Mapa} onLocationClick={clickEnUbicacion} />
					</div>
				</div>
			)}
			{estado.estadoInterno === ESTADOS.CARGANDO && (
				//Formatear

				<div className="loader">
					<img src={loading} id="load-spinner" />
					<p>Cargando...</p>
				</div>
			)}
		</MDBContainer>
	)
}

export default Partida
