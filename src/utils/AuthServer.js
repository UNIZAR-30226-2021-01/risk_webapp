import { registrarseLocal, logOut } from './AuthApi'
import { obtenerCredenciales } from './usuarioVO'
import { recargarUsuario } from './restAPI'

/**
 * Recarga al usuario pasado como parámetro en el servidor,
 * si falla la recarga desloggea al usuario, si no actualiza
 * localmente los datos.
 * @param {contexto} Auth
 */
export const recargarUsuarioServer = async (Auth) => {
	console.log(Auth)
	const nuestraInfo = obtenerCredenciales(Auth)
	const data = await recargarUsuario(nuestraInfo)
	if (data.err) {
		logOut(Auth)
	} else {
		registrarseLocal(Auth, data)
	}
}
