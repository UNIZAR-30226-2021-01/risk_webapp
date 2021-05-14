import React from 'react'
import PropTypes from 'prop-types'

import { MemorizedSVGTerritorio } from './SVGTerritorio'
import { MemorizedAspecto } from './Aspecto'
import { MemorizedNumTropas } from './NumTropas'
import { MemorizedLinea } from './Linea'

export const MemorizedSVGMap = React.memo(function SVGMap(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={props.map.viewBox}
			className={props.className}
			role={props.role}
			aria-label={props.map.label}
		>
			{props.childrenBefore}
			{props.map.locations.map((location, index) => (
				<MemorizedSVGTerritorio
					location={location}
					index={index}
					props={props}
					key={location.id}
				/>
			))}
			{props.map.locations.map(
				(location) =>
					'centrosAdyacentes' in location &&
					location.centrosAdyacentes.map((centro, index) => (
						<MemorizedLinea
							key={`${location.id}-${index}`}
							x1={location.coords.x}
							y1={location.coords.y}
							x2={centro.x}
							y2={centro.y}
						/>
					))
			)}
			{props.map.locations.map((location, index) => (
				<>
					{'aspecto' in location && (
						<MemorizedAspecto
							key={`aspecto-${index}`}
							x={location.coords.x}
							y={location.coords.y}
							numAspecto={location.aspecto}
							jugador={location.jugador}
						/>
					)}
					{'tropas' in location && (
						<MemorizedNumTropas
							key={`tropas-${index}`}
							x={location.coords.x}
							y={location.coords.y}
							numTropas={location.tropas}
						/>
					)}
				</>
			))}
			{props.childrenAfter}
		</svg>
	)
})

MemorizedSVGMap.propTypes = {
	// Map properties
	map: PropTypes.shape({
		viewBox: PropTypes.string.isRequired,
		locations: PropTypes.arrayOf(
			PropTypes.shape({
				path: PropTypes.string.isRequired,
				id: PropTypes.string.isRequired,
				name: PropTypes.string,
				jugador: PropTypes.number,
			})
		).isRequired,
		label: PropTypes.string,
	}).isRequired,
	className: PropTypes.string,
	role: PropTypes.string,

	// Locations properties
	locationClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	locationTabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	locationRole: PropTypes.string,
	locationAriaLabel: PropTypes.func,
	onLocationMouseOver: PropTypes.func,
	onLocationMouseOut: PropTypes.func,
	onLocationMouseMove: PropTypes.func,
	onLocationClick: PropTypes.func,
	onLocationKeyDown: PropTypes.func,
	onLocationFocus: PropTypes.func,
	onLocationBlur: PropTypes.func,
	isLocationSelected: PropTypes.func,

	// Slots
	childrenBefore: PropTypes.node,
	childrenAfter: PropTypes.node,
}

MemorizedSVGMap.defaultProps = {
	className: 'svg-map',
	role: 'none', // No role for map
	locationClassName: 'svg-map__location',
	locationTabIndex: '0',
	locationRole: 'none',
}
