/**
 * Wrappers para acceder cómodamente a los distintos
 * campos de la información del usuario.
 * @module usuarioVO
 */

/**
 * Devuelve la información del usuario.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Objeto con la información del usuario
 */
export const obtenerInfoUsuario = (Auth) => {
	return Auth.auth.usuario
}

/**
 * Devuelve las credenciales del usuario registrado.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Objeto con (idUsuario, clave) del usuario
 */
export const obtenerCredenciales = (Auth) => {
	return {
		idUsuario: Auth.auth.usuario.id,
		clave: Auth.auth.usuario.clave,
	}
}

/**
 * Devuelve el id del usuario.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Id del usuario
 */
export const obtenerIdUsuario = (Auth) => {
	return Auth.auth.usuario.id
}

/**
 * Devuelve la lista de iconos del usuario.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de iconos del usuario
 */
export const obtenerIconosDisponibles = (Auth) => {
	return Auth.auth.iconos
}

/**
 * Devuelve la lista de iconos de la tienda.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de iconos de la tienda
 */
export const obtenerIconosTienda = (Auth) => {
	return Auth.auth.tiendaIconos
}

/**
 * Devuelve la lista de aspectos del usuario.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de aspectos del usuario
 */
export const obtenerAspectosDisponibles = (Auth) => {
	return Auth.auth.aspectos
}

/**
 * Devuelve la lista de aspectos de la tienda.
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de aspectos de la tienda
 */
export const obtenerAspectosTienda = (Auth) => {
	return Auth.auth.tiendaAspectos
}
