export const obtenerInfoUsuario = (Auth) => {
	return Auth.auth.usuario
}

/**
 * Devuelve las credenciales del usuario registrado
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
 * Devuelve la lista de iconos del usuario
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de iconos del usuario
 */
export const obtenerIconosDisponibles = (Auth) => {
	return Auth.auth.iconos
}

/**
 * Devuelve la lista de iconos de la tienda
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de iconos de la tienda
 */
export const obtenerIconosTienda = (Auth) => {
	return Auth.auth.tiendaIconos
}

/**
 * Devuelve la lista de aspectos del usuario
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de aspectos del usuario
 */
export const obtenerAspectosDisponibles = (Auth) => {
	return Auth.auth.aspectos
}

/**
 * Devuelve la lista de aspectos de la tienda
 * @param {contexto} Auth Contexto de la aplicación
 * @returns Lista de aspectos de la tienda
 */
export const obtenerAspectosTienda = (Auth) => {
	return Auth.auth.tiendaAspectos
}