import { registrarseLocal, logOut } from './AuthApi'
import { obtenerCredenciales } from './usuarioVO'
import { recargarUsuario } from './restAPI'

/**
 * Módulo de la autenticación del usuario en el servidor con
 * sus consecuencias en local.
 * @module AuthServer
 */

/**
 * Recarga al usuario pasado como parámetro en el servidor,
 * si falla la recarga desloggea al usuario, si no actualiza
 * localmente los datos.
 * @param {contexto} Auth
 * @public
 */
export async function recargarUsuarioServer(Auth) {
	console.log(Auth)
	const nuestraInfo = obtenerCredenciales(Auth)
	const data = await recargarUsuario(nuestraInfo)
	if (data.err) {
		logOut(Auth)
	} else {
		registrarseLocal(Auth, data)
	}
}
