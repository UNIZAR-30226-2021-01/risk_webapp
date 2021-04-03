/**
 * Constantes que se usan en la aplicación
 */
const constants = {
	// Valores de prueba
	VALUES: {
		nombre: 'Óscar',
		correo: '780378@unizar.es',
		clave: '@#idfa98sfd9',
		logged: true,
		recibeCorreos: true,
	},

	// Valores nulos que significan desloggeo
	NULL_VALUES: {
		usuario: { nombre: '', correo: '', clave: '', recibeCorreos: true },
		logged: false,
	},

	// Nombre de las cookies de usuario
	COOKIE_USER: 'user',

	// Opciones de las cookies de usuario
	OPTIONS_COOKIE: { expires: 7, sameSite: 'lax' },

	// URL base del servidor de juego
	BASE_SERVER_URL: 'https://risk-servidor.herokuapp.com/',

	// Tiempo de refresco
	REFRESH_TIME: 2500,
}

export default constants
