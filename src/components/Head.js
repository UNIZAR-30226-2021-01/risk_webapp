import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

/**
 * Contiene lo correspondiente a la cabecera html de la aplicación, incluye
 * el título de la aplicación y otros metadatos.
 */
export const Head = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Risk</title>
				<meta name="keywords" content="HTML,CSS,JavaScript,Risk" />
				<meta name="description" content="Juego risk online multiplataforma" />
			</Helmet>
		</HelmetProvider>
	)
}

export default Head
