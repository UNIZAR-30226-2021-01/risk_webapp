export const rutaIcono = 'assets/iconos/'
export const rutaAspecto = 'assets/aspectos/'
export const extension = '.png'
/**
 * Implementa la lógica para la actualización de una foto en
 * la configuración de un usuario.
 * @module fotoPerfil
 */

/**
 * Obtiene el siguiente hacia la dirección pasada como
 * parámetro
 * @param {lista_objeto} disponibles Lista de objetos disponibles
 * @param {int} actual Id del objeto actual
 * @param {int} dir Dirección hacia la que buscar
 * @returns Id del siguiente
 * @public
 */
const obtenerDir = (disponibles, actual, dir) => {
	let i = disponibles.findIndex((element) => {
		if (element.id === actual) {
			return true
		}
	})
	i = (i + dir) % disponibles.length
	if (i < 0) {
		i = disponibles.length - 1
	}
	console.log(i)
	return disponibles[i].id
}

/**
 * Devuelve el id previo dados la lista y el actual
 * @param {lista_objeto} disponibles Lista de objetos disponibles
 * @param {int} actual Id del objeto actual
 * @returns id
 */
export function obtenerPrevio(disponibles, actual) {
	return obtenerDir(disponibles, actual, -1)
}

/**
 * Devuelve el id siguiente dados la lista y el actual
 * @param {lista_objeto} disponibles Lista de objetos disponibles
 * @param {int} actual Id del objeto actual
 * @returns id
 */
export function obtenerSiguiente(disponibles, actual) {
	return obtenerDir(disponibles, actual, +1)
}

/**
 * @deprecated
 */
export function obtenerRutaAspecto(img) {
	return rutaAspecto + img.toString() + extension
}

/**
 * @deprecated
 */
export function obtenerRutaIcono(img) {
	return rutaIcono + img.toString() + extension
}
