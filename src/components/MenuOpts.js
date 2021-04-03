import React from 'react'
import './MenuOpts.css'

/**
 * Opciones del usuario para la cabecera
 * @deprecated
 */
export const MenuOpts = () => {
	return (
		<div id="optbar">
			<div id="opc-ajustes" className="optbar-item">
				<img src="https://img.icons8.com/color/452/avatar.png" alt="avatar" />
			</div>
			<div id="opc-notificaciones" className="optbar-item">
				<img
					src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
					alt="Icono notificaciones"
				/>
			</div>
			<div id="opc-amigos" className="optbar-item">
				<img
					src="https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-02-512.png"
					alt="Icono amigos"
				/>
			</div>
		</div>
	)
}

export default MenuOpts
