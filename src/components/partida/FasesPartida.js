import React from 'react'
import './FasesPartida.css'

const FasesPartida = ({ fase }) => {
	let clases = ['', '', '']

	switch (fase) {
		case 1:
			clases = ['activa', '', '']
			break
		case 2:
			clases = ['', 'activa', '']
			break
		case 3:
			clases = ['', '', 'activa']
			break
		default:
			clases = ['', '', '']
	}

	return (
		<div className="fases">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="svg2"
				height="160.36218"
				width="933.09448"
			>
				<defs id="defs4" />
				<g id="layer1" transform="translate(0,-891.98765)">
					<g transform="translate(121.78218,590.09901)" id="g4197">
						<path
							className={clases[0]}
							id="path4168"
							d="m 149.12106,351.1659 -250,0 0,70.73171 250,0 53.44551,-30.85678 z"
							style={{ fill: '#444' }}
						/>
						<text style={{ fill: 'white' }} x="-10" y="393">
							REFUERZOS
						</text>
						<path
							className={clases[1]}
							id="path4170"
							d="m 468.42872,351.64983 53.69458,40.39408 -53.69458,30.54188 -249.7537,-0.49262 55.17241,-30.54187 -55.17241,-40.39409 z"
							style={{ fill: '#444' }}
						/>
						<text style={{ fill: 'white' }} x="340" y="393">
							ATAQUE
						</text>
						<path
							className={clases[2]}
							id="path4168-5"
							d="m 789.44927,352.26436 -250,0 53.69458,40.29196 -53.69458,30.43975 250,0 z"
							style={{ fill: '#444' }}
						/>
						<text style={{ fill: 'white' }} x="630" y="393">
							MOVER TROPAS
						</text>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default FasesPartida
