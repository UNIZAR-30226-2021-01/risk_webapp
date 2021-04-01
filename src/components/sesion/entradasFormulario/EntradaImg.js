import React, { useState, useEffect } from 'react'
import { obtenerPrevio, obtenerSiguiente } from 'utils/fotoPerfil'
import ErroresCampo from './ErroresCampo'

export const EntradaImg = ({
	register,
	errors,
	tag,
	disponibles,
	inicial,
	imagenes,
}) => {
	const [imagenActual, setImagenActual] = useState(inicial)
	const [avanzando, setAvanzando] = useState(false)

	const avanzarPrevio = () => {
		if (avanzando) {
			return
		}
		setAvanzando(true)
		const next = obtenerPrevio(disponibles, imagenActual)
		setImagenActual(next)
		setAvanzando(false)
	}

	const avanzarSiguiente = () => {
		if (avanzando) {
			return
		}
		setAvanzando(true)
		const next = obtenerSiguiente(disponibles, imagenActual)
		setImagenActual(next)
		setAvanzando(false)
	}

	return (
		<>
			<div className="selector-avatar">
				<img
					className="flecha prev"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.fastly.picmonkey.com%2Fcontent4%2Fpreviews%2Fmain%2Farrows%2Farrow_01_550.png&f=1&nofb=1"
					alt="Flecha anterior"
					onClick={avanzarPrevio}
				/>
				<img
					id="avatar-ajustes"
					src={imagenes[imagenActual].img}
					alt="Avatar"
				/>
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
