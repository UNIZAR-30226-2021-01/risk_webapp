import { registrarseLocal, logOut } from './AuthApi'
import { recargarUsuario } from './restAPI'

export const recargarUsuarioServer = async (Auth) => {
	console.log(Auth)
	const nuestraInfo = {
		idUsuario: Auth.auth.usuario.id,
		clave: Auth.auth.usuario.clave,
	}
	const data = await recargarUsuario(nuestraInfo)
	if (data.err) {
		logOut(Auth)
	} else {
		registrarseLocal(Auth, data)
	}
}
