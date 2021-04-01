import React, { useState, useEffect } from 'react'
import { obtenerPrevio, obtenerSiguiente } from 'utils/fotoPerfil'
import ErroresCampo from './ErroresCampo'

export const EntradaImg = ({
	register,
	errors,
	tag,
	disponibles,
	inicial,
	obtImg,
}) => {
	const [imagenActual, setImagenActual] = useState(inicial)

	const avanzarPrevio = () => {
		const next = obtenerPrevio(disponibles, imagenActual)
		setImagenActual(next)
	}

	const avanzarSiguiente = () => {
		const next = obtenerSiguiente(disponibles, imagenActual)
		setImagenActual(next)
	}

	return (
		<>
			<div className="selector-avatar">
				<img
					className="flecha prev"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.fastly.picmonkey.com%2Fcontent4%2Fpreviews%2Fmain%2Farrows%2Farrow_01_550.png&f=1&nofb=1"
					alt="Flecha anterior"
				/>
				<div className="avatar-container">
					<img id="avatar-ajustes" src={obtImg(imagenActual)} alt="Avatar" />
				</div>
				<img
					className="flecha sig"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.fastly.picmonkey.com%2Fcontent4%2Fpreviews%2Fmain%2Farrows%2Farrow_01_550.png&f=1&nofb=1"
					alt="Flecha siguiente"
					onClick={avanzarSiguiente}
				/>
			</div>
			<input
				type="hidden"
				name={tag}
				id={tag}
				value={imagenActual}
				className="form-control"
				ref={register()}
			/>

			<ErroresCampo error={errors[tag]} />
		</>
	)
}
