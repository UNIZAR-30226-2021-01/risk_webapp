import { MDBRow, MDBContainer, MDBCol } from 'mdbreact'
import React from 'react'
import { dados_rojos, dados_blancos } from '../../assets/dados/dados'
import dado_overlay from '../../assets/dados/dado_overlay.png'
import './PanelDados.css'
import PropTypes from 'prop-types'

/**
 * Panel que muestra los dados de los resultados en las jugadas
 * de ataque de una partida.
 */
export const PanelDados = ({ dados_origen, dados_destino }) => {
	console.log('Indice', dados_origen.indexOf(-1))
	return (
		<MDBContainer className="mt-3 fondo-dados-partida pb-4 d-flex flex-column align-items-center">
			<h1>RESULTADOS</h1>
			<h2>Atacante</h2>
			{dados_origen.indexOf(-1) == -1 && (
				<MDBRow>
					{dados_origen.map((dado, index) => (
						<MDBCol key={`${index}-origen`}>
							<div className="dado-origen">
								<img src={dado_overlay} className="marco-dado-partida" />
								<img src={dados_rojos[dado - 1].img} className="dado-partida" />
							</div>
						</MDBCol>
					))}
				</MDBRow>
			)}
			{dados_origen.indexOf(-1) != -1 && <p>Esperando resultados</p>}
			<h2>Defensor</h2>
			{dados_destino.indexOf(-1) == -1 && (
				<MDBRow>
					{dados_destino.map((dado, index) => (
						<MDBCol className="dado-destino" key={`${index}-destino`}>
							<img src={dado_overlay} className="marco-dado-partida" />
							<img src={dados_blancos[dado - 1].img} className="dado-partida" />
						</MDBCol>
					))}
				</MDBRow>
			)}
			{dados_destino.indexOf(-1) != -1 && <p>Esperando resultados</p>}
		</MDBContainer>
	)
}

export default PanelDados

PanelDados.propTypes = {
	/**
	 * Vector de los dados obtenidos en la jugada
	 * correspondientes al país de origen
	 */
	dados_origen: PropTypes.arrayOf(PropTypes.number),
	/**
	 * Vector con los dados obtenidos en la jugada
	 * correspondientes al país de destino
	 */
	dados_destino: PropTypes.arrayOf(PropTypes.number),
}
