export const obtenerInfoUsuario = (Auth) => {
	return Auth.auth.usuario
}

export const obtenerCredenciales = (Auth) => {
	return {
		idUsuario: Auth.auth.usuario.id,
		clave: Auth.auth.usuario.clave,
	}
}

export const obtenerIconosDisponibles = (Auth) => {
	return Auth.auth.iconos
}

export const obtenerIconosTienda = (Auth) => {
	return Auth.auth.tiendaIconos
}

export const obtenerAspectosDisponibles = (Auth) => {
	return Auth.auth.aspectos
}

export const obtenerAspectosTienda = (Auth) => {
	return Auth.auth.tiendaAspectos
}
