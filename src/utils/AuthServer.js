import { registrarseLocal, logOut } from './AuthApi'
import { obtenerCredenciales } from './usuarioVO'
import { recargarUsuario } from './restAPI'

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
