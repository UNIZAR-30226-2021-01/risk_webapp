import { svgPathProperties } from 'svg-path-properties'

/**
 * Dada una localización delimitada por sus puntos (svg), devuelve
 * el centro de estos puntos.
 * @param {svg_path} location Ubicación svg
 * @returns {x, y} Centro
 */
export const obtenerCentro = (location) => {
	let pts = new svgPathProperties(location.path)
	let coords = {
		x: 0,
		y: 0,
	}
	for (let i = 0; i < pts.getTotalLength(); i++) {
		coords.x = coords.x + pts.getPointAtLength(i).x
		coords.y = coords.y + pts.getPointAtLength(i).y
	}
	coords.x = coords.x / pts.getTotalLength()
	coords.y = coords.y / pts.getTotalLength()
	return coords
}

/**
 * Devuelve el id de la ubicación del evento
 * @param {evento} event
 * @returns Id de la ubicación
 */
export const obtenerIdUbicacion = (event) => {
	return event.target.attributes.id.value
}

/**
 * Devuelve el nombre de la ubicación del evento
 * @param {evento} event
 * @returns Nombre de la ubicación
 */
export const obtenerNombreUbicacion = (event) => {
	return event.target.attributes.name.value
}
