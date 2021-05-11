import React from 'react'
import loading from 'assets/UI/loading.png'

/**
 * Símbolo de cargando girando.
 */
export const Cargando = () => {
	return (
		<div className="loader">
			<img src={loading} id="load-spinner" />
			<p>Cargando...</p>
		</div>
	)
}
