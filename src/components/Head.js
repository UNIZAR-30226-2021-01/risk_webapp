import React from 'react'

/**
 * Contiene la cabecera html (<head>) de la aplicación, incluye
 * estilos y título de la aplicación.
 * @param {string} titulo Título de la web que aparecerá en la pestaña.
 */
export const Head = ({titulo}) => {
	return (
		<head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{titulo}</title>
		</head>
	)
}

export default Head;
