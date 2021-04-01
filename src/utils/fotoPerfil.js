export const rutaIcono = 'assets/iconos/'
export const rutaAspecto = 'assets/aspectos/'
export const extension = '.png'

const obtenerDir = (disponibles, actual, dir) => {
	let i = disponibles.findIndex((element, index) => {
		if (element.id === actual) {
			return true
		}
	})
	i = (i + dir) % disponibles.length
	return disponibles[i].id
}

export const obtenerPrevio = (disponibles, actual) => {
	return obtenerDir(disponibles, actual, -1)
}

export const obtenerSiguiente = (disponibles, actual) => {
	return obtenerDir(disponibles, actual, +1)
}

export const obtenerRutaAspecto = (img) => {
	return rutaAspecto + img.toString() + extension
}

export const obtenerRutaIcono = (img) => {
	return rutaIcono + img.toString() + extension
}
