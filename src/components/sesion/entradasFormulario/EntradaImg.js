import React, { useState, useEffect } from 'react'
import { obtenerPrevio, obtenerSiguiente } from 'utils/fotoPerfil'
import { MDBCol } from 'mdbreact'
import ErroresCampo from './ErroresCampo'
import FlechaIzquierda from 'assets/UI/flecha_izquierda.png'
import FlechaDerecha from 'assets/UI/flecha_derecha.png'

/**
 * EntradaImg es un selector de imagen entre una serie de disponibles
 * @param {formulario} register Formulario al que se adhiere
 * @param {errores_formulario} errors Errores del formulario
 * @param {string} tag Nombre del campo
 * @param {array_int} disponibles Imagenes disponibles
 * @param {int} inicial Valor inicial del formulario
 * @param {array_int} imagenes Imagenes correspondientes y su precio
 * @returns Campo de entrada
 */
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
			<MDBCol className="selector-avatar">
				<img
					className="flecha sig"
					src={FlechaIzquierda}
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
					src={FlechaDerecha}
					alt="Flecha siguiente"
					onClick={avanzarSiguiente}
				/>
			</MDBCol>
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
