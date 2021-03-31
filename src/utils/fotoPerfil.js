export const ruta = 'src/assets/fotosPerfil/'
export const extension = '.png'

const obtenerDir = (disponibles, actual, dir) => {
	return ''
}

export const obtenerPrevio = (disponibles, actual) => {
	return obtenerDir(actual, -1)
}

export const obtenerSiguiente = (disponibles, actual) => {
	return obtenerDir(actual, +1)
}
