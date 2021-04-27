import React from 'react'
import tropas from 'assets/tropas/tropas'
import { obtenerCentro } from 'utils/mapa'

const SVGTerritorio = ({ location, index, props }) => {
	console.log('rerender territorio')
	let coords = obtenerCentro(location)
	let clases =
		typeof props.locationClassName === 'function'
			? props.locationClassName(location, index)
			: props.locationClassName
	clases = clases + ` jugador${location.jugador}`

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
					x={coords.x - 35}
					y={coords.y - 50}
				/>
			)}
			{'tropas' in location && (
				<text style={{ fill: 'white' }} x={coords.x + 20} y={coords.y}>
					{location.tropas}
				</text>
			)}
		</g>
	)
}

function territorioPropsAreEqual(prevTerritorio, nextTerritorio) {
	const locationIgual =
		prevTerritorio.location.aspecto === nextTerritorio.location.aspecto &&
		prevTerritorio.location.conexiones.length ===
			nextTerritorio.location.conexiones.length &&
		prevTerritorio.location.conexiones.every(
			(val, index) => val === nextTerritorio.location.conexiones[index]
		) &&
		prevTerritorio.location.id === nextTerritorio.location.id &&
		prevTerritorio.location.jugador === nextTerritorio.location.jugador &&
		prevTerritorio.location.name === nextTerritorio.location.name &&
		prevTerritorio.location.path === nextTerritorio.location.path &&
		prevTerritorio.location.tropas === nextTerritorio.location.tropas

	const propIgual =
		prevTerritorio.props.locationAriaLabel ===
			nextTerritorio.props.locationAriaLabel &&
		prevTerritorio.props.locationRole === nextTerritorio.props.locationRole &&
		prevTerritorio.props.locationTabIndex ===
			nextTerritorio.props.locationTabIndex &&
		prevTerritorio.props.locationClassName ===
			nextTerritorio.props.locationClassName

	return locationIgual && propIgual
}

export default SVGTerritorio

export const MemorizedSVGTerritorio = React.memo(
	SVGTerritorio,
	territorioPropsAreEqual
)
