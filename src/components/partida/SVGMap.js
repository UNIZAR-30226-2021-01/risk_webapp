import React from 'react'
import PropTypes from 'prop-types'
import { obtenerCentro } from 'utils/mapa'
import tropas from 'assets/tropas/tropas'

export const SVGMap = (props) => {
	console.log(
		'rerender, memorizar con reactMemo, cada zona a un componente distinto para evitar re-renderizar todo innecesariamente'
	)
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={props.map.viewBox}
			className={props.className}
			role={props.role}
			aria-label={props.map.label}
		>
			{props.childrenBefore}
			{props.map.locations.map((location, index) => {
				let coords = obtenerCentro(location)
				return (
					<g
						key={location.id}
						name={location.name}
						onClick={() => {
							props.onLocationClick(location.id)
						}}
					>
						<path
							id={location.id}
							name={location.name}
							d={location.path}
							className={
								typeof props.locationClassName === 'function'
									? props.locationClassName(location, index)
									: props.locationClassName
							}
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
								props.isLocationSelected &&
								props.isLocationSelected(location, index)
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
			})}
			{props.childrenAfter}
		</svg>
	)
}

SVGMap.propTypes = {
	// Map properties
	map: PropTypes.shape({
		viewBox: PropTypes.string.isRequired,
		locations: PropTypes.arrayOf(
			PropTypes.shape({
				path: PropTypes.string.isRequired,
				id: PropTypes.string.isRequired,
				name: PropTypes.string,
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

SVGMap.defaultProps = {
	className: 'svg-map',
	role: 'none', // No role for map
	locationClassName: 'svg-map__location',
	locationTabIndex: '0',
	locationRole: 'none',
}
