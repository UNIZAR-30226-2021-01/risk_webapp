import React from 'react'
import tropas from 'assets/tropas/tropas'
import { obtenerCentro } from 'utils/mapa'

const SVGTerritorio = ({ location, index, props }) => {
	let coords = obtenerCentro(location)
	let clases =
		typeof props.locationClassName === 'function'
			? props.locationClassName(location, index)
			: props.locationClassName
	if (location.jugador) {
		clases = clases + ` jugador${location.jugador}`
	}

	return (
		<g
			name={location.name}
			onClick={() => {
				props.onLocationClick(location.id)
			}}
		>
			<path
				id={location.id}
				name={location.name}
				d={location.path}
				className={clases}
				tabIndex={
					typeof props.locationTabIndex === 'function'
						? props.locationTabIndex(location, index)
						: props.locationTabIndex
				}
				role={props.locationRole}
				aria-label={
					typeof props.locationAriaLabel === 'function'
						? props.locationAriaLabel(location, index)
						: location.name
				}
				aria-checked={
					props.isLocationSelected && props.isLocationSelected(location, index)
				}
				onMouseOver={props.onLocationMouseOver}
				onMouseOut={props.onLocationMouseOut}
				onMouseMove={props.onLocationMouseMove}
				onKeyDown={props.onLocationKeyDown}
				onFocus={props.onLocationFocus}
				onBlur={props.onLocationBlur}
				key={location.id}
			/>
			{'aspecto' in location && (
				<image
					href={tropas[location.aspecto].img}
					height="100px"
					width="100px"
					x={coords.x - 50}
					y={coords.y - 50}
				/>
			)}
			{'tropas' in location && (
				<text style={{ fill: 'red' }} x={coords.x + 20} y={coords.y}>
					{location.tropas}
				</text>
			)}
		</g>
	)
}

export default SVGTerritorio
